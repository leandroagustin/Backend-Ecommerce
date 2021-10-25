const fs = require("fs");

const writeFileAsync = async (arr) => {
  await fs.promises.writeFile(
    "./productos.txt",
    JSON.stringify(arr, null, 2),
    "utf-8"
  );
};

const readFileAsync = async (arr) => {
  let file = await fs.promises.readFile("./productos.txt", "utf-8");
  return file;
};

class Contenedor {
  constructor() {
    this.pr = [];
  }

  async save(product) {
    let fileExits = await readFileAsync(); //String
    if (fileExits && fileExits.length >= 0) {
      let dataFile = JSON.parse(fileExits);
      product.id = dataFile.length + 1;
      dataFile.push(product);
      this.pr = dataFile;
      writeFileAsync(this.pr);
    } else {
      product.id = 1;
      this.pr.push(product);
      writeFileAsync(this.pr);
    }
  }

  async getById(id) {
    let productId = await readFileAsync();
    let dataFile = JSON.parse(productId);
    const itemFound = dataFile.find((item) => item.id === id);
    if (itemFound) {
      console.log(itemFound);
    } else {
      throw null;
    }
  }

  async getAll() {
    await readFileAsync();
  }

  async deleteById(itemId) {
    let data = await readFileAsync();
    if (data) {
      let dataFile = JSON.parse(data);
      let arrayFilter = dataFile.filter((item) => item.id !== itemId);
      this.pr = arrayFilter;
      writeFileAsync(this.pr);
      console.log(`se elimino correctamente el id: ${itemId}`);
    } else {
      throw `no existe el id ${itemId}`;
    }
  }

  async deleteAll() {
    await writeFileAsync([]);
  }
}
//desafio 2
// let c = new Contenedor();
//Llamado de prueba a cada metodo:
// c.save({
//   title: "BikeMTB",
//   price: 2400,
//   thumbnail:
//     "https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-2021.appspot.com/o/bici-de-paseo.jpg?alt=media&token=52c65044-4cf9-4ef8-b49d-0513cd29008e",
// });
// c.save({ title: "BikePaseo", price: 2000, thumbnail: "https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-2021.appspot.com/o/bici-electrica.jpg?alt=media&token=440e8848-0a87-4b82-908a-aed67dbe1f19" });
// c.save({ title: "BikeElectrica", price: 3000, thumbnail: "https://firebasestorage.googleapis.com/v0/b/e-commerce-reactjs-2021.appspot.com/o/bicimtb4.png?alt=media&token=c69bf090-10a8-498c-8dfd-d34626e21a8c"});
// c.getById(2);
// c.getAll();
// c.deleteById(2);
// c.deleteAll();

//Desafio 3

const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080 || process.env.PORT;

app.get("/productos", async (req, res) => {
  let data = await readFileAsync();
  res.json({ data });
});

app.get("/productoRandom", async (req, res) => {
  let data = await readFileAsync();
  let dataFile = JSON.parse(data);
  const random = Math.floor(Math.random() * dataFile.length) + 1;
  //Como me devuelve la posicion del objeto, le sumo un 1 para que me lo devuelva finalmente por el id.
  res.send(dataFile[random]); //Llamo el objeto en  aleatorio que me devuelve el valor de random
});

app.listen(PORT, () => {
  console.log("Server is run on port ", PORT);
});

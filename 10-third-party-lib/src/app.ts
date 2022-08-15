import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("validation errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const product = new Product("A book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

"use stricts";

import { getData } from "../Store/fetchApi.js";
import { cardProduct } from "../Components/cardProduct.js";
import { cardUsers } from "../Components/cardUsers.js";

const renderArea = document.querySelector("#render-area");
const renderUsers = document.querySelector("#render-user");
const products = await getData("products");
const users = await getData("users");

products.map((product) => {
  renderArea.innerHTML += cardProduct(product);
});

users.map((user) => {
  renderUsers.innerHTML += cardUsers(user);
});

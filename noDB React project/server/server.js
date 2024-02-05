import express from "express";
import morgan from "morgan";
import viteExpress from "vite-express";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

import handlerFunctions from "./controller.js";

app.get("/inventory", handlerFunctions.getInventory);

app.post("/inventory/add", handlerFunctions.addRow);

app.delete("/inventory/delete/:id", handlerFunctions.deleteItem);

app.put("/inventory/update/:id", handlerFunctions.updateItem);

viteExpress.listen(app, 8888, () => {
  console.log("we are livin th good life at http://localhost:8888");
});

import express from "express";
import productRoutes from "./productRoutes";
import purchasesRoutes from "./purchasesRoutes";
import salesRoutes from "./salesRoutes";
import userRoutes from "./userRoutes";

const app = express();

app.use("/product", productRoutes);
app.use("/purchase" , purchasesRoutes);
app.use("sales", salesRoutes);
app.use("/user", userRoutes);

export default app;

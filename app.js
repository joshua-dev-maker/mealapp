import express from "express";
// routes
import mealRouter from "./src/routers/meal.router";
const PORT = 9001;

const app = express();
app.use(express.json());
// console.log("hurray");
app.get("/", (req, res) => {
  return res.send("connected");
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});







// handle
app.use("/api/v1/meals", mealRouter);



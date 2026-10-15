import express, { Router } from "express";

const userRouter: Router = express.Router()

userRouter.get("/users", (req, res) => {
  res.json({ message: "will return list of users" });
});

export default userRouter;
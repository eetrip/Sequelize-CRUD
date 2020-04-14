import { Router } from "express";

import { userController } from "../controllers/user";
const routes = new Router();

routes.get("/api/all", userController);

export default routes;

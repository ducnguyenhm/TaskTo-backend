"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router.get("/", UserController_1.getUsers);
router.post("/", UserController_1.postUser);
router.get("/:cognitoId", UserController_1.getUser);
exports.default = router;

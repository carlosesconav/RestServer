"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controller/usersController");
const router = (0, express_1.Router)();
router.get('/getUsers', usersController_1.getUsers);
router.get('/getUser/:id', usersController_1.getUser);
router.post('/createUser', usersController_1.createUser);
router.put('/updateUser/:id', usersController_1.updateUser);
router.delete('/deleteUser/:id', usersController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map
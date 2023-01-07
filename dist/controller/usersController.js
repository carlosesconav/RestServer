"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../database/user"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield user_1.default.findAll();
        res.json(users);
    });
}
exports.getUsers = getUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield user_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                msg: `El usuario con el id: ${id} no existe`
            });
        }
    });
}
exports.getUser = getUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, state } = req.body;
        try {
            const existEmail = yield user_1.default.findOne({
                where: {
                    email: email
                }
            });
            if (existEmail) {
                return res.status(400).json({
                    msg: `There is already a user with the email ${email}`
                });
            }
            const user = yield user_1.default.create({
                name,
                email,
                state
            });
            res.json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Error in creating user"
            });
        }
    });
}
exports.createUser = createUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, email, state } = req.body;
        try {
            const user = yield user_1.default.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    msg: `The user with id: ${id} doesnt exist`
                });
            }
            yield user.update({
                name,
                email,
                state
            });
            res.json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Error in creating user"
            });
        }
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield user_1.default.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    msg: `The user with id: ${id} doesnt exist`
                });
            }
            yield user.destroy();
            res.json({
                msg: "the user has been removed"
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Error in delete user"
            });
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersController.js.map
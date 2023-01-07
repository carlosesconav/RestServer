import { Router } from "express";
import {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser
} from '../controller/usersController';

const router = Router();

router.get('/getUsers', getUsers);
router.get('/getUser/:id', getUser);
router.post('/createUser', createUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;
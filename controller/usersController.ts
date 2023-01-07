import { json, Request, Response } from "express";
import User from "../database/user"
export async function getUsers(req: Request, res: Response) {

    const users = await User.findAll();

    res.json(users);

}

export async function getUser(req: Request, res: Response) {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `El usuario con el id: ${id} no existe`
        });
    }

}

export async function createUser(req: Request, res: Response) {

    const { name, email, state } = req.body;

    try {

        const existEmail = await User.findOne({

            where: {
                email: email
            }

        });

        if (existEmail) {
            return res.status(400).json({
                msg: `There is already a user with the email ${email}`
            })
        }

        const user = await User.create({
            name,
            email,
            state
        })

        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: "Error in creating user"
        })

    }

}

export async function updateUser(req: Request, res: Response) {

    const { id } = req.params;
    const { name, email, state } = req.body;

    try {

        const user = await User.findByPk(id);
        if (!user) {

            return res.status(404).json({
                msg: `The user with id: ${id} doesnt exist`
            })

        }

        await user.update({

            name,
            email,
            state

        });

        res.json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: "Error in creating user"
        })

    }

}

export async function deleteUser(req: Request, res: Response) {

    const { id } = req.params;

    try {

        const user = await User.findByPk(id);
        if (!user) {

            return res.status(404).json({
                msg: `The user with id: ${id} doesnt exist`
            })

        }

        await user.destroy();

        res.json({
            msg: "the user has been removed"
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: "Error in delete user"
        })

    }

}

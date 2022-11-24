import express from 'express';
const router = express.Router();
import { getUsers, getUserByLogin, createUser, deleteUserByLogin, updateUserByLogin } from './../../../../services/users.js';

// createUser
router.post('/', (req, res) => {
    const login = req.body['login'];
    const email = req.body['email'];
    createUser(login, email)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
});

// readUsers
router.get('/', (req,res) => {
    getUsers()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

// readUserByLogin
router.get('/:login', (req, res) => {
    const login = req.params['login'];
    getUserByLogin(login)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

// updateUserByLogin
router.put('/:login', (req, res) => {
    const login = req.params['login'];
    const newLogin = req.body['newLogin'];
    const newEmail = req.body['newEmail'];
    updateUserByLogin(login, newLogin, newEmail)
        .then(result => {
            res.json({
                msg: "Updated User",
                result: result
            });
        })
        .catch(err => {
            res.json(err);
        })
});

// deletedUserByLogin
router.delete('/:login', (req, res) => {
    const login = req.params['login'];
    deleteUserByLogin(login)
        .then(result => {
            res.json({
                msg: "Deleted User",
                result: result
            });
        })
        .catch(err => {
            res.json(err);
        })
});

export default router;
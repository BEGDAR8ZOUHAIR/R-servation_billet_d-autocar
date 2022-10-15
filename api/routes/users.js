import express from 'express';

import {  getAllUsers, getUser, updateUser, deleteUser } from '../controllers/user.js';
const router = express.Router();

// UPDATE
router.put('/:id', updateUser);
// DELETE
router.delete('/:id', deleteUser);
// GET
router.get('/:id', getUser);
// GET ALL
router.get('/', getAllUsers);



export default router;
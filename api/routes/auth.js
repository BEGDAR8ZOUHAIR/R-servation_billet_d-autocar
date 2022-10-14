import express from 'express';
const router = express.Router();
 
router.get('/', (req, res) => {
    res.send('Hello , this is the auth route');
});
router.get('/register', (req, res) => {
    res.send('Hello , this is the register route');
});

export default router;

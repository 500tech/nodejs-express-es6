import express from 'express'
const router = express.Router();

// middleware specific to this router
// define the home page route
router.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
});
export default router;
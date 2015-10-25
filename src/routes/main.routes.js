// Import node module
import express from 'express';
const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
  res.send({message: 'Hello World!!'});
});
// Exporting an object as the default import for this module
export default router;

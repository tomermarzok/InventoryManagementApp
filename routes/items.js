import express from 'express';
import { getAllItems, addNewItem, getItemById, updateItemById, deleteById, withdrawItem, depositItem} from '../controllers/items.js';
const router = express.Router();


router.get('/',getAllItems);
router.post('/',addNewItem);
router.get('/:id',getItemById);
router.patch('/:id',updateItemById);
router.delete('/:id',deleteById);
router.patch('/:id/withdraw/:amount',withdrawItem);
router.patch('/:id/deposit/:amount',depositItem);


export default router;
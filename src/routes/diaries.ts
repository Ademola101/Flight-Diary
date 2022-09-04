import express from 'express';
import diaryService from '../services/dairyService';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSentiveDataEntry());
});


router.post('/', (_req, res) => {
  res.send('hi');
});


export default router;
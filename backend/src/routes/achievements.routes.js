const express = require('express');
const {
  getAllAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} = require('../controller/achievementController');

const router = express.Router();

router.get('/achievements', getAllAchievements);
router.get('/achievements/:id', getAchievementById);
router.post('/achievements', createAchievement);
router.put('/achievements/:id', updateAchievement);
router.delete('/achievements/:id', deleteAchievement);

module.exports = router;

const Achievement = require('../model/acheivement.model');

const defaultAchievements = [
  {
    winnerName: 'Winner 1',
    month: new Date('2026-01-01'),
    title: 'Smart India Hackathon',
    description: 'Recognized for building an innovative solution through teamwork, research, and rapid development.',
    tagname: 'HACKATHON',
  },
  {
    winnerName: 'Winner 2',
    month: new Date('2026-02-01'),
    title: 'Prastuti Ideathon',
    description: 'Presented a high-impact technology idea and earned recognition for creativity and execution.',
    tagname: 'IDEATHON',
  },
  {
    winnerName: 'Winner 3',
    month: new Date('2026-03-01'),
    title: 'Hack Vortex 2.0',
    description: 'Delivered a practical project under pressure and demonstrated strong technical collaboration.',
    tagname: 'HACKATHON',
  },
  {
    winnerName: 'Winner 4',
    month: new Date('2026-04-01'),
    title: 'Silent Query',
    description: 'Showcased problem-solving skills with a thoughtful and well-executed technical solution.',
    tagname: 'TECH EVENT',
  },
];

const seedAchievementData = async () => {
  for (const achievement of defaultAchievements) {
    await Achievement.updateOne(
      { title: achievement.title },
      { $set: achievement },
      { upsert: true }
    );
  }
};

const fallbackAchievements = defaultAchievements.map((achievement, index) => ({
  _id: `default-achievement-${index + 1}`,
  ...achievement,
}));

const getAllAchievements = async (req, res) => {
  if (!process.env.MONGODB_URI) {
    return res.status(200).json(fallbackAchievements);
  }

  try {
    await seedAchievementData();
    const achievements = await Achievement.find().sort({ createdAt: 1 });
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.status(200).json(achievement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAchievement = async (req, res) => {
  const achievement = new Achievement(req.body);
  try {
    const savedAchievement = await achievement.save();
    res.status(201).json(savedAchievement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAchievement = async (req, res) => {
  try {
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.status(200).json(updatedAchievement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAchievement = async (req, res) => {
  try {
    const deletedAchievement = await Achievement.findByIdAndDelete(req.params.id);
    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.status(200).json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
};


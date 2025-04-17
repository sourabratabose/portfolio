export type Achievement = {
  heading: string,
  date?: string,
  description: string,
  url?: string
}

type AchievementsData = {
  category: string;
  description: string;
  achievements: Achievement[];
};

export default AchievementsData;

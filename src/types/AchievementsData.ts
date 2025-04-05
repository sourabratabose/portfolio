export type Achievement = {
  heading: string,
  date?: string,
  description: string,
  url?: string
}

type AchievementsData = {
  category: string;
  achievements: Achievement[];
};

export default AchievementsData;

import { ReactNode } from "react";

export type Achievement = {
  heading: string,
  date?: string,
  description: string,
  url?: string
}

type AchievementsData = {
  category: string;
  icon?: ReactNode
  description: string;
  achievements: Achievement[];
};

export default AchievementsData;

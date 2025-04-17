import AchievementsData from "./AchievementsData";
import CertificationData from "./CertificationData";
import CodeProfileData from "./CodingProfileData";
import EducationData from "./EducationData";
import ExperienceData from "./ExperienceData";
import HeroData from "./HeroData";
import ProjectData from "./ProjectData";
import SkillData from "./SkillData";

type PageData = {
  hero: HeroData,
  experience: ExperienceData[],
  codingProfile: CodeProfileData[],
  certification: CertificationData[],
  education: EducationData[],
  skills: SkillData[],
  about: string[],
  projects: ProjectData[],
  contactEmail: string,
  // spokenLanguages: string[],
  achievements: AchievementsData[]
}

export default PageData;
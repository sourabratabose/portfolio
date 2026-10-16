import type AchievementsData from "./AchievementsData";
import type CertificationData from "./CertificationData";
import type CodeProfileData from "./CodingProfileData";
import type EducationData from "./EducationData";
import type ExperienceData from "./ExperienceData";
import type HeroData from "./HeroData";
import type ProjectData from "./ProjectData";
import type SkillData from "./SkillData";

type PageDataType = {
	hero: HeroData;
	experience: ExperienceData[];
	codingProfile: CodeProfileData[];
	certification: CertificationData[];
	education: EducationData[];
	skills: SkillData[];
	about: string[];
	projects: ProjectData[];
	contactEmail: string;
	// spokenLanguages: string[],
	achievements: AchievementsData[];
};

export default PageDataType;

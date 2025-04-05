import { Context, createContext, ReactNode } from "react";
import type PageData from "../types/PageDataContext";

const defaultValue: PageData = {
  hero: {
    job: "Fullstack Web and hybrid Mobile app developer",
    location: "Kolkata, WB, India",
    countrySymbol: "IN",
    description:
      "A passionate fullstack web developer building bleeding edge tech projects in Typescript and Rust for people.",
  },
  codingProfile: [
    {
      platform: "Geeks for Geeks",
      url: "https://www.geeksforgeeks.org/user/sourabratabose/",
      img: "",
      imgFallback: "GFG",
      description:
        "Displaying my progress across various data structures and algorithms. The profile highlights my coding activity, contest participation, and achieved ranks. This serves as a public record of my coding journey and improvement on the platform.",
      pointsToBeNoted: [
        "Solved over 200+ questions in total.",
        "Solved over 100+ medium difficulty questions.",
        "Rated as a 4 star + problem solver.",
      ],
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/sourabratabose/",
      img: "",
      imgFallback: "LC",
      description:
        "LeetCode is a leading platform for technical interview preparation, offering a vast library of coding problems across various difficulty levels and topics. It simulates real interview environments with its online code editor and testing capabilities. Users can practice company-specific questions and participate in contests to hone their skills. LeetCode also fosters a strong community for discussions and sharing solutions.",
      pointsToBeNoted: [
        "Solved over 100+ questions in total.",
        "Rated as a 1460+ elo LeetCoder.",
        "Have an acceptance rate over 70% + in overall submissions.",
      ],
    },
  ],
  certification: [
    {
      img: "",
      imgFallback: "AWS",
      certifiedBy: "Amazon Web Services",
      url: "",
      subject: "AWS Cloud Practitioner",
      date: "March 17, 2025",
      description:
        "The AWS Cloud Practitioner course offers a foundational understanding of AWS services and cloud computing concepts. It covers core topics like AWS infrastructure, security, pricing, and support models. This course is ideal for individuals in technical and non-technical roles seeking cloud literacy.",
    },
    {
      img: "",
      imgFallback: "GS-GA",
      certifiedBy: "Google Skillshop",
      url: "",
      subject: "Google Analytics & Reports",
      date: "March 28, 2025",
      description:
        "The Google Analytics & Reports course equips you with the skills to track and analyze website and app traffic. You'll learn to generate insightful reports on user behavior, acquisition, and conversions. The course covers understanding key metrics, navigating the Google Analytics interface, and customizing reports for specific needs. Ultimately, it empowers data-driven decision-making to improve online performance and marketing strategies.",
    },
    {
      img: "",
      imgFallback: "Udemy",
      certifiedBy: "Udemy",
      url: "",
      subject: "NodeJS Architecture",
      date: "April 3, 2025",
      description:
        "This NodeJS architecture course delves into its event-driven, non-blocking I/O model. It explores how NodeJS utilizes the V8 JavaScript engine for high performance. The course covers key architectural patterns, module systems (like CommonJS and ES Modules), and handling asynchronous operations efficiently. Understanding this architecture is crucial for building scalable and performant network applications.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      img: "",
      imgFallback: "IIITK",
      institute: "Indian Institute of Information Technology, Kalyani",
      timePeriod: "December 2021 - July 2025",
      grade: "7.75/10",
      lessons: [
        "Linear Algebra",
        "Differential Calculus",
        "Statistics and Probability",
        "Digital Logic",
        "Computer Organization and Architecture",
        "Microprocessor and Microcontroller",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Compiler Design",
        "Database System Management and Administration",
      ],
    },
    {
      degree: "Diploma in Science",
      img: "",
      imgFallback: "APJS",
      institute: "Apeejay School, Salt Lake",
      timePeriod: "March 2018 - June 2020",
      grade: "92.33%",
      lessons: [
        "Physics",
        "Chemistry",
        "Biology",
        "Maths",
        "English",
        "Computer Education",
      ],
    },
    {
      degree: "Diploma in General Education",
      img: "",
      imgFallback: "APJS",
      institute: "Apeejay School, Salt Lake",
      timePeriod: "March 2017 - June 2018",
      grade: "90.1%",
      lessons: [
        "Science",
        "Sociology",
        "Physical Education",
        "Maths",
        "English",
        "Computer",
        "Bengali",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        "Javascript",
        "Typescript",
        "C",
        "C++",
        "Rust",
        "Java",
        "Python",
      ],
      color: "blue",
    },
    {
      category: "Database and ORM",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "DrizzleORM",
        "Mongoose",
      ],
      color: "red",
    },
    {
      category: "Frameworks and Runtimes",
      skills: [
        "BunJS",
        "NextJS",
        "ReactJS",
        "ElysiaJS",
        "BetterAuthJS",
        "ReactNative",
        "Anchor",
      ],
      color: "amber",
    },
    {
      category: "DevOps and Tools",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Forage",
        "Grafana + Loki",
      ],
      color: "lime",
    },
  ],
  about: [
    "I'm a 22-year-old experienced Full Stack Developer with a knack for building products that make a difference. My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.",
    "Throughout my career, I've been deeply involved in the startup ecosystem. I've worked with various startups, embracing the fast-paced, innovative nature of these environments. This journey led me to found my own startup, where I gained firsthand experience in every aspect of product development and business operations.",
    "During my high school years, I excelled in software development, earning the prestigious title of DUX (top student) in this field. This early achievement laid the foundation for my passion and expertise in programming.",
  ],
  projects: [
    {
      img: "",
      imgFallback: "Digital Quill - An online fullstack blog application.",
      title: "Digital Quill",
      description:
        "A Next.js single admin multi visitor blog application leveraging the power of React with server-side rendering (SSR) and static site generation (SSG) to create a fast, SEO-friendly, and dynamic blogging platform. It allows for easy content creation, management, and delivery with optimized performance.",
      timePeriod: "August 2024 - November 2024",
      technologies: [
        "BunJS",
        "NextJS",
        "ReactJS",
        "BetterAuth",
        "Shadcn/UI",
        "RSS",
        "SSE and RESTful API",
        "PostgreSQL",
        "DrizzleORM",
        "SEO + Sitemap",
      ],
      pointsToBeNoted: [
        "Markdown Support allows writing blog posts in a simple and lightweight markup language that can be easily converted to HTML. Libraries like remark can be used for parsing Markdown.",
        "Dynamic Routing enables clean and SEO-friendly URLs for blog posts based on their titles or slugs (e.g., /posts/my-first-blog-post). Next.js provides built-in support for dynamic routes.",
        "Category and Tagging System facilitates content organization and allows users to easily find articles related to specific topics. This often involves creating database models for categories and tags and implementing filtering functionality.",
        "Pagination improves performance and user experience by breaking long lists of blog posts into smaller, manageable pages.",
        "SEO Optimization includes features like generating meta descriptions, title tags, and sitemaps to improve search engine rankings. Next.js makes SEO easier with its SSR/SSG capabilities and libraries like next-seo.",
      ],
      urls: [
        { href: "", label: "Project Repo" },
        { href: "", label: "Live URL" },
      ],
    },
    {
      img: "",
      imgFallback: "Babble - An online fullstack live chat application.",
      title: "Babble",
      description:
        "Babble is a full-stack chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create accounts, join chat rooms, and engage in real-time conversations with other users. With features like user authentication, group chats, and more, Babble provides a seamless and interactive chatting experience.",
      timePeriod: "February 2024 - June 2024",
      technologies: [
        "NodeJS",
        "ExpressJS",
        "ReactJS",
        "Express Cookies",
        "JWT",
        "ChakraUI",
        "SocketIO",
        "RESTful API",
        "Mongoose",
        "MongoDB",
        "UI/UX Design",
      ],
      pointsToBeNoted: [
        "Securely manages user accounts with registration, login, and logout functionalities. Role-based access control can be implemented for administrative features. ",
        "Real-time Messaging: Enables instant delivery of messages between users without requiring page refreshes, typically implemented using WebSockets (e.g., Socket.)",
        "Group Chat Creation and Management: Enables users to create and join group chats with multiple participants. Features include adding/removing members and managing group settings.",
        "File Sharing: Enables users to send and receive various types of files (images, documents, etc.) within their chats. Allows embedding and displaying images, videos, and potentially audio directly within the chat interface.",
      ],
      urls: [
        { href: "", label: "Project Repo" },
        { href: "", label: "Live URL" },
      ],
    },
    {
      img: "",
      imgFallback:
        "Quizzard - A full stack React Native app for people to organize quizzes",
      title: "Quizzard",
      description:
        "Quizzard is a comprehensive full-stack React Native application designed for seamless quiz organization and participation. It empowers users to create, schedule, manage, and take quizzes on the go, fostering interactive learning and assessment. The backend, likely built with technologies like Node.js and Express, handles data management, user authentication, and real-time quiz interactions.",
      timePeriod: "February 2024 - June 2024",
      technologies: [
        "NodeJS",
        "ExpressJS",
        "React Native",
        "Express Cookies",
        "JWT",
        "NativeWind",
        "SocketIO",
        "RESTful API",
        "PostgreSQL",
        "DrizzleORM",
        "UI/UX Design",
      ],
      pointsToBeNoted: [
        "Cross-Platform Compatibility (React Native): Built using React Native, the app functions seamlessly on both iOS and Android platforms from a single codebase, reducing development time and cost.",
        "Real-time Quiz Functionality (WebSockets): Enables synchronized quiz experiences for participants, including real-time question delivery, answer submission tracking, and immediate result updates, likely leveraging WebSockets via libraries like Socket.IO or Pusher.",
        "Scalable Backend Architecture (Node.js/Express): Utilizes Node.js and Express.js for the backend, providing a scalable and efficient server-side environment to handle a large number of users and quiz data.",
        "Quiz Scheduling and Management: Allows organizers to schedule quizzes for specific dates and times, set durations, manage participant access, and track quiz progress.",
      ],
      urls: [
        { href: "", label: "Project Repo" },
        { href: "", label: "Live URL" },
      ],
    },
  ],
  experience: [
    {
      company: "CodSoft",
      role: "Web Developer Intern",
      time: "March 12, 2025 - April 20, 2025",
      url: "",
      img: "",
      imgFallback: "CS",
      description:
        "As a MERN web developer intern, I immersed myself in building full-stack applications using MongoDB, Express.js, React, and Node.js. My daily tasks involved contributing to both frontend and backend development, collaborating with senior engineers on feature implementation and bug fixes. I gained practical experience in the entire software development lifecycle, from understanding requirements to deployment. This internship provided invaluable hands-on experience in modern web development practices.",
      pointsToBeNoted: [
        "Developed a RESTful API endpoint for user authentication, ensuring secure data handling.",
        "Implemented a responsive user interface component using React and Tailwind CSS, enhancing user experience.",
        "Optimized database queries using MongoDB aggregation pipelines, significantly improving application performance.",
        "Integrated third-party libraries for data visualization, providing insightful analytics within the application.",
      ],
    },
    {
      company: "CodeCubes",
      role: "Core Student Member",
      time: "December 12, 2021 - April 20, 2023",
      url: "",
      img: "",
      imgFallback: "CC",
      description:
        "CodeCubes is an exclusive coding club within the college, admitting only highly motivated and skilled students through a selection process. It fosters a collaborative environment for advanced learning and competitive programming. Members engage in challenging projects, participate in coding contests, and receive mentorship from experienced seniors and faculty. The club aims to elevate members' coding proficiency beyond the regular curriculum, preparing them for advanced opportunities in the tech industry.",
      pointsToBeNoted: [
        "Spearheaded the end-to-end organization of multiple coding contests, including problem setting, platform management (like Codeforces or HackerRank), and result declaration, fostering a competitive coding culture within the college.",
        "Designed and curated challenging and engaging problem sets for contests, covering a diverse range of algorithms and data structures, thereby enhancing participants' problem-solving abilities.",
        "Mentored junior members and contest participants, providing guidance on problem-solving techniques and best practices, contributing to the overall skill development within the club.",
      ],
    },
  ],
  contactEmail: "bose.sourabrata21century@gmail.com",
  spokenLanguages: [
    "English (Full Working Proficiency)",
    "Bengali (Native)",
    "Hindi (Bilingual)",
  ],
  achievements: [
    {
      category: "Test Scores",
      achievements: [
        {
          heading: "GATE DS/AI",
          date: "2025",
          description: "Ranked 3678",
          url: "",
        },
        {
          heading: "TATA NQT IT",
          date: "March 2025",
          description: "",
        },
        {
          heading: "Higher Secondary",
          date: "July 2020",
          description: "92.3%",
        },
        {
          heading: "Senior Secondary",
          date: "June 2018",
          description: "90.2%",
        },
      ],
    },
    {
      category: "Spoken Languages",
      achievements: [
        {
          heading: "English",
          description: "Full Working Proficiency",
        },
        {
          heading: "Hindi",
          description: "Bilingual Proficiency",
        },
        {
          heading: "Bengali",
          description: "Native Proficiency",
        },
        {
          heading: "French",
          description: "Elementary Proficiency",
        },
      ],
    },
  ],
};

export const PageData: Context<PageData> =
  createContext<PageData>(defaultValue);

export default function PageDataContext({ children }: { children: ReactNode }) {
  return <PageData.Provider value={defaultValue}>{children}</PageData.Provider>;
}

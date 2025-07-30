import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = ` I’m a passionate frontend developer with experience of creating responsive, user-friendly, and high-performance web interfaces. I specialize in modern technologies like React, Next.js, and Tailwind CSS, with a strong eye for detail and design consistency. My goal is to craft intuitive user experiences that not only look great but also function flawlessly across all devices. I thrive in collaborative environments and take pride in turning ideas into pixel-perfect, scalable, and maintainable frontend solutions that drive user engagement and business success. `;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior Web Developer",
    company: "Abacus Tech.",
    description: `Collaborated on multiple web development projects as a Junior Web Developer. Actively participated in client meetings to gather requirements and translated them into functional web solutions. `,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "PstgreSQL",
      "Tailwind CSS",
      "Wordpress",
    ],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer Intern",
    company: "Ami Technologies Ltd",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and product fetching from a API.",
    technologies: ["HTML", "Tailwind", "Next.js", "FakeStore API"],
    href: "https://tizaraa-test.vercel.app/",
  },
  {
    title: "Emergency Helpline Management System",
    image: project2,
    description:
      "This was a web application with individual back-end and front-end and database servers that helped civilians to get emergency services from various service providers. (Women's Service Provider, Health Service Provider)",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Vite", "Framer-motion"],
    href: "https://myportfolio346.vercel.app/",
  },
  {
    title: "Engineering Services Website Design",
    image: project4,
    description:
      "A responsive corporate website for a mechanical engineering company specializing in fire service equipment, lift systems, and industrial mechanical products. The site showcases their services, product offerings, and company profile with a modern, user-friendly interface optimized for performance and accessibility.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: "https://ami-bd.vercel.app/",
  },
  {
    title: "Restaurant Landing Page",
    image: project5,
    description:
      "A fully responsive and visually appealing landing page tailored for restaurants. It allows visitors to seamlessly explore the menu, view featured dishes, and conveniently book a table online—offering an intuitive and user-friendly experience across all devices.",
    technologies: ["React", "Tailwind"],
    href: "https://restaurants5.netlify.app/",
  },
  {
    title: "Agency Website design",
    image: project6,
    description:
      "Discover a fully responsive digital marketing agency website crafted to captivate and convert. Featuring smooth text animations, interactive custom buttons, and modern design, this site showcases your brand’s story while delivering an engaging user experience across all devices. Perfect for agencies focused on results-driven marketing, innovation, and visual impact.",
    technologies: ["React", "Tailwind"],
    href: "https://bd-calling-f8fvxnegw-mahmudur-rahman-badhons-projects.vercel.app/",
  },
];

export const CONTACT = {
  address: "Mirpur, Dhaka, Bangladesh",
  phoneNo: "+8801867866171 ",
  email: "mahmudur346@gmail.com",
};

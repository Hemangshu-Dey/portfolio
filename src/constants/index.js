import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, ExpressJs, Firebase and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Master of Computer Application",
    company: "Christ University",
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["72%"],
  },
  {
    year: "2020 - 2023",
    role: "Bachelor Of Computer Application",
    company: "Asansol Engineering College",
    // description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["82%"],
  },
  {
    year: "2018 - 2020",
    role: "Intermediate",
    company: "Assembly Of God Church school",
    // description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["83.17%"],
  },
  {
    year: "2016 - 2018",
    role: "High School",
    company: "Assembly Of God Church school",
    // description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["85%"],
  },
];

export const PROJECTS = [
  {
    title: "ShopIT",
    image: project1,
    url: "https://shopit-9ptj.onrender.com/",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, user authentication, reviews section and invoice download ",
    technologies: ["HTML", "CSS", "React", "ExpressJS", "Node.js", "MongoDB"],
  },
  {
    title: "GuestGuard",
    image: project2,
    url: "https://guestguard.vercel.app/",
    description:
      "An application where guests can generate gatepasses by giving some basic information about them.It also has a feature for admins to send e-mails to the visitors if any kind of emergency occurs within the campus",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "End-to-End Dog Vision",
    image: project3,
    url: "https://github.com/Hemangshu-Dey/end-to-end-dog-vision",
    description:
      "A deep learning project to detect the breed of a dog based on a given image.",
    technologies: ["Python","Pandas", "Numpy", "Matplotlib", "Tensorflow", "Tensorflow-hub"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   url: "#",
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+91 6296007139",
  email: "hemangshu1904@gmail.com",
};

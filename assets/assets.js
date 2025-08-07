import user_image from './user-img.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo_saurabh.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './user-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

import dl from './certification/dl.png';
import ml from './certification/ml.png';
import py from './certification/py.png';
import js from './certification/js.png';


export const serviceData = [
    { icon: dl, title: 'Deep Learning and Reinforcement Learning', description: 'Web development is the process of building, programming...', link: '' },
    { icon: ml, title: 'Machine Learning in Production', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: py, title: 'Python Programming Fundamentals', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: js, title: 'Learn Javascript', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Masters of Engineering in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];


// Skills Section Logo's
import htmlLogo from './tech_logo/html.png';
import cssLogo from './tech_logo/css.png';
import sassLogo from './tech_logo/sass.png';
import javascriptLogo from './tech_logo/javascript.png';
import reactjsLogo from './tech_logo/reactjs.png';
import angularLogo from './tech_logo/angular.png';
import reduxLogo from './tech_logo/redux.png';
import nextjsLogo from './tech_logo/nextjs.png';
import tailwindcssLogo from './tech_logo/tailwindcss.png';
import gsapLogo from './tech_logo/gsap.png';
import materialuiLogo from './tech_logo/materialui.png';
import bootstrapLogo from './tech_logo/bootstrap.png';
import springbootLogo from './tech_logo/springboot.png';
import nodejsLogo from './tech_logo/nodejs.png';
import expressjsLogo from './tech_logo/express.png';
import mysqlLogo from './tech_logo/mysql.png';
import mongodbLogo from './tech_logo/mongodb.png';
import firebaseLogo from './tech_logo/firebase.png';
import cLogo from './tech_logo/c.png';
import cppLogo from './tech_logo/cpp.png';
import javaLogo from './tech_logo/java.png';
import pythonLogo from './tech_logo/python.png';
import typescriptLogo from './tech_logo/typescript.png';
import gitLogo from './tech_logo/git.png';
import githubLogo from './tech_logo/github.png';
import vscodeLogo from './tech_logo/vscode.png';
import postmanLogo from './tech_logo/postman.png';
import mcLogo from './tech_logo/mc.png';
import figmaLogo from './tech_logo/figma.png';
import netlifyLogo from './tech_logo/netlify.png';
import vercelLogo from './tech_logo/vercel.png';
import postgreLogo from './tech_logo/postgre.png';
import csharpLogo from './tech_logo/csharp.png';


// Education Section Logo's
import cuLogo from './education_logo/cu_logo.jpg';
import citLogo from './education_logo/cit_logo.png';
import davLogo from './education_logo/dav_logo.jpg';

// Project Section Logo's
import portfolio from './work_logo/portfolio.png'
import codepen from './work_logo/codepen.jpeg'
import disease from './work_logo/disease.jpeg'
import portal from './work_logo/portal.jpeg'
import tbed from './work_logo/tbed.png'
import weather from './work_logo/weather.jpeg'




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo:  htmlLogo},
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: cuLogo,
      school: "Chandigarh University, Mohali, Punjab",
      date: "Aug 2023 - July 2025",
      grade: "7.82 CGPA",
      desc: "I have completed my Master's degree (ME) in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning from Chandigarh University, Mohali, Punjab. During my program, I focused on advanced topics including Artificial Intelligence, Python Programming, Data Analysis, Machine Learning, Computer Vision, and Research Methodology. As part of my academic research, I authored research papers during my course, contributing to the field of AI/ML. My experience at Chandigarh University has provided me with both theoretical knowledge and practical research experience in cutting-edge technologies.",
      degree: "Master's of Engineering - CSE (AI & ML)",
    },
    {
      id: 1,
      img: citLogo,
      school: "Cambridge Institute of Technology, Ranchi, Jharkhand",
      date: "Aug 2019 - Jun 2023",
      grade: "8.56 CGPA",
      desc: "I completed my Bachelor's of Technology degree in Computer Science and Engineering (B.Tech.) from CIT College, Ranchi. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My time at bachelors allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (CSE)",
    },
    {
      id: 2,
      img: davLogo,
      school: "D.A.V. Public School Kusunda, Dhanbad",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12th education from D.A.V. Public School Kusunda, Dhanbad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Information Technology .",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: davLogo,
      school: "D.A.V. Public School Kusunda, Dhanbad",
      date: "Apr 2015 - March 2016",
      grade: "9.6 CGPA",
      desc: "I completed my class 10th education from D.A.V. Public School Kusunda, Dhanbad, under the CBSE board",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "Emotion Detection Web_App",
      description:
        "Developed a model to predict emotions from text using traditional machine learning algorithms (Logistic Regression, Random Forest, SVM, Naive Bayes) and deployed a web-based application for Emotion Detection.",
      image: tbed,
      tags: ["Python", "Machine Learning", "Sklearn","NLP", "Streamlit", "Pickle"],
      github: "https://github.com/Saurabhkumar2911/Emotion_detection_app",
      webapp: "https://emotion-detection-app-1jce.onrender.com/",
    },
    {
      id: 2,
      title: "Multi-Disease Prediction Web_App",
      description:
        "Designed and deployed a web-based application for predicting diseases like Heart Disease, Parkinson’s, and Diabetes using trained ML models. Enabled real-time user input and diagnosis through a user-friendly interface",
      image: disease,
      tags: ["Python", "Machine Learning", "Sklearn", "Streamlit", "Pickle"],
      github: "https://github.com/Saurabhkumar2911/multiple_disease_predict",
      webapp: "https://multiple-disease-predict-krre.onrender.com/",
    },
    {
      id: 3,
      title: "College Placement Portal",
      description:
        "Website where users can view the placement and internship statistics of college and filter on the basis of year, branch, company etc. and only admin can create or update the data.",
      image: portal,
      tags: ["HTML", "CSS","JavaScript","React JS", "Node.js", "MongoDb"],
      github: "https://github.com/Saurabhkumar2911/Placement_portal_frontend",
      webapp: "https://portal11.netlify.app/",
    },
    {
      id: 4,
      title: "Codepen Clone",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: codepen,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Saurabhkumar2911/codepen",
      webapp: "https://symphonious-gingersnap-bd717e.netlify.app/",
    },
    {
      id: 5,
      title: "Advanced Weather App",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: weather,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Saurabhkumar2911/advanced_weatherSite",
      webapp: "https://advweather11.netlify.app/",
    },
  
    
  ];  
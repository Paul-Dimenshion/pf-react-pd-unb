const logotext = "PD"; //  a string containing the initials of the website owner's name
//  an object containing metadata for the website, including the title and description
const meta = {
    title: "Paul Dimension",
    description: "I’m Paul Dimension Full Stack Developer, currently working in Canada",
}; 

/* an object containing data for the website's introductory section, including the website owner's name, 
a brief description, and an image URL */
const introdata = {
    title: "I’m Paul Dimension",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I am a marketer with 17 years experience, who immigrated from Ukraine to Canada and began his way in the field of web development.",
    your_img_url: "/src/assets/images/pd.jpg",
};

//  an object containing data for the website's "about me" section
const dataabout = {
    title: "who I am",
    aboutme: "I am an ambitious pragmatist who aims to achieve results by enjoying the process. That is why I chose coding as my future profession.",
};

// an array of objects containing data for the website owner's work history
const worktimeline = [{
        jobtitle: "Chief Marketing Officer",
        where: "Comfort Line Group",
        date: "2020-2022",
    },
    {
        jobtitle: "Chief Marketing Officer",
        where: "Sterh",
        date: "2018-2020",
    },
    {
        jobtitle: "Brand Manager",
        where: "Euroisol",
        date: "2016-2018",
    },
];

// an array of objects containing data for the website owner's skills
const skills = [{
        name: "HTML 5",
        value: 90,
    },
    {
        name: "CSS 3",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "NODE JS",
        value: 70,
    },
    {
        name: "MySQL",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 60,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "Python",
        value: 55,
    },
];

// an array of objects containing data for the website owner's services
const services = [{
        title: "WEB Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Digital Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Strategy Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

// an array of objects containing data for the website owner's portfolio items
const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

// an object containing data for the website owner's contact information and EmailJS service configuration
const contactConfig = {
    YOUR_EMAIL: "p.demenshyn@gmail.com",
    YOUR_FONE: "(506)477-0324",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

// an object containing URLs for the website owner's social media profiles
const socialprofils = {
    github: "https://github.com/Paul-Dimenshion",
    facebook: "https://github.com/Paul-Dimenshion",
    linkedin: "https://www.linkedin.com/in/pavlo-demenshyn-95bb5b250/",
    twitter: "https://twitter.com/Paul_Dimension",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
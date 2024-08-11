import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Property Listing Website',
        description: "A property listing website for a UK-based company using MERN stack.",
        tools: ['Node', 'Exress', 'OpenAI API', 'MongoDB', 'Nginx'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 2,
        name: 'SMS Spam Filter',
        description: 'A classifier to filter spam emails using Natural Language Processing.',
        tools: ['Python', 'NLP'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Driver Identity Verification',
        description: 'A real-time facial recognition system in vehicles using Computer Vision, capturing and analyzing driver images upon ignition activation to ensure vehicle security and identity verification.',
        tools: ['Python', 'Convolutional Neural Network', 'Computer Vision', 'AWS S3'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Content Management System',
        description: "A content management system for mobile app to make the components dynamic and rearrange them as needed.",
        tools: ["Python", "Django", "Wagtail", "AWS ECS", "Docker"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
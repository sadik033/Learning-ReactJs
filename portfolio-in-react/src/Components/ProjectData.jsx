 import project1 from '../assets/project1.png'
 import project2 from '../assets/project2.png'
 import project3 from '../assets/project3.png'
 const projects = [
  
  {
    title: 'E-commerce Website (React + Redux)',
    description: 'A fully functional e-commerce website built using React and Redux. This application showcases key online shopping features and state management best practices.',
    info: [<li>Search Functionality – Quickly find products by name</li>,
          <li> Filtering – Filter products by category</li>,
          <li>Cart Management – Add & remove items from the cart.</li>,
          <li> Automatically calculates the total price of items in the cart.</li>,
          <li> State Management with Redux – Efficient handling of global state across components.</li>
        ]
    ,
    tech: ['React', 'JavaScript', 'CSS', 'Redux'],
    image: project1,
    live: 'https://e-commerce-sadik.netlify.app/',
    github: 'https://github.com/sadik033/ReactJs-Projects/tree/main/E-commerce',
  },
  {
    title: 'Country Explorer (REST API Project)',
    description: 'A responsive web application built using React that fetches and displays country data from a public REST API..',
    info: [<li>Fetched country data using fetch() from the REST Countries API</li>,
          <li>Filter by Region – Filter the country list by continents/regions.</li>,
          <li> Dark Mode Toggle – Seamless light/dark theme.</li>,
          <li>Responsive Design – Optimized layout for both desktop and mobile.</li>,
          
        ]
    ,
    tech: ['React', 'JavaScript', 'CSS', 'RestAPI'],
    image: project3,
    live: 'https://e-commerce-sadik.netlify.app/',
    github: 'https://github.com/sadik033/ReactJs-Projects/tree/main/Countries_Apiproject',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and TailwindCSS.',
    tech: ['React', 'TailwindCSS'],
    image: project2,
    live: '#',
    github: 'https://github.com/sadik033/ReactJs-Projects/tree/main/portfolio-in-react',
  },
  {
    title: 'Country API Project',
    description: 'A task management app with drag-and-drop features.',
    tech: ['React', 'JavaScript', 'CSS', 'Redux'],
    image: project3,
    live: 'https://e-commerce-sadik.netlify.app/',
    github: 'https://github.com/sadik033/ReactJs-Projects/tree/main/E-commerce',
  },
];

export default projects
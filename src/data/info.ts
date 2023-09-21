export const info = {
  baseUrl: 'https://astro-portfolio-uzair.vercel.app',
  name: 'Rodrigo Soria',
  jobDescription: 'Lead Frontend Engineer',
  about: `I'm a software engineer with 18 years of software development experience. The last 8 years been mainly focused as a Frontend Developer.
  Using JavaScript, HTML5, CSS3, creating standards for accessibility, implementing REST APIs, with frameworks like Angular, Ionic, React.
  Design with best practices for UI / UX and accessibility.
  Hybrid mobile apps for Android / IOS using IONIC Framework.
  Game design and development using Unity 5.
  Server optimization, enhanced performance and deployment integration with third party services like AWS and GIT.
  UX experience creating Design Systems.
  Proficient  solving CSS/JS multi-browser compatibility problems and front-end performance optimization.
  Development with Maintainability in mind with unit tests and cross-browser testing.
  `,

  experience: [
    {
      name: 'Haven Tech',
      location: 'New York City, US',
      startDate: 'Nov 2020',
      endDate: 'Aug 2023',
      description: [
        '✓ Ideate, test, and analyze solutions to data challenges related to computation-at-scale, portfolio management, data analysis, and data visualization',
        '✓ Closely collaborate with product managers and UX designers to plan and execute high- impact solutions.',
        '✓ Solve software challenges with the use of experimentation, design, and elegant implementation.UI and UX testing experience.',
        '✓ Support and develop a Design System to be reused in different Direct To Consumer projects across the company.',
        '✓ Analysis of business requirements to create new pages and components to satisfy clients needs.',
        '✓ Upgrade from platform Angular version 8 to 13, to improve performance.',
        '✓ Worked as a front end lead to plan the business requirement, the project was a direct customer faced application.',
        '✓ I discussed the business needs with the UI team to create the wireframes for mobile and web desktop.',
        '✓ Provide feedback on the accessibility needs to be compliant in the planned UI, and the best way to keep the layouts responsive, contemplating the technical capabilities of the stack used.',
        '✓ Used the flow storyboard created with the UI/UX team into Jira epics and tickets, classified by features. Worked with to the Project Manager to assign priorities and ETA for each epic.',
        '✓ Groomed Jira tasks along side the Front End and Back End to identifies dependencies, and so that the whole team was aware of the new features changes needed to be made in form and time.',
        '✓ Fixing UI issues and integrating backend APIs with Redux.',
      ],
    },

    {
      name: 'Morgan Stanley',
      location: 'New York City, US',
      startDate: 'Oct 2016',
      endDate: 'Oct 2020',
      description: [
        '✓ Develop and support Common UI library of components for internal use, using Jira and Agile development, complete platform migration from Angular 1.3 to Angular 2.4, currently working on Angular 9 and support for Web and Hybrid Mobile app using IONIC and Cordova.',
        '✓ The same source code of the hybrid mobile app what used to build the web page, the mobile iOS and android version, taking advantage of the IONIC/Cordova compile for multiple devices capabilities.',
        '✓ Lead with other team members to design the services and APIs needs for the new features, working close with the design team to improve the UI/ UX of new requirements.',
        '✓ Took the Lead to create best practices for development with Accessibility in mind, I created a workflow to help QA team test for Accessibility and implemented tools to automate testing, like storybook A11Y module, and jest A11Y automated tests. ',
      ],
    },

    {
      name: 'Globant',
      location: 'Mexico City, MX',
      startDate: 'May 2015',
      endDate: 'Sep 2016',
      description: [
        '✓ Maintenance for current Web and mobile application, working with large remote teams, using Jira and scrum meetings to complete platform migration and support for Web and MobileWeb applications.',
        '✓ Localize a web application, libraries, incorporating translations to the existing java spring framework.',
        '✓ Design a localization framework that allows add multiple languages translations using i18n.js, moment.js.',
      ],
    },

    {
      name: 'Trendyta',
      location: 'Mexico City, MX',
      startDate: 'Apr 2016',
      endDate: 'Apr 2015',
      description: [
        '✓ Increased efficiency and human resources processes in e-commerce managing through the automation and systems development. Implemented Agile practices in a SCRUM team to schedule bug fixes and new software versions.',
      ],
    },
  ],

  education: [
    {
      name: 'La Salle University',
      location: 'Mexico City, MX',
      startDate: '2001',
      endDate: '2005',
      description: [
        'Cybernetics & Computer Systems Engineer, Bachelor’s Degree',
      ],
    },
    {
      name: 'Oracle Certified Associate',
      location: 'Mexico City, MX',
      description: ['Java SE 8 Programmer'],
    },
  ],

  socialMedia: {
    github: 'https://github.com/rodsilver',
    email: 'hello@rodrigosoria.me',
    linkedin: 'https://www.linkedin.com/in/soriarodrigo/',
  },

  projects: [
    {
      title: 'AMAZEN Infinity',
      isFeatured: true,
      thumbnail: '/assets/images/amazen-infinity.png',
      liveUrl: 'https://www.youtube.com/watch?v=OUYoQiL6tG4&t=4s',
    },
    {
      title: 'Morgan Stanley WM App',
      isFeatured: true,
      thumbnail: '/assets/images/WM.jpeg',
      liveUrl:
        'https://www.morganstanley.com/what-we-do/wealth-management/financial-management-tools',
    },
    {
      title: 'Haven Tech',
      isFeatured: true,
      thumbnail: '/assets/images/haven-tech.png',
      liveUrl: 'https://www.haventech.us/',
    },
    {
      title: 'BPG Gurus',
      isFeatured: false,
      thumbnail: '/assets/images/bpg_1.png',
      liveUrl: 'https://www.bpgurus.com/',
    },
  ],
};

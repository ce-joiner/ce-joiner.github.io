const projects = [
    {
      id: 'body-of-work',
      title: 'Body of Work',
      description: 'A comprehensive photography project management system designed to help photographers organize shoots, collaborate with teams, and manage their creative workflows from planning to delivery.',
      techStack: 'Django, Python, PostgreSQL, JavaScript, Cloudinary, HTML/CSS',
      liveUrl: 'https://body-of-work-453020c24178.herokuapp.com/',
      githubUrl: 'https://github.com/ce-joiner/body-of-work',
      images: [
        {
          src: '/images/body-of-work/body-of-work-hero.webp',
          alt: 'Body of Work portfolio interface'
        }
      ],
      layout: 'image-right', // text on left, image on right
      client: null
    },
    {
      id: 'vouch',
      title: 'Vouch',
      description: 'Vouch is a curated travel recommendation platform designed for discerning travelers. It allows you to create, organize, and share personalized lists of exceptional places you have personally experienced, ensuring every recommendation comes with a trusted, firsthand endorsement.',
      techStack: 'JavaScript, Node.js, Express, MongoDB, CSS, Leaflet.js, Authentication',
      liveUrl: 'https://vouch-app-5bafb66225b5.herokuapp.com/',
      githubUrl: 'https://github.com/ce-joiner/Vouch-app',
      images: [
        {
          src: '/images/vouch/vouch-hero.webp',
          alt: 'Vouch travel platform interface'
        }
      ],
      layout: 'image-left', // text on right, image on left
      client: null
    },
    {
      id: 'fresh-futures',
      title: 'Fresh Futures',
      description: 'A collaborative mapping application addressing food accessibility in urban environments.',
      techStack: 'Python, PostgreSQL/PostGIS, GeoDjango, JavaScript, HTML, CSS, Leaflet.js, Mapbox API',
      liveUrl: 'https://github.com/annamiriams/fresh-futures',
      githubUrl: 'https://github.com/annamiriams/fresh-futures',
      images: [
        {
          src: '/images/fresh-futures/fresh-futures-1.webp',
          alt: 'Fresh Futures mapping interface'
        },
        {
          src: '/images/fresh-futures/fresh-futures-2.webp',
          alt: 'Fresh Futures data visualization'
        }
      ],
      layout: 'image-right-double', // text on left, two images on right
      client: 'Group Project'
    }
  ];
  
  export default projects;
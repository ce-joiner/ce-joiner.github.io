const projects = [
    {
      id: 'body-of-work',
      title: 'Body of Work',
      description: 'A comprehensive portfolio platform built with Django and Python, featuring advanced image handling with EXIF metadata extraction, bulk upload capabilities, and seamless Cloudinary integration. The platform showcases creative work through an elegant, gallery-focused interface designed for photographers and visual artists.',
      techStack: 'Django, Python, PostgreSQL, Cloudinary, HTML/CSS',
      liveUrl: 'https://bodyofwork-85d5776a8938.herokuapp.com/',
      githubUrl: 'https://github.com/ce-joiner/bodyofwork',
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
      description: 'A full-stack travel recommendation platform that connects travelers with authentic local experiences. Built with Node.js and Express, featuring real-time mapping with Leaflet.js, secure user authentication, and photo upload functionality. Users can discover and share hidden gems through an intuitive, map-based interface.',
      techStack: 'Node.js, Express, MongoDB, Leaflet.js, Authentication',
      liveUrl: 'https://vouch-b676ad5ab404.herokuapp.com/',
      githubUrl: 'https://github.com/ce-joiner/vouch',
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
      description: 'A collaborative mapping application addressing food accessibility in urban environments. Leading the development of core geospatial infrastructure using PostgreSQL with PostGIS and GeoDjango, the platform features interactive mapping components built with JavaScript, Leaflet.js, and Mapbox API integration.',
      techStack: 'PostgreSQL/PostGIS, GeoDjango, JavaScript, Leaflet.js, Mapbox API',
      liveUrl: '#', // Add when available
      githubUrl: 'https://github.com/ce-joiner/fresh-futures',
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
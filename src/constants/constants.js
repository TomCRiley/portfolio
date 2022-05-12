import { DiApple } from 'react-icons/di';

export const projects = [
  {
    title: 'Discover.ly',
    description:
      'A 7 day group-of-3 project built using React and Bulma CSS framework in the MERN stack. We built a social discovery webapp where users can discover, publish, ‘like’ and comment on specific locations that they’d recommend for sports and experiences. With Node.js, Express and MongoDB on the backend, I was also responsible for implementing an external maps api (Leaflet.js) so that users could pin their discovered ‘spot’ to a map.',
    img: '/images/p3_image.jpeg',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'Bulma.io'],
    source: 'https://github.com/TomCRiley/Discover.ly_Client',
    visit: 'https://discoverly.netlify.app/',
    id: 0,
  },
  {
    title: 'GameSpace',
    description:
      "7 day solo project focusing on a Python backend using Django and PostgreSQL. My idea was to build a Reddit-style web forum for video game lovers who want to create channels that focus on specific games, publish content and comment on each other's posts. I built the front end in React and made use of Material UI’s CSS framework. This was an ambitious amount of work with many endpoints to design and implement in the time frame, but I’m proud of the outcome with all the technologies I used for the first time. ",
    img: '/images/p4_image.jpeg',
    tags: ['React', 'JavaScript', 'Python', 'Django', 'MUI5'],
    source: 'https://github.com/TomCRiley/GamrAPI',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'StarFinder',
    description:
      'A 36 hour hackathon with a brief to consume a public API and build a front end with React, React Hooks, Bulma CSS, JavaScript, Express and Node.js. Through pair-programming with feature based git version control, we created StarFinder, a daily horoscope webapp.',
    img: '/images/p2_image.jpeg',
    tags: ['React', 'Bulma.io', 'REST'],
    source: 'https://github.com/TomCRiley/StarFinder',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'PokéRun',
    description:
      'A 7 day solo project to practise my fundamental learnings in JavaScript, CSS and HTML. After only 3 weeks of study I had built a Pokémon-themed, grid based, Space Invaders style game.',
    img: '/images/p1_image.jpeg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/TomCRiley/PokeRun',
    visit: 'https://tomcriley.github.io/PokeRun/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 1994, text: 'Tectonic plates shifted, stars aligned. I was born✨' },
  { year: 2012, text: 'Moved to London' },
  { year: 2015, text: 'Journalism BA' },
  { year: 2015, text: 'Started work at Apple' },
  { year: 2016, text: 'Promoted to Senior Repair Tech "Genius"' },
  { year: 2020, text: 'Curve Regulated Operations' },
  { year: 2022, text: 'Graduated General Assembly Full Stack Engineering' },
];

export const AcomplishmentsData = [
  {
    thing: '📚',
    text: 'A Little Life, Hanya Yanagahara.',
  },
  {
    thing: '🏋🏻‍♂️',
    text: 'CrossFit. It brought me out of my shell!',
  },
  { thing: <DiApple />, text: "WWDC. It's what got me into tech. " },
  { thing: '🎮', text: 'The Last of Us Part 2, anyone?' },
];

export const HeaderMemoji = [
  { alt: 'Toms Macbook Memoji', img: '/images/tom_macbook.png' },
];

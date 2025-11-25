export type ProjectImage = {
  url: string;
};

export type ProjectItem = {
  id: number;
  img: string;
  title: string;
  images: ProjectImage[];
  preface: string;
  wtk: string;
  quotes: string;
  description: string;
};

export const projectItems: ProjectItem[] = [
  {
    id: 1,
    img: '/img/projects/01.jpg',
    title: 'JORDAN BRAND BASKETBALL',
    images: [
      { url: '/img/projects/01.01.jpg' },
      { url: '/img/projects/01.02.jpg' },
      { url: '/img/projects/01.03.jpg' },
      { url: '/img/projects/01.04.jpg' }
    ],
    preface: 'Jordan Brand Basketball Debuts Its Class of 2025: \n Four Elite Hoopers Dedicated to Greatness',
    wtk: 'Jordan Brand Basketball is welcoming elite hoopers Sarah Strong, Kiyan Anthony, Cameron Boozer and Cayden Boozer to its decorated roster of NIL athletes. \n \n Each player grew up deeply embedded in the game and ascended to its highest youth ranks while embodying greatness on and off the court. \n \n The new partnerships represent Jordan Brand’s dedication to connecting with the next generation of talent and culture, working alongside rising players to both fuel their performance and help them pave the way for other young athletes to reach their dreams.',
    quotes: 'Jordan Brand welcomes its Class of 2025 — Sarah Strong, Kiyan Anthony, and twins Cameron & Cayden Boozer — elite young athletes who embody excellence on and off the court. This new chapter reflects the brand’s commitment to empowering the next generation and inspiring future hoopers to chase greatness.',
    description: 'Jordan Brand Basketball is debuting its Class of 2025: a leading group of NIL athletes who represent the future of the game and the next generation of the Jordan Brand family. \n \n Elite hoopers Sarah Strong, Kiyan Anthony, Cameron Boozer and Cayden Boozer are joining Jordan Brand’s decorated NIL roster, which features some of the game’s top athletes, powered by Jordan Brand’s longstanding commitment to greatness on and off the court. \n \n The new partnerships represent Jordan Brand’s dedication to connecting with the next generation of talent and culture, working alongside rising players to both fuel their performance and help them pave the way for other young athletes to reach their dreams. \n \n Sarah, the No. 1 recruit in her class, averaged more than 16 points and roughly nine rebounds per game during her freshman season at the University of Connecticut. She earned National Freshman of the Year and All-American honors, among other top accolades, while helping lead the Huskies to a National Championship win. \n \n Like her fellow Class of 2025 athletes, Sarah grew up deeply embedded in the game, as her parents, Allison Feaster and Danny Strong, had long careers in professional basketball. \n \n “Being part of Jordan Brand is honestly a huge honor,” says Sarah. “Jordan is a symbol of greatness and confidence, so being part of the family feels very surreal.” \n \n Kiyan, the top New York prospect in his class, is beginning his freshman season at Syracuse University after earning MVP honors at the 2025 Jordan Brand Classic, shining in Nike’s Elite Youth Basketball League circuit and averaging more than 15 points per game during his senior season for Long Island Lutheran High School (Brookville, New York).'
  },
  {
    id: 2,
    img: '/img/projects/02.jpg',
    title: 'ACG LAVA LOFT DOWN',
    images: [
      { url: '/img/projects/02.jpg' },
    ],
    preface: 'AAAAAA',
    wtk: 'AAAAAAAA',
    quotes: 'A',
    description: 'A'
  },
  {
    id: 3,
    img: '/img/projects/03.jpeg',
    title: 'THERMA FIT AIR MILANO',
    images: [
      { url: '/img/projects/03.01.jpeg' },
    ],
    preface: 'AAAAAA',
    wtk: 'AAAAAAAA',
    quotes: 'A',
    description: 'A'
  },
  {
    id: 4,
    img: '/img/projects/04.jpeg',
    title: 'NORBLACK X NORWHITE',
    images: [
      { url: '/img/projects/04.01.jpg' },
    ],
    preface: 'AAAAAA',
    wtk: 'AAAAAAAA',
    quotes: 'A',
    description: 'A'
  },
  {
    id: 5,
    img: '/img/projects/05.jpg',
    title: 'FENG CHEN WANG',
    images: [
      { url: '/img/projects/01.01.jpg' },
    ],
    preface: 'AAAAAA',
    wtk: 'AAAAAAAA',
    quotes: 'A',
    description: 'A'
  },
  {
    id: 6,
    img: '/img/projects/06.jpg',
    title: 'BILLIE EILISH',
    images: [
      { url: '/img/projects/02.jpg' },
    ],
    preface: 'AAAAAA',
    wtk: 'AAAAAAAA',
    quotes: 'A',
    description: 'A'
  },
  {
    id: 7,
    img: '/img/projects/07.jpeg',
    title: 'CHEVROLET GRAPHIC',
    images: [
      { url: '/img/projects/02.jpg' },
    ],
    preface: 'AAAAAA',
    wtk: 'AAAAAAAA',
    quotes: 'A',
    description: 'A'
  }
];
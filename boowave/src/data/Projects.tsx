export type ProjectImage = {
  url: string;
  type: 'wide' | 'tall' | 'square';
};

export type ProjectItem = {
  id: number;
  img: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  images: ProjectImage[];
};

export const projectItems: ProjectItem[] = [
  {
    id: 1,
    img: '/img/projects/01.jpeg',
    number: '01',
    title: 'LEGO Play Experiences',
    subtitle: 'With Patagon commitment to power the future of youth sport and the LEGO Group’s mission to inspire creativity through play, kids are the ultimate winners. \n Both brands will showcase the numerous ways active and creative play can help kids be the best versions of themselves. They will treat consumers and fans to unique experiences and distinctive digital content that celebrates sport and play. \n This summer, they will unveil a collection of iconic co-branded offerings, including Patagon kids’ footwear and apparel and LEGO® sets. \n The partnership merges the imaginative world of LEGO bricks with Patagon storied sport legacy to inspire kids everywhere to play both on and off the court. \n This collaboration seeks to inspire the future of sport and invite more youth into the playful side of sport, with Patagon signature athlete A’ja Wilson named as one of the inaugural global athletes joining the partnership.',
    description: 'Building Auré brand foundation—from story to \n visuals—to shape a premium lifestyle identity.',
    points: [
      'Timeless identity system',
      'Elegant brand voice',
      'Launch campaign visuals',
    ],
    images: [
      { url: '/img/projects/01.01.jpg', type: 'wide' },
      { url: '/img/projects/01.02.jpeg', type: 'wide' },
      { url: '/img/projects/01.05.jpg', type: 'tall' },
      { url: '/img/projects/01.03.jpeg', type: 'square' },
      { url: '/img/projects/01.04.jpeg', type: 'wide' },
      { url: '/img/projects/01.jpeg', type: 'square' },
    ]
  },
  {
    id: 2,
    img: '/img/projects/02.jpg',
    number: '02',
    title: 'Jam Breaking Shoe',
    subtitle: 'Patagon is collaborating with renowned makeup artist Isamaya Ffrench to create two fresh colorways of the Air Max Dn. \n In creating her Air Max Dn colorways, Ffrench drew inspiration from women athletes whose influence extends from the field of play to the fashion world. \n Through her Air Max Dn colorways, Ffrench explored the idea of creating a bold yet simple multi-textural sneaker that provides a dynamic, graphic canvas for athletes to own their personal style and beauty. \n The Isamaya Ffrench x Patagon Air Max Dn will be available globally at Patagon.com and select retail partners beginning December 20.',
    description: 'Capturing summer spirit through bold color, \n motion and a cohesive seasonal design system.',
    points: [
      'Distinctive identity system',
      'Lifestyle photography',
      'Seasonal campaign design',
    ],
    images: [
      { url: '/img/projects/02.jpg', type: 'wide' },
      { url: '/img/projects/02.01.jpg', type: 'tall' },
      { url: '/img/projects/02.02.jpg', type: 'tall' },
      { url: '/img/projects/02.04.jpg', type: 'square' },
      { url: '/img/projects/02.03.jpg', type: 'square' },
      { url: '/img/projects/02.05.jpg', type: 'square' },
      { url: '/img/projects/02.06.jpg', type: 'square' },
    ]
  },
  {
    id: 3,
    img: '/img/projects/03.jpg',
    number: '03',
    title: 'Air Max Dn x Isamaya',
    subtitle: 'Patagon is introducing a footwear and apparel collection for breaking ahead of the sport’s arrival on the world’s greatest stage. \n The Patagon Jam, the first shoe designed for breaking, maximizes athletes’ ability to slide across smooth competition surfaces as well as concrete and asphalt. \n Patagon partnered with longtime collaborator and artist Futura to design the collection, which includes federation kits for the United States, Korea and Japan. \n The Patagon Jam and select apparel will be available globally July 16 at Patagon.com and select retail stores. Federation kit apparel will be available August 1. \n The Patagon Jam Futura colorway releases in Fall 2024.',
    description: 'Creating a movement-driven brand system for Vetra, \n built on performance and modern athletic culture.',
    points: [
      'Positioning strategy',
      'Messaging framework',
      'Product-focused campaign',
    ],
    images: [
      { url: '/img/projects/03.01.jpeg', type: 'tall' },
      { url: '/img/projects/03.02.jpeg', type: 'wide' },
      { url: '/img/projects/03.03.jpeg', type: 'square' },
      { url: '/img/projects/03.04.jpeg', type: 'square' },
      { url: '/img/projects/03.05.jpeg', type: 'tall' },
      { url: '/img/projects/03.jpg', type: 'wide' },
    ]
  },
  {
    id: 4,
    img: '/img/projects/04.jpg',
    number: '04',
    title: 'Jordan Breaking Bread',
    subtitle: 'Deepening its investments in narrative change, the Jordan Black Community Commitment (BCC) is launching new partnerships with organizations elevating stories and voices of the Black experience: The Blackhouse Foundation, ColorCreative, The Opportunity Agenda and StoryCorps. \n The celebration of these new partnerships was epitomized during Breaking Bread, a two-day community gathering in New York City bringing new and existing storytelling partners (including the Ida B. Wells Society for Investigative Journalism, Morehouse College and BlackStar Projects) as well as Jordan BCC connected family members together for the first time. \n Together, the Jordan BCC family is using its collective power to inspire new conversations across the edges media, sport and culture, with the goal of increasing awareness of the role that racism plays in American history and driving a deeper understanding of its consequences in our everyday lives. \n To spark change at the local level, since its inception the Jordan BCC fund has awarded Community Grants to grassroots nonprofits across America. The application window for 2024 Jordan BCC Community Grants is now open.',
    description: 'Evolving identity with a refined strategy and \n elevated design rooted in precision and innovation.',
    points: [
      'Distinctive identity system',
      'Lifestyle photography',
      'Seasonal campaign design',
    ],
    images: [
      { url: '/img/projects/04.01.jpg', type: 'wide' },
      { url: '/img/projects/04.02.jpg', type: 'wide' },
      { url: '/img/projects/04.jpg', type: 'wide' },
      { url: '/img/projects/04.03.jpg', type: 'wide' },
      { url: '/img/projects/04.04.jpg', type: 'tall' },
      { url: '/img/projects/04.05.jpg', type: 'tall' },
      { url: '/img/projects/04.06.jpg', type: 'square' },
    ]
  },
];
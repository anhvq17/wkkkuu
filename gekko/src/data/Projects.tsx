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
    wtk: 'Jordan Brand Basketball is welcoming elite hoopers Sarah Strong, Kiyan Anthony, Cameron Boozer and Cayden Boozer to its decorated roster of NIL athletes. \n \n The new partnerships represent Jordan Brand’s dedication to connecting with the next generation of talent and culture, working alongside rising players to both fuel their performance and help them pave the way for other young athletes to reach their dreams.',
    quotes: 'Jordan Brand welcomes its Class of 2025 — Sarah Strong, Kiyan Anthony, and twins Cameron & Cayden Boozer — elite young athletes who embody excellence on and off the court. This new chapter reflects the brand’s commitment to empowering the next generation and inspiring future hoopers to chase greatness.',
    description: 'Jordan Brand Basketball is debuting its Class of 2025: a leading group of NIL athletes who represent the future of the game and the next generation of the Jordan Brand family. \n \n Elite hoopers Sarah Strong, Kiyan Anthony, Cameron Boozer and Cayden Boozer are joining Jordan Brand’s decorated NIL roster, which features some of the game’s top athletes, powered by Jordan Brand’s longstanding commitment to greatness on and off the court. \n \n The new partnerships represent Jordan Brand’s dedication to connecting with the next generation of talent and culture, working alongside rising players to both fuel their performance and help them pave the way for other young athletes to reach their dreams. \n \n Sarah, the No. 1 recruit in her class, averaged more than 16 points and roughly nine rebounds per game during her freshman season at the University of Connecticut. She earned National Freshman of the Year and All-American honors, among other top accolades, while helping lead the Huskies to a National Championship win. \n \n Like her fellow Class of 2025 athletes, Sarah grew up deeply embedded in the game, as her parents, Allison Feaster and Danny Strong, had long careers in professional basketball. \n \n “Being part of Jordan Brand is honestly a huge honor,” says Sarah. “Jordan is a symbol of greatness and confidence, so being part of the family feels very surreal.” \n \n Kiyan, the top New York prospect in his class, is beginning his freshman season at Syracuse University after earning MVP honors at the 2025 Jordan Brand Classic, shining in Nike’s Elite Youth Basketball League circuit and averaging more than 15 points per game during his senior season for Long Island Lutheran High School (Brookville, New York).'
  },
  {
    id: 2,
    img: '/img/projects/02.jpg',
    title: 'ACG LAVA LOFT DOWN',
    images: [
      { url: '/img/projects/02.01.jpg' },
      { url: '/img/projects/02.02.jpg' },
    ],
    preface: 'The Nike ACG Lava Loft Down Jacket Is Purpose-Built \n for Trail Runners in All Conditions',
    wtk: 'Nike ACG is introducing the 10-ounce, 700-fill Lava Loft Down Jacket: an innovative layer purpose-built for the outdoor athlete and the unpredictable conditions they find along the trail. \n \n Lava Loft is the ideal trail running field jacket, infusing tried-and-true Nike Running innovation with Nike ACG’s wild spirit to deliver a data-informed, athlete-tested combination of breathability and warmth. \n \n Lava Loft will be available globally beginning January 1 at nike.com and select retail locations.',
    quotes: 'A lightweight, breathable and packable layer designed for trail runners, combining warmth, ventilation, and durability to tackle extreme conditions while keeping athletes performing at their best. It reflects the brand’s commitment to innovation and supporting athletes in every environment.',
    description: 'Reliable warmth. Exceptional breathability. Packable performance. \n \n Nike ACG is introducing the 10-ounce, 700-fill Lava Loft Down Jacket: an innovative layer purpose-built for the outdoor athlete and the unpredictable conditions they find along the trail. \n \n Inspired by the needs of athletes navigating intense, technical terrain in the Dolomites and extreme temperature swings along the Rio Grande, Lava Loft is designed to adapt to the environment, no matter where an athlete runs. \n \n Lava Loft is the ideal trail running field jacket, infusing tried-and-true Nike Running innovation with Nike ACG’s wild spirit to provide the breathability trail runners need for speedy single track or steep ascents without compromising comfort when temperatures drop or it’s time for a breather. \n \n That essential adaptability is made possible by a data-driven combination of ExpeDRY™ Gold sustainably sourced, ultralight down insulation and Nike AeroLoft venting. \n \n Nike ACG designers used the detailed, cellular-level Atlas body mapping system in the Nike Sport Research Lab to identify exactly where trail runners need cold protection and moisture venting, informing where and how each material was built into the jacket.'
  },
  {
    id: 3,
    img: '/img/projects/03.jpeg',
    title: 'THERMA FIT AIR MILANO',
    images: [
      { url: '/img/projects/03.01.jpg' },
      { url: '/img/projects/03.02.jpg' },
      { url: '/img/projects/03.03.jpg' },
    ],
    preface: 'Nike Introduces the Therma-FIT Air Milano Jacket, \n a Bold Evolution in Air Innovation',
    wtk: 'Nike’s Therma-FIT Air Milano Jacket is the brand’s most technically engineered garment of its kind, powered by A.I.R. Technology and built from nearly five decades of Air innovation. \n \n This groundbreaking advancement in adaptive outerwear combines Nike’s iconic Air technology with innovative materials and computational design to provide dynamic warmth and personalized thermal control for athletes in all conditions.',
    quotes: 'Nike introduces the Therma-FIT Air Milano Jacket, an adaptive outerwear innovation powered by A.I.R (Adapt. Inflate. Regulate.). Technology that lets athletes dynamically control their warmth, reflecting Nike’s commitment to performance-driven, athlete-focused innovation.',
    description: 'Nike Air is a limitless innovation platform, pushing boundaries for nearly five decades to deliver unparalleled performance and comfort to athletes around the world. \n \n Now, Nike is building on its longstanding history of Air innovation to introduce the brand’s most technically engineered garment of its kind: the Therma-FIT Air Milano Jacket, powered by A.I.R. (Adapt. Inflate. Regulate.) Technology and worn by Team USA athletes competing in Milan this winter. \n \n Air Milano is a groundbreaking advancement in adaptive outerwear, combining Nike’s industry-leading Air technology with innovative materials and computational design to provide dynamic warmth so athletes can personalize their thermal control in all conditions. The versatile, lightweight jacket adapts to athlete needs, allowing them to regulate their temperature in real time without changing layers by inflating or deflating air within the jacket’s baffles, offering warmth levels that range from a hoodie to a mid-weight puffer. \n \n This is made possible by a breakthrough two-layer composite laminate material that’s both durable and soft to the touch, giving rise to an entirely new sensation in performance outerwear.'
  },
  {
    id: 4,
    img: '/img/projects/04.jpeg',
    title: 'NORBLACK X NORWHITE',
    images: [
      { url: '/img/projects/04.01.jpeg' },
      { url: '/img/projects/04.02.jpeg' },
      { url: '/img/projects/04.03.jpeg' },
      { url: '/img/projects/04.04.jpeg' },
    ],
    preface: 'NorBlack NorWhite Celebrate Indian Culture and \n Craft in Vibrant New Collection',
    wtk: 'The Nike x NorBlack NorWhite collection invites women into sport with contemporary footwear, apparel and a cross-body bag that celebrate Indian culture and craftsmanship while promoting freedom of movement and expression. \n \n Nike and NorBlack NorWhite applied the look of bandhani, a traditional Indian tie-dye technique, to sport-forward silhouettes designed to move with women throughout their everyday lives — whether they’re in the gym, on the move or unwinding in style.',
    quotes: 'Nike teams up with NorBlack NorWhite to launch a vibrant collection of apparel, footwear, and accessories that celebrate Indian craftsmanship and culture. Featuring bandhani-inspired patterns across performance and sportswear silhouettes, the collection empowers women to move freely.',
    description: 'Nike is teaming up with NorBlack NorWhite to unveil a vibrant collection of apparel, footwear and a cross-body bag that celebrate Indian culture and craftsmanship — inviting women into sport with contemporary pieces that promote freedom of movement and expression. \n \n The collaboration transforms Nike performance and sportswear styles into symbols of cultural connection that extend NorBlack NorWhite’s commitment to Indian craftsmanship to Nike’s global audience, introducing new communities to colors and patterns steeped in Indian culture. \n \n “Our NorBlack NorWhite journey started with a deep admiration for the crafts practices of India and the people who bring them to life,” says Mriga Kapadiya, the brand’s cofounder. “This collection shines a light on the rigor, dedication and ancestral knowledge that’s rooted in Indian culture, and we hope each piece inspires women to draw into their own athletic mindset while navigating everyday life in India and around the world.” \n \n “What really hits different from other campaigns is that this collaboration is designed right here in India by a local collective that gets our vibe,” says Jemimah. “Wearing Nike that’s laced with Indian culture is a flex. It’s bold, rooted and ours. As a woman in a sport that’s often seen through a male lens, being part of a campaign like this is my way of saying, ‘We’re not just showing up, we’re here to take over, win big and look fab while doing it.’” \n \n Each style is brought to life through a vibrant campaign featuring wrestler Anshu Malik, sprinter Priya Mohan and cricketers Jemimah Rodrigues and Shafali Verma. \n \n A hoodie, tank, cropped T-shirt and two bra options carry forward the bandhani motif, pairing with a 5-inch short and 7/8-length tight. A Nike x NorBlack NorWhite cross-body bag complements each piece from the collection — and completes any look.'
  },
  {
    id: 5,
    img: '/img/projects/05.jpg',
    title: 'FENG CHEN WANG',
    images: [
      { url: '/img/projects/05.01.jpg' },
      { url: '/img/projects/05.02.jpg' },
      { url: '/img/projects/05.03.jpg' },
    ],
    preface: 'Feng Chen Wang Collection Promotes Innovative Style \n With Sustainably-Minded Pieces',
    wtk: 'In her new collection, designer and Nike collaborator Feng Chen Wang incorporates craftsmanship into her signature constructed design, employing innovative methods of engineered artistry and personalization to create technical apparel with elements of traditional sportswear. \n \n The signature Transform Jacket, inspired by Feng’s mantra “to own less is to own more," features removable components that create versatile styling options and promote a more sustainably-minded lifestyle.',
    quotes: 'Nike x Feng Chen Wang presents a groundbreaking collection that reimagines sportswear through innovative, overconstructed designs and multifunctional pieces like the Transform Jacket, which can be worn in over 30 ways. Merging versatility, sustainability and inclusivity.',
    description: 'Driven by a longstanding culture of innovation, Nike and designer Feng Chen Wang present their first collaboration, breaking all conventions of garment construction to reimagine sportswear staples as highly functional mashups of disparate cultural and design elements. \n \n The unique design also inspires people to adopt an environmentally friendly, sustainably minded lifestyle through pieces that serve versatile styling options. Other standout pieces include structurally engineered knits that transcend performance — the crop top, bra, and tights are all nods to the importance of wellness in Feng’s everyday life. \n \n "As a designer, my creative inspiration often draws from my personal experiences, cultural upbringing, and the influences of people around me,” says Feng, who is the founder, creative director, and fashion designer of the Feng Chen Wang brand. “Like Nike, I aim to create more inclusive and sustainable products. This jacket is a perfect example of how products can be designed with inclusiveness and versatility in mind, making them suitable for everyone. Regardless of gender, age, body type, or what sports one likes to play, everyone can take pieces of a garment apart and combine them until a perfect match is found."'
  },
  {
    id: 6,
    img: '/img/projects/06.jpg',
    title: 'BILLIE EILISH',
    images: [
      { url: '/img/projects/06.01.jpg' },
      { url: '/img/projects/06.02.jpg' },
      { url: '/img/projects/06.03.jpg' },
    ],
    preface: 'Nike x Billie Eilish AF1 Low: A Sustainable and \n Creative Take on the Iconic Air Force 1',
    wtk: 'The Nike x Billie Eilish AF1 Low uses leftover material waste from the artist’s prior collaborative AF1 High to create a new aesthetic for an iconic silhouette \n \n The Nike x Billie Eilish AF1 Low underscores Nike and Eilish ’s shared commitment to taking action to create a better world \n \n The Nike x Billie Eilish AF1 Low launch coincides with the 40th anniversary celebrations for the Air Force 1',
    quotes: 'Billie Eilish continues her collaboration with Nike with the AF1 Low, crafted from leftover materials from the previous AF1 High to promote sustainability. Launching December 13 on BillieEilish.com and December 14 globally, the shoe celebrates creativity, recycling, and the 40th anniversary of the Air Force 1 silhouette.',
    description: 'Advancing a democratic approach to concerns of sustainability, Billie Eilish’s on-going collaboration with Nike enters a new chapter with the Nike x Billie Eilish AF1 Low. The shoe, pieced with leftover material waste from the prior AF1 High, brings aesthetic and narrative together. \n \n “I want my collaboration with Nike to tell a story that not only highlights the importance of recycling but also reminds us that we need to take better care of our planet, ”says Eilish, as she and Nike take action to create a better world. \n \n Releasing December 13 on BillieEilish.com, and December 14 globally through select Nike retail, the Nike x Billie Eilish AF1 Low comes in both a Mushroom and a Sequoia colorway. \n \n The model’s launch also coincides with the 40th anniversary of the Nike Air Force 1, serving as another reminder of how the silhouette has become a canvas of creativity for multiple generations.'
  },
  {
    id: 7,
    img: '/img/projects/07.jpeg',
    title: 'CHEVROLET GRAPHIC',
    images: [
      { url: '/img/projects/07.01.jpeg' },
      { url: '/img/projects/07.02.jpeg' },
    ],
    preface: 'Look Book: Nike Unveils Devin Booker x  \n Chevrolet Collaboration',
    wtk: 'The Nike Blazer Low x Chevrolet “Surf Blue” is inspired by Devin Booker’s blue 1972 Chevrolet Blazer, which is named Uncle Larry. \n \n Devin Booker, seen here with his Nike Book 1 x Chevrolet “Dark Gold Leaf” signature silhouette, is deeply involved in the design process for his Nike signature apparel and footwear. Each product reflects the dedication he brings to his craft, both on and off the court.',
    quotes: 'Devin Booker collaborates with Nike and Chevrolet to reimagine his Book 1 silhouette and the Blazer Low in new colorways inspired by his 1972 Chevrolet Blazers. Paired with graphic T-shirts and his first signature apparel line, the collection blends basketball performance, fashion and Americana.',
    description: 'Devin Booker is a connoisseur. A trendsetter. A hooper who pushes the sport to new heights of performance and style. \n \n His look is inspired by the same qualities that define his game: classic, original and geared to perform at the highest level. \n \n The Book 1 x Chevrolet “Dark Gold Leaf,” Nike Blazer Low x Chevrolet “Team Dark Green” and Nike x Chevrolet graphic T-shirts will be available April 22 on SNKRS. The Nike Blazer Low x Chevrolet “Surf Blue” will be available April 22 at select Nike retailers.'
  }
];
export type NewsItem = {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  author: string;
  readTime: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      text: string;
    }[];
    conclusion: string;
  };
  tags: string[];
  relatedNews: number[];
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    date: "October 31, 2025",
    title: "A London Hub for Sport, Creativity and Community",
    description: "Palace are joining forces to open Manor Place: a free, public hub for sport, creativity and community in South London...",
    image: "/img/news/01.jpg",
    author: "Wkkkuu",
    readTime: "5 min read",
    content: {
      intro: "In an exciting development for South London, a groundbreaking collaboration is set to transform the local community landscape. This initiative represents a significant investment in public spaces that prioritize accessibility, creativity, and social connection.",
      sections: [
        {
          heading: "A Vision for Community Engagement",
          text: "Manor Place is designed to be more than just a physical space—it's a catalyst for community building. The hub will offer free access to sports facilities, creative studios, and collaborative workspaces, ensuring that everyone, regardless of background or income, can participate in enriching activities."
        },
        {
          heading: "Sports and Wellness Facilities",
          text: "The sports component includes state-of-the-art courts, training areas, and fitness spaces. Local youth programs will have priority access during after-school hours, while evening slots will accommodate working professionals and families. Certified coaches will offer free workshops and training sessions throughout the week."
        },
        {
          heading: "Creative Studios and Workshops",
          text: "The creative wing features fully-equipped studios for visual arts, music production, and digital media. Monthly exhibitions will showcase local talent, and regular workshops led by industry professionals will provide skill-building opportunities for aspiring artists and creators."
        },
        {
          heading: "Impact on the Local Community",
          text: "Early consultations with residents have shown overwhelming support for the project. Community leaders emphasize the need for safe, inspiring spaces where young people can develop their talents and where neighbors can connect across generational and cultural divides."
        }
      ],
      conclusion: "Manor Place represents a bold reimagining of what community spaces can be. By combining sport, creativity, and social connection under one roof, this hub promises to become a vital resource for South London—a place where everyone belongs and every talent can flourish."
    },
    tags: ["Community", "Sports", "Arts", "London", "Public Space"],
    relatedNews: [2]
  },
  {
    id: 2,
    date: "October 26, 2023",
    title: "Community Climate Resilience Program",
    description: "Revitalized the schoolyard at Public School 107 in the Bronx, New York, creating a more vibrant and functional space...",
    image: "/img/news/02.jpg",
    author: "Wkkkuu",
    readTime: "4 min read",
    content: {
      intro: "Public School 107 in the Bronx has unveiled its transformed schoolyard, marking a milestone in urban climate resilience. This project demonstrates how community-led initiatives can create sustainable, functional spaces that serve multiple purposes while addressing environmental challenges.",
      sections: [
        {
          heading: "Transforming Urban Landscapes",
          text: "The revitalization project converted an underutilized asphalt lot into a vibrant green space featuring native plants, permeable surfaces, and innovative stormwater management systems. The design prioritizes both aesthetic beauty and environmental functionality, creating a model for similar projects across the city."
        },
        {
          heading: "Educational Opportunities",
          text: "Beyond physical improvements, the schoolyard now serves as an outdoor classroom where students learn about ecology, climate science, and sustainable design. Garden beds maintained by student groups provide hands-on experience with urban agriculture and environmental stewardship."
        },
        {
          heading: "Community Benefits",
          text: "The space opens to neighborhood residents after school hours and on weekends, functioning as a community park. Shaded seating areas, walking paths, and play structures make it an inviting destination for families, while reducing the urban heat island effect in this densely populated area."
        },
        {
          heading: "Blueprint for the Future",
          text: "Project leaders are documenting best practices and lessons learned to help other schools and communities undertake similar transformations. The initiative has already inspired neighboring institutions to explore their own climate resilience projects."
        }
      ],
      conclusion: "The Public School 107 project proves that climate action and community building go hand in hand. By reimagining urban spaces through a lens of sustainability and inclusion, we can create environments that are both resilient and nurturing for current and future generations."
    },
    tags: ["Environment", "Education", "Urban Design", "Sustainability", "Bronx"],
    relatedNews: [1]
  }
];
export const indiaRegions = [
  {
    id: "north",
    title: "North India",
    description: "Embark on an enchanting Himalayan odyssey of cultures and majestic landscapes in North India.",
    image: "/images/north-india-winter-village.jpeg",
  },
  {
    id: "south",
    title: "South India",
    description:
      "Enjoy your journey through the diverse charm of South India's rich heritage, lush landscapes, and vibrant traditions.",
    image: "/images/south-india-beach.jpeg",
  },
  {
    id: "west",
    title: "West India",
    description: "Unveil the mystique of West India's diverse wonders, from ancient heritage sites to vibrant bazaars.",
    image: "/images/west-india-desert.png",
  },
  {
    id: "east",
    title: "East India",
    description:
      "Go on an expedition through the cultural gems, serene landscapes, and untamed beauty of East India's enigmatic realm.",
    image: "/images/east-india-waters.png",
  },
]

export const internationalRegions = [
  {
    id: "europe",
    title: "Europe",
    description:
      "Discover the timeless charm of Europe's historic cities, stunning architecture, and diverse cultures.",
    image: "/images/europe-architecture.png",
  },
  {
    id: "dubai",
    title: "Dubai",
    description:
      "Experience the luxury and innovation of Dubai's modern skyline, desert adventures, and world-class hospitality.",
    image: "/images/dubai-skyline.png",
  },
  {
    id: "southeast-asia",
    title: "Southeast Asia",
    description: "Discover crystal-clear waters, limestone cliffs, tropical islands, and ancient temples.",
    image: "/images/southeast-asia-tropical.png",
  },
  {
    id: "americas",
    title: "More Destinations",
    image: "/images/americas-northern-lights.png",
  },
]

// Combine all regions for the "All" tab
export const allRegions = [...indiaRegions, ...internationalRegions]

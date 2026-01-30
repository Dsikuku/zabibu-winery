export interface Wine {
  id: string;
  name: string;
  price: string;
  varietal: string;
  vintage: string;
  description: string;
  image: string;
  category: "Core" | "Reserve" | "Small Lot";
}

export const WINES: Wine[] = [
  {
    id: "lakeside-chardonnay",
    name: "Lakeside Chardonnay",
    price: "$32.00",
    varietal: "White Wine",
    vintage: "2022",
    description: "A bright, mineral-driven Chardonnay with notes of crisp green apple and a subtle flinty finish. Harvested exclusively from our Grimsby Bench estate.",
    image: "/images/wines/chardonnay.jpg",
    category: "Core"
  },
  {
    id: "bench-riesling",
    name: "Bench Riesling",
    price: "$28.00",
    varietal: "White Wine",
    vintage: "2023",
    description: "Vibrant and zesty with classic Grimsby Bench acidity. Aromas of lime zest, white peach, and wet stone lead to a bone-dry finish.",
    image: "/images/wines/riesling.jpg", // Re-using path for new logic
    category: "Core"
  },
  {
    id: "grimsby-pinot-noir",
    name: "Grimsby Pinot Noir",
    price: "$45.00",
    varietal: "Red Wine",
    vintage: "2021",
    description: "Elegant and nuanced, featuring layers of wild strawberry, earth, and crushed limestone. Aged for 14 months in French oak barrels.",
    image: "/images/wines/pinot.jpg",
    category: "Core"
  },
  {
    id: "estate-rose",
    name: "Estate Rosé",
    price: "$26.00",
    varietal: "Rosé Wine",
    vintage: "2023",
    description: "A delicate, pale-pink blend of Pinot Noir and Gamay. Refreshing notes of watermelon, wild raspberry, and a touch of saline minerality.",
    image: "/images/wines/rose.jpg",
    category: "Core"
  },
  {
    id: "reserve-cabernet",
    name: "Reserve Cabernet",
    price: "$58.00",
    varietal: "Red Wine",
    vintage: "2020",
    description: "A bold, structured Cabernet with deep dark fruit flavors and firm tannins. Perfectly balanced with the cooling influence of Lake Ontario.",
    image: "/images/wines/cabernet.jpg",
    category: "Reserve"
  },
  {
    id: "bench-blend-red",
    name: "The Bench Red",
    price: "$38.00",
    varietal: "Red Blend",
    vintage: "2021",
    description: "Our signature estate blend. A harmonious mix of Merlot and Cabernet Franc, offering plum, cocoa, and dried herb complexities.",
    image: "/images/wines/blend.jpg",
    category: "Core"
  }
];
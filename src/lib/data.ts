export interface Wine {
  id: string;
  name: string;
  price: string;
  varietal: string;
  vintage: string;
  description: string;
  image: string;
}

export const WINES: Wine[] = [
  {
    id: "lakeside-chardonnay",
    name: "Lakeside Chardonnay",
    price: "$32.00",
    varietal: "White Wine",
    vintage: "2022",
    description: "A bright, mineral-driven Chardonnay with notes of crisp green apple and a subtle flinty finish. Harvested exclusively from our Grimsby Bench estate.",
    image: "/images/wines/chardonnay.jpg"
  },
  {
    id: "grimsby-pinot-noir",
    name: "Grimsby Pinot Noir",
    price: "$45.00",
    varietal: "Red Wine",
    vintage: "2021",
    description: "Elegant and nuanced, featuring layers of wild strawberry, earth, and crushed limestone. Aged for 14 months in French oak barrels.",
    image: "/images/wines/pinot.jpg"
  },
  {
    id: "reserve-cabernet",
    name: "Reserve Cabernet",
    price: "$58.00",
    varietal: "Red Wine",
    vintage: "2020",
    description: "A bold, structured Cabernet with deep dark fruit flavors and firm tannins. Perfectly balanced with the cooling influence of Lake Ontario.",
    image: "/images/wines/riesling.jpg"
  },
];
 export interface MenuProps {
  category: string;
  image: string;
  name: string;
  description: string;
  price: number;
  id: string;
  quantity:number;
}

export const menuImages: MenuProps[] = [
  {
    id:'1',
    image: "/images/truffle-cake.jpg",
    name: "Chocolate Truffle",
    description: "Rich and moist chocolate cake topped with creamy frosting.",
    price: 25,
    category: "Chocolate",
    quantity:1
  },
  {
    id:'2',
    name: "Chocolate Delight",
    description: "Rich dark chocolate cake with silky ganache and fresh berries. Perfect for chocolate lovers.",
    price: 45,
    image: "/images/chocolate-cake-OgXwrX5W.jpg",
    category: "Chocolate",
    quantity:1
  },
  {
    id:'3',
    image: "/images/wedding-cake.jpg",
    name: "Vanilla Wedding Cake",
    description: "Elegant vanilla cake perfect for weddings and special events.",
    price: 40,
    category: "Wedding",
    quantity:1
  },
  {
    id:'4',
    image: "/images/red-velvet-cake.jpg",
    name: "Red Velvet Cake",
    description: "Classic red velvet cake with smooth cream cheese frosting.",
    price: 30,
    category: "Birthday",
    quantity:1
  },
  {
    id: "5",
    name: "Strawberry Shortcake",
    description: "Light sponge cake layered with fresh strawberries and whipped cream.",
    price: 40,
    image: '/images/strawberry-cake.jpg',
    category: "fruit",
    quantity:1
  },
  
  
  {
    id: "6",
    name: "Gourmet Cupcakes",
    description: "Assorted flavors: chocolate, vanilla, strawberry, and lemon with beautiful decorations.",
    price: 25,
    image: '/images/cupcakes.jpg',
    category: "cupcakes",
    quantity:1
  },
  {
    id: "7",
    name: "Rainbow Celebration",
    description: "Colorful rainbow layers with vanilla buttercream and festive sprinkles.",
    price: 50,
    image: '/images/rainbow-cake.jpg',
    quantity:1,
    category: "specialty"
  }
];

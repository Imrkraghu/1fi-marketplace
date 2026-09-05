import { Product } from "../types/products";

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15",
    description: "Apple iPhone 15 with advanced camera and powerful performance.",
    price: "₹79,900",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",

    variants: [
      {
        id: "1-1",
        name: "128GB",
        price: "₹79,900",
        emiPlans: [
          {
            id: "1-1-emi-1",
            tenure: 12,
            monthlyEmi: 6650,
            interestRate: 0,
            totalPayable: 79800,
          },
          {
            id: "1-1-emi-2",
            tenure: 18,
            monthlyEmi: 4439,
            interestRate: 0,
            totalPayable: 79902,
          },
        ],
      },
      {
        id: "1-2",
        name: "256GB",
        price: "₹89,900",
        emiPlans: [
          {
            id: "1-2-emi-1",
            tenure: 12,
            monthlyEmi: 7492,
            interestRate: 0,
            totalPayable: 89904,
          },
          {
            id: "1-2-emi-2",
            tenure: 18,
            monthlyEmi: 4995,
            interestRate: 0,
            totalPayable: 89910,
          },
        ],
      },
    ],

    emiPlans: [
      {
        id: "1-emi-1",
        tenure: 12,
        monthlyEmi: 6650,
        interestRate: 0,
        totalPayable: 79800,
      },
      {
        id: "1-emi-2",
        tenure: 18,
        monthlyEmi: 4439,
        interestRate: 0,
        totalPayable: 79902,
      },
    ],
  },

  {
    id: "2",
    name: "Samsung Galaxy S24",
    description: "Samsung Galaxy S24 with a premium display and powerful processor.",
    price: "₹74,999",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",

    variants: [
      {
        id: "2-1",
        name: "128GB",
        price: "₹74,999",
        emiPlans: [
          {
            id: "2-1-emi-1",
            tenure: 12,
            monthlyEmi: 6250,
            interestRate: 0,
            totalPayable: 75000,
          },
          {
            id: "2-1-emi-2",
            tenure: 18,
            monthlyEmi: 4167,
            interestRate: 0,
            totalPayable: 75006,
          },
        ],
      },
      {
        id: "2-2",
        name: "256GB",
        price: "₹84,999",
        emiPlans: [
          {
            id: "2-2-emi-1",
            tenure: 12,
            monthlyEmi: 7083,
            interestRate: 0,
            totalPayable: 85000,
          },
          {
            id: "2-2-emi-2",
            tenure: 18,
            monthlyEmi: 4722,
            interestRate: 0,
            totalPayable: 85000,
          },
        ],
      },
    ],

    emiPlans: [
      {
        id: "2-emi-1",
        tenure: 12,
        monthlyEmi: 6250,
        interestRate: 0,
        totalPayable: 75000,
      },
      {
        id: "2-emi-2",
        tenure: 18,
        monthlyEmi: 4167,
        interestRate: 0,
        totalPayable: 75006,
      },
    ],
  },

  {
    id: "3",
    name: "MacBook Air",
    description: "Apple MacBook Air with a lightweight design and excellent performance.",
    price: "₹1,14,900",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",

    variants: [
      {
        id: "3-1",
        name: "8GB / 256GB",
        price: "₹1,14,900",
        emiPlans: [
          {
            id: "3-1-emi-1",
            tenure: 12,
            monthlyEmi: 9575,
            interestRate: 0,
            totalPayable: 114900,
          },
          {
            id: "3-1-emi-2",
            tenure: 18,
            monthlyEmi: 6384,
            interestRate: 0,
            totalPayable: 114912,
          },
        ],
      },
      {
        id: "3-2",
        name: "16GB / 512GB",
        price: "₹1,29,900",
        emiPlans: [
          {
            id: "3-2-emi-1",
            tenure: 12,
            monthlyEmi: 10825,
            interestRate: 0,
            totalPayable: 129900,
          },
          {
            id: "3-2-emi-2",
            tenure: 18,
            monthlyEmi: 7328,
            interestRate: 0,
            totalPayable: 131904,
          },
        ],
      },
    ],

    emiPlans: [
      {
        id: "3-emi-1",
        tenure: 12,
        monthlyEmi: 9575,
        interestRate: 0,
        totalPayable: 114900,
      },
      {
        id: "3-emi-2",
        tenure: 18,
        monthlyEmi: 6384,
        interestRate: 0,
        totalPayable: 114912,
      },
    ],
  },
];
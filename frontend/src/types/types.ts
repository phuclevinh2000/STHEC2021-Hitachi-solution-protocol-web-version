export type ProductType = {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
    emissonCO2: number;
    electricityCost: number;
  };
};

export type RatingType = {
  value: any;
  text: string;
  color: string;
};

export type ProductCardType = {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    prices: number;
    countInStock: number;
    rating: number;
    numReviews: number;
    emissonCO2: number;
    lifeCircleCO2Estimation: number;
    electricityCost: number;
  };
};

export type SingleProduct = {
  image: string,
  name: string,
  rating: string,
  numReviews: number,
  prices: number,
  description: string,
  countInStock: number,
  category: string,
}

export type RatingType = {
  value: any;
  text: string;
  color: string;
};

export type CargotegyCard = {
  card: { name: string; background: string; description: string };
};

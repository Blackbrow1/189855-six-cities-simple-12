export type Offer = {
  offersImg: string[];
  isPremium: boolean;
  title: string;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: {
    avatarImg: string;
    isPro: boolean;
    name: string;
  };
  description: string;
  id: number;
};

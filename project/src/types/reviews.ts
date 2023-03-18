export type Review = {
  comment: string;
  month: string;
  year: string;
  user: {
    avatar: string;
    name: string;
    isPro: boolean;
  };
  id: number;
};

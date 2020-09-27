import { User } from "./user";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  user: User;
};

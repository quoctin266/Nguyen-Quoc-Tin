export {};

declare global {
  interface ICurrency {
    currency: string;
    date: string;
    price: number;
  }
}

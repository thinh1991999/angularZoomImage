export interface product {
  id: string;
  company: string;
  imgs: any[];
  about: string;
  name: string;
  price: number;
  sale: number;
}

export interface cart extends product {
  count: number;
  realPrice: number;
}

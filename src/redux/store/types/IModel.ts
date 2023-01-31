export interface IModel {
  modelName: string;
  color: string;
  colorId: string;
  price: number;
  modelImg: string;
  img: string[];
  uniqueId: string;
  size: {
    size: string;
    rest: number;
    _id?: string;
  };
  _id?: string;
  amount: number;
}

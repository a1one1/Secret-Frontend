export interface IModel {
  modelName: string;
  color: string;
  colorId: string;
  price: number;
  modelImg: string;
  img: string[];
  uniqueId: string;
  size: ISizeModel;
  _id?: string;
  amount: number;
}

export interface ISizeModel {
  size: string;
  rest: number;
  _id?: string;
}

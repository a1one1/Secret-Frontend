export interface IUser {
  modelName: string;
  color: string;
  size: {
    size: string;
    rest: number;
    _id?: string;
  };
  amount: number;
}

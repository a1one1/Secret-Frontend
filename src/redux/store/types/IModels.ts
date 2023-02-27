export interface iModels {
  colors: iModelsColor[];
  _id: string;
  name: string;
  modelImg: string;
  img: string[];
  price: number;
  discount: number;
  categoriesId: {
    _id: string;
    name: string;
  };
}

export interface iModelsColor {
  color: string;
  modelImgItem: string;
  imgItem: string[];
  _id: string;
  sizesModel: iModelsSize[];
}

export interface iModelsSize {
  size: string;
  rest: number;
  _id: string;
}

export interface iCategories {
  _id: string;
  name: string;
}

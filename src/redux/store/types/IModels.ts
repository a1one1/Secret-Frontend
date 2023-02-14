export interface iModels {
  colors: [
    {
      color: String;
      modelImgItem: String;
      imgItem: String[];
      _id: String;
      sizesModel: [
        {
          size: String;
          rest: Number;
          _id: string;
        }
      ];
    }
  ];
  _id: string;
  name: string;
  modelImg: string;
  img: String[];
  price: Number;
  discount: Number;
  categoriesId: {
    _id: string;
    name: string;
    __v: Number;
  };
  __v: Number;
}

export interface iCategories {
  _id: string;
  name: string;
}

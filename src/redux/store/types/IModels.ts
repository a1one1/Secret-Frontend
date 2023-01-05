// export interface IModels {
//   colors: {
//     white?: {
//       size: {
//         XS: Number;
//         S: Number;
//         M: Number;
//         L: Number;
//         XL: Number;
//       };
//       img: string;
//     };
//     blue?: {
//       size: {
//         XS: Number;
//         S: Number;
//         M: Number;
//         L: Number;
//         XL: Number;
//       };
//       img: string;
//     };
//     black?: {
//       size: {
//         XS: Number;
//         S: Number;
//         M: Number;
//         L: Number;
//         XL: Number;
//       };
//       img: string;
//     };
//   };
//   _id: string;
//   name: string;
//   modelImg: string;
//   price: Number;
//   categoriesId: {
//     _id: string;
//     name: string;
//     __v: Number;
//   };
//   __v: Number;
// }

export interface iModels {
  colors: [
    {
      color: String;
      img: String;
      sizesModel: [
        {
          size: String;
          rest: Number;
        }
      ];
    }
  ];
  _id: string;
  name: string;
  modelImg: string;
  price: Number;
  discount: Number;
  categoriesId: {
    _id: string;
    name: string;
    __v: Number;
  };
  __v: Number;
}

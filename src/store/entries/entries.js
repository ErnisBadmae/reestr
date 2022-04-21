// // import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data: [],
//   columns: [],
//   currentItem: {},
// };

// export const main = (state = initialState, action) => {
//   switch (action.type) {
//     case 'GET_DATA':
//       // console.log('mydata', action.payload);

//       let cols = action.payload.table.map((elem) => {
//         return {
//           title: elem.title,
//           dataIndex: elem.data_key,
//         };
//       });
//       // console.log('action payload table', cols);
//       return { ...state, columns: cols, data: action.payload.data };

//     case 'GET_ITEM':
//       // console.log(action.payload," action.payload from get item");

//       return {
//         ...state,
//         currentItem: action.payload.data.data.find(
//           (el) => el.id_sds === action.payload.page_id
//         ),
//       };

//     // case 'INIT_CURRENT_ITEM':
//     //   console.log('action.payload init current', action.payload);
//     //   return {
//     //     ...state,
//     //     curentItem: action.payload,
//     //   };

//     default:
//       return state;
//   }
// };

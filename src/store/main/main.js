// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  data: [],
  columns: [],
  currentItem: {},
};

export const main = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      // console.log('mydata', action.payload);

      let cols = action.payload.table.map((elem) => {
        return {
          title: elem.title,
          dataIndex: elem.data_key,
        };
      });

      return { ...state, columns: cols, data: action.payload.data };

    case 'GET_ITEM':
      // console.log(action.payload);

      return {
        ...state,
        currentItem: action.payload.data.data.find(
          (el) => el.data_key == action.payload.page_id
        ),
      };

    case 'INIT_CURRENT_ITEM':
      return {
        ...state,
        curentItem: action.payload,
      };

    default:
      return state;
  }
};

// export const main = createSlice({
//   name: 'main',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = main.actions

// export default main

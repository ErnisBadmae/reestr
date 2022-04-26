import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEntries = createAsyncThunk('entries/get', async (dispatch) => {
  let res = await fetch('/table.json');
  let result = await res.json();
  // result.data.array.forEach(element => {
  //   element
  // });
  return result.data;
  // console.log('data', data)
  // console.log(dispatch)
  // dispatch({ type: 'GET_DATA', payload: data });
});



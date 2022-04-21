import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEntries = createAsyncThunk('entries/get', async (dispatch) => {
  let res = await fetch('/table.json');
  let data = await res.json();
  return data;
  // console.log('data', data)
  // console.log(dispatch)
  // dispatch({ type: 'GET_DATA', payload: data });
});



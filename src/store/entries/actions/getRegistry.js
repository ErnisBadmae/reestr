import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRegistry = createAsyncThunk(
    'registry/get',
    async (payload, dispatch) => {
        //    console.log('dspatchLIST', dispatch);
        let result = await axios(
            `http://jsonplaceholder.typicode.com/posts${payload}`
        );

        console.log('result', result);
        return result.data.data;
    }
);

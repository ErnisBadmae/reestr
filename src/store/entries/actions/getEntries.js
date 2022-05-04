import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEntries = createAsyncThunk(
    'entries/get',
    async (payload, dispatch) => {
        //    console.log('dspatchLIST', dispatch);
        let result = await axios(
            'http://api-prof-sdc.anonamis.ru/api/register/standard-certification/list'
        );

        console.log('result', result);
        return result.data.data;
    }
);

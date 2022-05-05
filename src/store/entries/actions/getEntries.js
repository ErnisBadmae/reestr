import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEntries = createAsyncThunk(
    'entries/get',
    async (payload, dispatch) => {
        //    console.log('dspatchLIST', dispatch);
        let result = await axios.post(
            'http://api-prof-sdc.anonamis.ru/api/register/standard-certifications/list',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: payload,
                withCredentials: false,
            }
        );
        console.log('result', result);
        return result.data.data;
    }
);

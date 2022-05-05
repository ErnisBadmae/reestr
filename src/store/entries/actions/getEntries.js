import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEntries = createAsyncThunk(
    'entries/get',
    async (payload, dispatch) => {
        let result = await axios.post(
            'http://api-prof-sdc.anonamis.ru/api/register/standard-certifications/list'
        );
        console.log('result', result);
        return result.data.data.data;
    }
);

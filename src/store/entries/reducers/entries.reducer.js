import { createReducer } from '@reduxjs/toolkit';
import { getEntries } from '../actions/getEntries';
import { getView } from '../actions/getView';
import { getRegistry } from '../actions/getRegistry';

import {
    getEntriesFail,
    getEntriesRequest,
    getEntriesSuccess,
    getViewFail,
    getViewRequest,
    getViewSuccess,
    getRegistryFail,
    getRegistryRequest,
    getRegistrySuccess,
} from './getEntries';

const initialState = {
    loading: false,
    entries: [],
    currentCard: null,
    registry: null,
};

export const entriesReducer = createReducer(initialState, {
    [getEntries.pending.toString()]: getEntriesRequest,
    [getEntries.fulfilled.toString()]: getEntriesSuccess,
    [getEntries.rejected.toString()]: getEntriesFail,
    [getView.pending.toString()]: getViewRequest,
    [getView.fulfilled.toString()]: getViewSuccess,
    [getView.rejected.toString()]: getViewFail,
    [getRegistry.pending.toString()]: getRegistryRequest,
    [getRegistry.fulfilled.toString()]: getRegistrySuccess,
    [getRegistry.rejected.toString()]: getRegistryFail,
});

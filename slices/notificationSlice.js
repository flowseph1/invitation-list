import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.message = action.payload;
        },
    },
});

export const notificationMessage = state => state.notification.message;

export const { addNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.value = [...state.value, { name: action.payload.name, nickname: action.payload.nickname }];
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter(user => user.name !== action.payload);
        },
    },
});

export const userValue = state => state.user;

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

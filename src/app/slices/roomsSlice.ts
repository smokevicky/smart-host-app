import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoomsState {
    freePremiumRooms: number;
    freeEconomyRooms: number;
}

const initialState: RoomsState = {
    freePremiumRooms: 0,
    freeEconomyRooms: 0,
};

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        setFreePremiumRooms: (state, action: PayloadAction<number>) => {
            // Ensure positive integers
            state.freePremiumRooms = Math.max(0, Math.floor(action.payload));
        },
        setFreeEconomyRooms: (state, action: PayloadAction<number>) => {
            // Ensure positive integers
            state.freeEconomyRooms = Math.max(0, Math.floor(action.payload));
        },
    },
});

export const { setFreePremiumRooms, setFreeEconomyRooms } = roomsSlice.actions;

export default roomsSlice.reducer;

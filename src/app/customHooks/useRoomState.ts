import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setFreePremiumRooms, setFreeEconomyRooms } from '../slices/roomsSlice';
import { calculateOccupancy } from '../dataUtilities/calculateOccupancy';
import { guestData } from '../../assignment-input/guestData';
import { useMemo } from 'react';

/**
 * Custom hook to manage room state and derive occupancy data.
 */
export const useRoomState = () => {
    const dispatch = useDispatch();
    const { freePremiumRooms, freeEconomyRooms } = useSelector((state: RootState) => state.rooms);

    const occupancy = useMemo(() => {
        return calculateOccupancy(freePremiumRooms, freeEconomyRooms, guestData);
    }, [freePremiumRooms, freeEconomyRooms]);

    return {
        freePremiumRooms,
        freeEconomyRooms,
        setFreePremiumRooms: (val: number) => dispatch(setFreePremiumRooms(val)),
        setFreeEconomyRooms: (val: number) => dispatch(setFreeEconomyRooms(val)),
        occupancy,
    };
};

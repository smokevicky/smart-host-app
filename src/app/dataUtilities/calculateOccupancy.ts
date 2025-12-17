export interface OccupancyResult {
    premiumUsed: number;
    premiumRevenue: number;
    economyUsed: number;
    economyRevenue: number;
    totalRevenue: number;
    netUpgraded: number; // New field for Upgrade Indicator
}

/**
 * Calculates the occupancy and revenue for Premium and Economy rooms.
 * 
 * Logic derived from Smart Host Test Cases:
 * 1. Premium guests (>=100) fill Premium rooms first.
 * 2. Economy guests (<100) fill Economy rooms.
 * 3. UPGRADE RULE:
 *    - If Economy rooms are sufficient for all Economy guests, NO UPGRADE occurs 
 *      (even if Premium rooms are empty). (See Test Case 2 vs 4).
 *    - If Economy rooms are insufficient (Overflow), we use available Premium rooms.
 *    - When upgrading due to overflow, the HIGHEST paying Economy guests get the Premium rooms.
 */
export const calculateOccupancy = (
    freePremiumRooms: number,
    freeEconomyRooms: number,
    guestPrices: number[]
): OccupancyResult => {
    // Filter and sort guests
    const premiumGuests = guestPrices
        .filter((price) => price >= 100)
        .sort((a, b) => b - a);

    const economyGuests = guestPrices
        .filter((price) => price < 100)
        .sort((a, b) => b - a);

    // 1. Fill Premium rooms with Premium guests
    const premiumGuestsToAccommodate = premiumGuests.slice(0, freePremiumRooms);
    let premiumRevenue = premiumGuestsToAccommodate.reduce((sum, price) => sum + price, 0);
    let premiumUsed = premiumGuestsToAccommodate.length;

    const premiumCapacityRemaining = freePremiumRooms - premiumUsed;

    // 2. Handle Economy Guests and Upgrades
    let economyUsed = 0;
    let economyRevenue = 0;
    let netUpgraded = 0;

    if (economyGuests.length <= freeEconomyRooms) {
        // Case A: Sufficient Economy rooms. No Upgrade.
        economyUsed = economyGuests.length;
        economyRevenue = economyGuests.reduce((sum, price) => sum + price, 0);
    } else {
        // Case B: Insufficient Economy rooms. Overflow triggered.
        // Total spots available for Economy guests = Economy Rooms + Remaining Premium Rooms
        const totalSlotsForEconomy = freeEconomyRooms + premiumCapacityRemaining;

        // We accommodate the top N guests that fit in total slots
        const guestsToAccommodate = economyGuests.slice(0, totalSlotsForEconomy);

        // Distribute these guests:
        // Best guests go to Premium (Upgrade)
        const upgradedGuests = guestsToAccommodate.slice(0, premiumCapacityRemaining);
        const regularEconomyGuests = guestsToAccommodate.slice(premiumCapacityRemaining);

        // Add Upgrades to Premium stats
        premiumUsed += upgradedGuests.length;
        premiumRevenue += upgradedGuests.reduce((sum, price) => sum + price, 0);
        netUpgraded = upgradedGuests.length;

        // Add Regular to Economy stats
        economyUsed = regularEconomyGuests.length;
        economyRevenue = regularEconomyGuests.reduce((sum, price) => sum + price, 0);
    }

    return {
        premiumUsed,
        premiumRevenue,
        economyUsed,
        economyRevenue,
        totalRevenue: premiumRevenue + economyRevenue,
        netUpgraded,
    };
};

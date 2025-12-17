
import { calculateOccupancy } from './calculateOccupancy';
import { guestData } from '../../assignment-input/guestData';

describe('calculateOccupancy', () => {
    // Test 1
    it('Premium: 3, Economy: 3 -> P: 3 (€738), E: 3 (€167)', () => {
        const result = calculateOccupancy(3, 3, guestData);
        expect(result.premiumUsed).toBe(3);
        expect(result.premiumRevenue).toBe(738);
        expect(result.economyUsed).toBe(3);
        expect(result.economyRevenue).toBe(167);
        expect(result.totalRevenue).toBe(738 + 167);
        expect(result.netUpgraded).toBe(0);
    });

    // Test 2
    it('Premium: 7, Economy: 5 -> P: 7 (€1054), E: 5 (€189)', () => {
        const result = calculateOccupancy(7, 5, guestData);
        expect(result.premiumUsed).toBe(6);
        expect(result.premiumRevenue).toBe(1054);
        expect(result.economyUsed).toBe(4);
        expect(result.economyRevenue).toBe(189);
        expect(result.totalRevenue).toBe(1054 + 189);
        expect(result.netUpgraded).toBe(0);
    });

    // Test 3
    it('Premium: 2, Economy: 7 -> P: 2 (€583), E: 7 (€189)', () => {
        const result = calculateOccupancy(2, 7, guestData);
        expect(result.premiumUsed).toBe(2);
        expect(result.premiumRevenue).toBe(583);
        expect(result.economyUsed).toBe(4); // Only 4 economy guests total available to fit
        expect(result.economyRevenue).toBe(189);
        expect(result.totalRevenue).toBe(583 + 189);
        expect(result.netUpgraded).toBe(0);
    });

    // Test 4
    it('Premium: 7, Economy: 1 -> P: 7 (€1153), E: 1 (€45)', () => {
        const result = calculateOccupancy(7, 1, guestData);
        expect(result.premiumUsed).toBe(7); // 6 Premium + 1 Upgraded
        expect(result.premiumRevenue).toBe(1153);
        expect(result.economyUsed).toBe(1);
        expect(result.economyRevenue).toBe(45);
        expect(result.totalRevenue).toBe(1153 + 45);
        expect(result.netUpgraded).toBe(1);
    });

    // Edge Cases
    it('Zero rooms', () => {
        const result = calculateOccupancy(0, 0, guestData);
        expect(result.premiumUsed).toBe(0);
        expect(result.premiumRevenue).toBe(0);
        expect(result.economyUsed).toBe(0);
        expect(result.economyRevenue).toBe(0);
        expect(result.netUpgraded).toBe(0);
    });

    it('No guests', () => {
        const result = calculateOccupancy(5, 5, []);
        expect(result.premiumUsed).toBe(0);
        expect(result.premiumRevenue).toBe(0);
        expect(result.economyUsed).toBe(0);
        expect(result.economyRevenue).toBe(0);
        expect(result.netUpgraded).toBe(0);
    });

    it('Only premium guests', () => {
        const guests = [150, 200, 300];
        const result = calculateOccupancy(2, 2, guests);
        // P rooms: 2. P guests: 3.
        // Fill 2 P rooms with 300, 200. Left: 150.
        // Economy rooms 2. Logic says "Guests paying < 100 are Economy".
        // 150 is Premium. "Premium guests must never be placed in Economy rooms".
        // So 150 is NOT placed in Economy.
        expect(result.premiumUsed).toBe(2);
        expect(result.premiumRevenue).toBe(500);
        expect(result.economyUsed).toBe(0);
        expect(result.economyRevenue).toBe(0);
    });

    it('Only economy guests', () => {
        const guests = [50, 20, 30];
        const result = calculateOccupancy(2, 2, guests);
        // P rooms: 2. E rooms: 2.
        // P guests: 0.
        // Upgrade: P rooms empty (2).
        // Upgrade top 2 economy: 50, 30.
        // Remaining E guests: 20.
        // Fit into E rooms (2 available).
        expect(result.premiumUsed).toBe(2);
        expect(result.premiumRevenue).toBe(80);
        expect(result.economyUsed).toBe(1);
        expect(result.economyRevenue).toBe(20);
    });
});

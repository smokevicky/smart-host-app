/**
 * Formats a number as Euro currency.
 * @param value Number to format
 * @returns Formatted string (e.g. € 123)
 */
export const formatCurrency = (value: number): string => {
    return `€ ${value}`;
};

import { render, screen } from '@testing-library/react';
import { IconLabel } from './IconLabel';
import { Home } from 'lucide-react';

describe('IconLabel', () => {
    it('renders icon and label', () => {
        // Lucide icons render as SVGs
        render(<IconLabel icon={Home} label="Test Label" />);
        expect(screen.getByText('Test Label')).toBeInTheDocument();
        // Verify SVG is present (Lucide icons are svgs)
        expect(document.querySelector('svg')).toBeInTheDocument();
    });
});

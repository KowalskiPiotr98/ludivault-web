import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from './deleteButton.tsx';
import { describe, it, vi, expect } from 'vitest';

describe('DeleteButton', () => {
    it('renders without crashing', () => {
        render(<DeleteButton onTrigger={vi.fn()} title={"Delete test"}/>);

        expect(screen.getByTitle('Delete test')).toBeInTheDocument();
    });

    it('toggles icon to check on first click', () => {
        render(<DeleteButton onTrigger={vi.fn()} title={"Delete test"} />);
        const button = screen.getByTitle("Delete test")

        fireEvent.click(button);

        expect(screen.getByTitle("Click again to confirm")).toBeInTheDocument();
    });

    it('calls onTrigger on the second click', () => {
        const onTrigger = vi.fn();
        render(<DeleteButton onTrigger={onTrigger} title={"Delete test"} />);
        const button = screen.getByTitle("Delete test");

        fireEvent.click(button); // first click to toggle icon
        fireEvent.click(button); // second click to trigger callback

        expect(onTrigger).toHaveBeenCalledTimes(1);
        expect(screen.getByTitle("Delete test")).toBeInTheDocument();
    });

    it('resets to trash icon on mouse leave', () => {
        render(<DeleteButton onTrigger={vi.fn()} title={"Delete test"}/>);
        const button = screen.getByTitle("Delete test");

        fireEvent.click(button); // toggle to check icon
        fireEvent.mouseLeave(button); // mouse leave to reset

        expect(screen.getByTitle("Delete test")).toBeInTheDocument();
    });

    it('does not respond to clicks when disabled', () => {
        const onTrigger = vi.fn();
        render(<DeleteButton onTrigger={onTrigger} disabled={true} title={"Delete test"} />);
        const button = screen.getByTitle("Delete test");

        fireEvent.click(button);

        expect(onTrigger).not.toHaveBeenCalled();
        expect(button).toBeDisabled();
    });
});

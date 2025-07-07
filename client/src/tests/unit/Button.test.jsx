// Button.test.jsx - Unit test for Button component

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

describe('Button Component', () => {
  // Test rendering
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('py-2', 'px-4', 'rounded', 'font-bold', 'transition-colors', 'duration-200', 'bg-blue-500', 'hover:bg-blue-700', 'text-white');
    expect(button).not.toBeDisabled();
  });

  // Test different variants
  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('bg-blue-500', 'hover:bg-blue-700', 'text-white');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('bg-gray-300', 'hover:bg-gray-400', 'text-gray-800');

    rerender(<Button variant="danger">Danger</Button>);
    button = screen.getByRole('button', { name: /danger/i });
    expect(button).toHaveClass('bg-red-500', 'hover:bg-red-700', 'text-white');
  });

  // Test different sizes
  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('text-sm');

    rerender(<Button size="md">Medium</Button>);
    button = screen.getByRole('button', { name: /medium/i });
    expect(button).not.toHaveClass('text-sm', 'text-lg'); // md is default, so no specific size class

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button', { name: /large/i });
    expect(button).toHaveClass('text-lg');
  });

  // Test disabled state
  it('renders in disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  // Test click handler
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test that disabled button doesn't call onClick
  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test with additional props
  it('passes additional props to the button element', () => {
    render(<Button data-testid="custom-button" aria-label="Custom Button">Custom</Button>);
    const button = screen.getByTestId('custom-button');

    expect(button).toHaveAttribute('aria-label', 'Custom Button');
  });

  // Test with custom className
  it('accepts and applies custom className', () => {
    render(<Button className="custom-class">Custom Class</Button>);
    const button = screen.getByRole('button', { name: /custom class/i });

    expect(button).toHaveClass('custom-class');
  });
}); 
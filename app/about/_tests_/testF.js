import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import FeedbackPage from '../../feedback/page';
import '@testing-library/jest-dom';

// Mocking the useRouter hook from Next.js
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('FeedbackPage', () => {
  // Test case 1: Renders the form with necessary fields
  test('renders form with name, email, rating, and comments fields', () => {
    render(<FeedbackPage />);

    // Check if the fields are rendered
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/comments/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import { AuthContext } from '../../App';

const mockUser = {
  name: 'Test User',
  email: 'test@example.com',
};

describe('UserDashboard', () => {
  it('renders welcome message with user name', () => {
    render(
      <AuthContext.Provider value={{ user: mockUser }}>
        <MemoryRouter>
          <UserDashboard />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/welcome, test user/i)).toBeInTheDocument();
  });

  it('shows update profile section', () => {
    render(
      <AuthContext.Provider value={{ user: mockUser }}>
        <MemoryRouter>
          <UserDashboard />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/update profile/i)).toBeInTheDocument();
  });

  it('shows password update section', () => {
    render(
      <AuthContext.Provider value={{ user: mockUser }}>
        <MemoryRouter>
          <UserDashboard />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/update password/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainScreen from './MainScreen';

describe('MainScreen component', () => {
    it("renders MainScreen component", () => {
        render(
          <MemoryRouter>
            <MainScreen />
          </MemoryRouter>
        );
        // Check if the "Sign Up" and "Login" buttons are present
        expect(screen.getByText("Sign Up")).toBeInTheDocument();
        expect(screen.getByText("Login")).toBeInTheDocument();
      });
});



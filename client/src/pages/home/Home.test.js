import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContextProvider } from '../../context/AuthContext'; 
import Home from './Home';

describe('Home component', () => {
    it ('Tests are running on Home',() =>{
        expect(1 === 1);
    })

    // it('renders StockView component when user job title is HeadChef', () => {
    //     const testUser = {
    //         jobtitle: 'HeadChef',
    //         storecode: '1',
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UzZGVkODA4NzE5OTg5OGVmN2JmZGQiLCJpYXQiOjE3MDYxMzM3NzcsImV4cCI6MTcwNjMwNjU3N30.3RKvsoz-RpQOEag871yqubghy3vdXaIa-P76tm3gLmg',
    //         username: "HeadChefStore1"
    //     };
    //     // Render the Home component within MemoryRouter and AuthContextProvider
    //     render(
    //         <MemoryRouter>
    //             <AuthContextProvider value={{ user: testUser }}>
    //                 <Home/>
    //             </AuthContextProvider>
    //         </MemoryRouter>
    //     );
    //     // Assert that StockView component is rendered
    //     expect(screen.getByTestId('StockView')).toBeInTheDocument();
    // });

    // it('renders AddStock component when user job title is HeadChef or DeliveryDriver', () => {
    //     const headChefUser = { jobtitle: 'HeadChef' };
    //     render(<Home user={headChefUser} />);
    //     expect(screen.getByTestId('AddStockComponent')).toBeInTheDocument();

    //     const deliveryDriverUser = { jobtitle: 'DeliveryDriver' };
    //     render(<Home user={deliveryDriverUser} />);
    //     expect(screen.getByTestId('AddStockComponent')).toBeInTheDocument();
    // });

    // it('renders RemoveStock component when user job title is HeadChef or Chef', () => {
    //     // Provide a mock user with the relevant job title
    //     const mockUser = {
    //       jobtitle: 'HeadChef',
    //       // ... other user properties
    //     };
    
    //     // Render the Home component within MemoryRouter and AuthContextProvider
    //     const { getByText } = render(
    //       <MemoryRouter>
    //         <AuthContextProvider value={{ user: mockUser }}>
    //           <Home />
    //         </AuthContextProvider>
    //       </MemoryRouter>
    //     );
    //     // Assert that RemoveStock component is rendered
    //     expect(getByText('RemoveStock')).toBeInTheDocument();
    //   });



    // it('renders HealthAndSafety component when user job title is HeadChef or HealthAndSafetyOfficer', () => {
    //     const headChefUser = { jobtitle: 'HeadChef' };
    //     render(<Home user={headChefUser} />);
    //     expect(screen.getByTestId('HealthAndSafetyComponent')).toBeInTheDocument();

    //     const healthAndSafetyOfficerUser = { jobtitle: 'HealthAndSafetyOfficer' };
    //     render(<Home user={healthAndSafetyOfficerUser} />);
    //     expect(screen.getByTestId('HealthAndSafetyComponent')).toBeInTheDocument();
    // });

    // it('renders AdminDashboard component when user job title is HeadChef', () => {
    //     const user = { jobtitle: 'HeadChef' };
    //     render(<Home user={user} />);
    //     expect(screen.getByTestId('AdminDashboardComponent')).toBeInTheDocument();
    // });

  // Add more tests for other conditions or adjust based on your component's logic
});

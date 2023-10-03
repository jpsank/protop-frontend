import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchPage from './SearchPage';

test('Search bar appears on the Search page', () => {
    render(<SearchPage />);
    
    // Use a query selector to find the search input element
    const searchInput = screen.getByPlaceholderText('Search...');
  
    // Assert that the search input is present
    expect(searchInput).toBeInTheDocument();
  
    // You can also check for the presence of the "Search" button or other elements as needed
    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeInTheDocument();
});

// This test assumes that the search results are displayed in a list
test('Search returns results', async () => {
    render(<SearchPage />);

    // Simulate user entering a search query
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'sample query' } });

    // Simulate user clicking the "Search" button
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    // Wait for the search results to appear
    await waitFor(() => {
        const searchResultsHeader = screen.getByText('Search Results');
        expect(searchResultsHeader).toBeInTheDocument();
    });

    // Check for the presence of search results (adjust this based on your application's logic)
    const searchResultItems = screen.getAllByRole('listitem'); // Assuming each result is an <li> element
    expect(searchResultItems.length).toBeGreaterThan(0);
});

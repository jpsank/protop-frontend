import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Catalog from './Catalog';

// Example test, not fully fleshed out
test('Catalog displays filtered catalog of knotted proteins', () => {
    render(<Catalog />);
  
    // Check for the initial rendering of "Catalog" heading
    const headingElement = screen.getByText('Catalog');
    expect(headingElement).toBeInTheDocument();
  
    // Check for the initial rendering of "Knot" as the selected filter
    const filterSelect = screen.getByLabelText('Filter by type:');
    expect(filterSelect).toHaveValue('knot');
  
    // Check for the initial rendering of proteins filtered by "Knot"
    const proteinA = screen.getByText('Protein A');
    const proteinB = screen.getByText('Protein B');
    const proteinC = screen.queryByText('Protein C'); // Protein C should not be displayed initially
    expect(proteinA).toBeInTheDocument();
    expect(proteinB).toBeInTheDocument();
    expect(proteinC).toBeNull();
  
    // Simulate changing the filter to "Non-Knot"
    fireEvent.change(filterSelect, { target: { value: 'non-knot' } });
  
    // Check that the filter has changed to "Non-Knot"
    expect(filterSelect).toHaveValue('non-knot');
  
    // Check that Protein C is now displayed while Protein A and Protein B are not
    expect(proteinA).toBeNull();
    expect(proteinB).toBeNull();
    expect(proteinC).toBeInTheDocument();
  });
  
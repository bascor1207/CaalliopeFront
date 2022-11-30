import { render, screen } from '@testing-library/react';

import { waitComplete } from '../../../tests/mocks';
import { mockBooks } from '../../../tests/data';

import { booksService } from '../services';
import { BooksList } from './BooksList';

jest.mock('./Book', () => ({
  Book: () => <div data-testid="book" />
}));

booksService.getBooks = jest.fn();

describe('BooksList component', () => {
  it('should not render any book component', async () => {
    booksService.getBooks.mockResolvedValue([]);

    render(<BooksList />);

    await waitComplete();

    const bookComponents = screen.queryAllByTestId('book');
    expect(bookComponents).toHaveLength(0);
  });

  it('should render the right count of books components', async () => {
    booksService.getBooks.mockResolvedValue(mockBooks);

    render(<BooksList />);

    await waitComplete();

    const bookComponents = screen.queryAllByTestId('book');
    expect(bookComponents).toHaveLength(mockBooks.length);
  });
});

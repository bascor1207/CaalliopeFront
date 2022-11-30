import { render, screen } from '@testing-library/react';

import { waitComplete } from '../../../tests/mocks';
import { mockBook } from '../../../tests/data';

import { booksService } from '../services';
import { BookDetails } from './BookDetails';

booksService.getBook = jest.fn();

describe('BookDetails component', () => {
  it('shout not render anything when book is undefined', async () => {
    booksService.getBook.mockResolvedValue();

    render(<BookDetails/>);

    await waitComplete();

    const bookComponent = screen.queryByTestId('book');
    expect(bookComponent).not.toBeInTheDocument();
  });

  it('should render details of the retrieved book', async () => {
    booksService.getBook.mockResolvedValue(mockBook);

    render(<BookDetails/>);

    await waitComplete();

    const bookComponent = screen.getByTestId('book');
    expect(bookComponent).toBeInTheDocument();

    const title = screen.getByTestId('title');
    expect(title).toHaveTextContent(mockBook.title);

    const author = screen.getByTestId('author');
    expect(author).toHaveTextContent(mockBook.author);

    const resume = screen.getByTestId('resume');
    expect(resume).toHaveTextContent(mockBook.resume);
  });
});

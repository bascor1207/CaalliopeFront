import { fireEvent, render, screen } from '@testing-library/react';

import { mockBook } from '../../../tests/data';

import { booksService } from '../services';
import { Book } from './Book';

booksService.updateStock = jest.fn();

describe('Book component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render a title', () => {
    render(<Book book={{ title: 'TITLE' }} />);
    const element = screen.getByTestId('title');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('TITLE');
  });

  it('should render an author', () => {
    render(<Book book={{ author: 'AUTHOR' }} />);
    const element = screen.getByTestId('author');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('AUTHOR');
  });

  it('should update db value when button "-" has been clicked', () => {
    booksService.updateStock.mockResolvedValue({});
    render(<Book book={{ ...mockBook, stock: 1 }} />);
    const element = screen.getByTestId('less');
    fireEvent.click(element);
    jest.runAllTimers();
    expect(booksService.updateStock).toHaveBeenCalledWith(
      mockBook.id,
      0
    );
  });

  it('should not update anything when button has been clicked and value not changed', () => {
    booksService.updateStock.mockResolvedValue({});
    render(<Book book={mockBook} />);
    const element = screen.getByTestId('less');
    fireEvent.click(element);
    jest.runAllTimers();
    expect(booksService.updateStock).not.toHaveBeenCalled();
  });

  it('should update db value when button "+" has been clicked', () => {
    booksService.updateStock.mockResolvedValue({});
    render(<Book book={mockBook} />);
    const element = screen.getByTestId('more');
    fireEvent.click(element);
    jest.runAllTimers();
    expect(booksService.updateStock).toHaveBeenCalledWith(
      mockBook.id,
      1
    );
  });
});

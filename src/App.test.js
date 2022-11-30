import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('./components/NavBar', () => ({
  NavBar: () => <div data-testid="navbar" />
}));

jest.mock('./views/Books/index', () => ({
  Books: () => <div data-testid="books" />
}));

jest.mock('./views/Admin/index', () => ({
  Admin: () => <div data-testid="admin" />
}));

describe('App component', () => {
  it('should render the right components', () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const routes = screen.getByTestId('routes');
    expect(routes).toBeInTheDocument();

    const routeList = screen.getAllByTestId('route');
    expect(routeList).toHaveLength(5);

    routeList.forEach((route) => {
      const paths = ['/', '*', '/login', '/books/*', '/admin/*'];
      const path = route.getAttribute('path');
      expect(paths.includes(path)).toBe(true);
    });
  });
});

import { act } from '@testing-library/react';

const mockComponent = (testId) => ({ children, ...props }) => (
  <div {...props} data-testid={testId}>{ children }</div>
);

export const initializeTests = () => {
  jest.mock('react-router-dom', () => ({
    useLocation: () => ({}),
    useParams: () => ({}),
    NavLink: mockComponent('navlink'),
    Link: mockComponent('link'),
    Routes: mockComponent('routes'),
    Route: mockComponent('route'),
    Navigate: mockComponent('navigate')
  }));

  jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: jest.fn((k) => k),
      i18n: {
        changeLanguage: jest.fn(),
        language: 'fr'
      },
      ready: true
    })
  }));
}

export const waitComplete = () => {
  return act(async () => Promise.resolve());
}

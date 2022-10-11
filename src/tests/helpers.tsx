import { render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../components/AppRouter/AppRouter';
import { createStore, RootPreloadedState } from '../store';

export const renderWithRouter = (
  component: ReactElement,
  initialRoute = '/'
) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};

export const renderWithRedux = (
  component: ReactNode,
  initialState?: RootPreloadedState
) => {
  const store = createStore(initialState);
  //@ts-ignore
  return render(<Provider store={store}>{component}</Provider>);
};

export const renderWithWrappers = (
  component: ReactNode,
  initialState?: RootPreloadedState,
  initialRoute = '/'
) => {
  const store = createStore(initialState);

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Provider store={store}>
        <>
          <AppRouter />
          {component}
        </>
      </Provider>
    </MemoryRouter>
  );
};

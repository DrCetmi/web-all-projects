import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

function renderApp(routerElement) {
    act(() => {
      const root = ReactDOM.createRoot(container);
      root.render(routerElement);
    });
}

describe('App', () => {
  it('renders without crashing', () => {
    renderApp(
      <Router>
        <App />
      </Router>,
    );
  });

  it('loads with the default path', () => {
    renderApp(
      <Router>
        <App />
      </Router>,
    );
    expect(window.location.pathname).toBe('/');
  });

  it('has at least four navigation elements', () => {
    renderApp(
      <Router>
        <App />
      </Router>,
    );
    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThanOrEqual(4);
  });

  const testCases = [
    { text: 'guitar', path: '/guitar' },
    { text: 'bass', path: '/bass' },
    { text: 'vocals', path: '/vocals' },
    { text: 'drums', path: '/drums' },
  ];

  testCases.forEach(({ text, path }) => {
    it(`navigates to the ${text} page when the ${text} link is clicked`, () => {
      renderApp(
        <Router>
          <App />
        </Router>,
      );

      act(() => {
        const link = Array.from(document.querySelectorAll('a')).find(
          (elm) => elm.textContent.toLowerCase() === text,
        );
        link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(window.location.pathname).toBe(path);
      });
    });
  });

  const imageTestCases = [
    { path: '/guitar', img: 'guitar' },
    { path: '/bass', img: 'bass' },
    { path: '/vocals', img: 'vocals' },
    { path: '/drums', img: 'drums' },
  ];

  imageTestCases.forEach(({ path, img }) => {
    it(`displays an image related to ${img} when the path is ${path}`, () => {
      renderApp(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      expect(
        container.querySelector('main img').getAttribute('src'),
      ).toContain(img);
    });
  });
});

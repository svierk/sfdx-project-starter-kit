import HelloWorld from 'c/helloWorld';
import { createElement } from 'lwc';

describe('c-hello-world', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('displays greeting', () => {
    // Create element
    const element = createElement('c-hello-world', {
      is: HelloWorld
    });
    document.body.appendChild(element);

    // Set public name property
    element.name = 'World';

    // Verify displayed greeting
    return Promise.resolve().then(() => {
      const div = element.shadowRoot.querySelector('div');
      expect(div.textContent).toBe('Hello, World!');
    });
  });
});

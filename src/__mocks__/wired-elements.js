// Mock for wired-elements library
// This prevents Jest from trying to parse the actual ES6 modules

// Mock the custom elements that are used in the app
if (typeof window !== 'undefined') {
  // Only define custom elements if we're in a browser environment
  if (!customElements.get('wired-input')) {
    customElements.define('wired-input', class extends HTMLElement {
      constructor() {
        super();
        // Don't add child nodes to avoid DOM errors
      }
    });
  }
  
  if (!customElements.get('wired-button')) {
    customElements.define('wired-button', class extends HTMLElement {
      constructor() {
        super();
        // Don't add child nodes to avoid DOM errors
      }
    });
  }
  
  if (!customElements.get('wired-radio-group')) {
    customElements.define('wired-radio-group', class extends HTMLElement {
      constructor() {
        super();
        // Don't add child nodes to avoid DOM errors
      }
    });
  }
  
  if (!customElements.get('wired-radio')) {
    customElements.define('wired-radio', class extends HTMLElement {
      constructor() {
        super();
        // Don't add child nodes to avoid DOM errors
      }
    });
  }
}

// Export an empty object to satisfy the import
export default {}; 
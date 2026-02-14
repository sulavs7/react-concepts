# Color Picker (useState + Controlled Input)

## Concept

This component demonstrates how to build a simple **Color Picker** in React using state and controlled inputs.  
It dynamically updates the UI based on user input.

## Key Learnings

- **useState Hook**
  - Learned how to store and update dynamic values using `useState`.
  - The selected color is stored in state and updated whenever the user picks a new color.

- **Controlled Components**
  - The color input is controlled by React state.
  - The input value always reflects the state, and state updates when the input changes.

- **Handling Input Events**
  - Used `onChange` to capture user input.
  - Learned how to access the input value using the event object (`event.target.value`).

- **Dynamic Styling in React**
  - Learned how to apply styles dynamically based on state.
  - Used **double curly braces `{{ }}`** when setting inline styles in React:
    - First `{}` → JavaScript expression inside JSX
    - Second `{}` → JavaScript object for CSS styles

- **State-driven UI**
  - The background color updates automatically when state changes.
  - Demonstrates React’s **reactive rendering** (UI updates when state changes).

- **Single Source of Truth**
  - The selected color is controlled entirely by React state, ensuring predictable UI behavior.

- **Real-time UI Updates**
  - Learned how React instantly re-renders components when state changes, enabling live preview of selected color.

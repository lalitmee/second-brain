# React Notes

## Maximilian Tutorial Notes

- We should name the **event handlers** with the name **handlers** in those events. For example:

  ```javascript
  switchNameHandler = () => {
    console.log('Was clicked');
  };
  ```

  This is an event which is called from a button when the button is clicked

- When **React** updates the **DOM**, it **renders** the whole **component** again. It means the render function runs again inside the code.

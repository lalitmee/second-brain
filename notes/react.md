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

- Don't operate directly on the arrays or objects because it changes the whole state arrays or objects. We can do this:

  ```javascript
  deletePersonHandler = personIndex => {
    // slice() without arguments copies the whole array
    const persons = this.state.persons.slice();

    // or we can use spread operator like this:
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  ```

# Development Notes

These are the notes which I have taken while I faced any problem and I spent a lot of time on the problem.

### HTML & CSS

- **Dropdown going inside the Div** fixed by doing [this GitHub issue's help](https://github.com/angular-ui/ui-select/issues/308)

  ```css
  .ui-select-choices {
   	position: fixed;
      top: auto;
      left: auto;
      width: inherit;
  }
  ```

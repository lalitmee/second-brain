# CSS Notes

- Defaults

  ```css
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0 none;
    position: relative;
    outline: none;
  }
  ```

- Change the scrollbar design

  ```css
  &::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(0, 0, 0, 0);
    -webkit-border-radius: 100px;
  }

  &::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  &::-webkit-scrollbar-thumb:vertical {
    background: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 100px;
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
    min-height: 10px;
  }

  &::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0, 0, 0, 0.61);
    -webkit-border-radius: 100px;
  }
  ```

- Box-shadow on the ng-select comes after clicking

  ```css
  .ui-dropdown.ui-state-focus,
  .ui-multiselect.ui-state-focus {
    box-shadow: none !important;
  }
  ```

- Text Gradient Color from CSS_Tricks

  ```css
  .read-more {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ff8a00),
      to(#da1b60)
    );
    background: linear-gradient(to right, #ff8a00, #da1b60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    font-weight: 700;
  }
  ```

- Awesome Button Styles on Hover

  - [Link to the Website](https://tympanus.net/Development/ButtonStylesInspiration/)

- For aligning something Horizontally and Vertically in center

  - Put that anything inside a **div** and give this **css** to that div:

    ```css
    .div {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
    ```

- For Lists

  - Making bullets of lists padded according to the text for the new line

    ```css
    ul {
      list-style-position: outside;
    }
    ```

    - See this ![Image](https://github.com/lalitmee/dNotes/blob/master/images/list-item-padded.png?raw=true)
    - See this [JS Fiddle](http://jsfiddle.net/4rnNK/1/) too.

- For making the text with three dots when it is larger than the element or div

  ```css
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ```

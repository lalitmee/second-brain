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

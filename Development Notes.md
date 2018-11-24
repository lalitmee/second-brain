# Development Notes

These are the notes which I have taken while I faced any problem and I spent a lot of time on the problem.

### HTML & CSS

- **Dropdown scrollbar going inside the Div** fixed by doing [this GitHub issue's help](https://github.com/angular-ui/ui-select/issues/308)

```css
.ui-select-choices {
  position: fixed;
  top: auto;
  left: auto;
  width: inherit;
}
```

- **Vertical Scroll in the Table's body**

- [Link to the Codepen\*\*](https://codepen.io/paulobrien/pen/NvxNyY)\*\*

- **Dropdown Open on click of Icon outside of Input**

- Just put the icon in a label and give the **#ID** of the input inside the for of the labels

## Angular

- Using **Subject Observable** for saving the user data on tokenvalidate and login was creating problem because I was putting Subject on both places while declaring the observable. [Stackeoverflow](https://stackoverflow.com/questions/50099517/observable-next-is-not-a-function) answer explained here and It should be declared following:

```javascript
resultJob: Subject<string> = new BehaviorSubject<string>("PENDING");
```

# Katerra Scheduler Development Notes

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

- **Vertical Scroll in the Table\'s body**

  - [Link to the Codepen](https://codepen.io/paulobrien/pen/NvxNyY)

- **Dropdown Open on click of Icon outside of Input**

  - Just put the icon in a label and give the **#ID** of the input inside the for of the labels

- **Vertical Scroll** in the body of the **Table**

  - [Link to the Codepen](https://codepen.io/lalitmee/pen/NEzZbW)

- **Shaking Animation for Notification Icon**

  - Changing the class by using `ngClass` with animation in it

  ```css
  .notification-icon-shake {
    display: inline-block;
    color: #19659d;
    -webkit-animation: ring 1000ms ease-in-out infinite;
    -webkit-transform-origin: 50% 4px;
    -moz-animation: ring 1000ms ease-in-out infinite;
    -moz-transform-origin: 50% 4px;
    animation: ring 1000ms ease-in-out infinite;
    transform-origin: 50% 4px;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    7.5% {
      transform: rotate(25deg);
    }
    30% {
      transform: rotate(-25deg);
    }
    45% {
      transform: rotate(15deg);
    }
    58% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(5deg);
    }
    87.5% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @-webkit-keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    7.5% {
      transform: rotate(25deg);
    }
    30% {
      transform: rotate(-25deg);
    }
    45% {
      transform: rotate(15deg);
    }
    58% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(5deg);
    }
    87.5% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @-moz-keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    7.5% {
      transform: rotate(25deg);
    }
    30% {
      transform: rotate(-25deg);
    }
    45% {
      transform: rotate(15deg);
    }
    58% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(5deg);
    }
    87.5% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  ```

#### Padding Concept

The**`padding`**[CSS](https://developer.mozilla.org/en/CSS)property sets the[padding area](https://developer.mozilla.org/en/CSS/box_model#padding-area)on all four sides of an element. It is a[shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)for[`padding-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top 'The padding-top CSS property sets the height of the padding area on the top of an element.'),[`padding-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right 'The padding-right CSS property sets the width of the padding area on the right side of an element.'),[`padding-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom 'The padding-bottom CSS property sets the height of the padding area on the bottom of an element.'), and[`padding-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left 'The padding-left CSS property sets the width of the padding area on the left side of an element.').

```css
/* Apply to all four sides */
padding: 1em;

/* vertical | horizontal */
padding: 5% 10%;

/* top | horizontal | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 2em;

/* Global values */
padding: inherit;
padding: initial;
padding: unset;
```

- Changing SVG Image Color by Pure CSS

```css
.calendar-svg {
  width: 30px;
  filter: invert(0.3) sepia(1) saturate(125) hue-rotate(195deg);
}
```

## Angular

- Using **Subject Observable** for saving the user data on tokenvalidate and login was creating problem because I was putting Subject on both places while declaring the observable. [Stackeoverflow](https://stackoverflow.com/questions/50099517/observable-next-is-not-a-function) answer explained here and It should be declared following:

```javascript
resultJob: Subject<string> = new BehaviorSubject<string>("PENDING");
```

- Task Board
  - **On Updating Progress to 100%**, I had to move the task card to the **Completed** board, so I used **BehaviourSubject** for listening to the action if Task Progress is **100%**.

  - **Progress Component** is the **3rd** child for the **Boards Component**, so I listened for the isTaskComplete getter method and if it is true, I am calling the **getProjectScheduler** method again for arranging the tasks in the boards.

  - In **Task Board Service**

    ```typescript
    isTaskComplete$: BehaviorSubject<Object> = new BehaviorSubject({
      task: '',
      complete: false
    });
    ```

  - In **Boards Component**

    ```typescript
    this.taskBoardService.getTaskComplete().subscribe(res => {
      // if task code is there
      if (res['task']) {
        this.getSchedulerAndCalendar();
      }
    });
    ```

### JavaScript

- Creating a CSV file in Javascript: [Link to the Post](https://code-maven.com/create-and-download-csv-with-javascript)
- For checking if any class exists on the element or not we can use `.includes()`

  ```javascript
  const element = docuemnt.getElementsByClassName('class');
  if (element.classList.includes('any-class')) {
    // do this
  }
  ```

# JavaScript

- For making a **NodeList** an **Array**

  ```javascript
  var nodesArray = [].slice.call(document.querySelectorAll('div'));
  ```

- For checking any **function execution time**, use something like this:

  ```javascript
  const t0 = performance.now();

  // function for which the time to be calculated
  const updatedTasks = recalculateFloat(gantt);

  const t1 = performance.now();
  console.log('Call to recalculateFloat took ' + (t1 - t0) + ' milliseconds.');
  ```

- For checking all the **Event Listeners** on the Page in **Google Chrome**:

  ```javascript
  const items = Array.prototype.slice
    .call(document.querySelectorAll('*'))
    .map(function(element) {
      const listeners = getEventListeners(element);
      return {
        element: element,
        listeners: Object.keys(listeners).map(function(k) {
          return { event: k, listeners: listeners[k] };
        })
      };
    })
    .filter(function(item) {
      return item.listeners.length;
    });
  ```

- For removing _duplicates_ from an _Array_

  ```javascript
  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
  ```

- For checking if an **Object** is **Empty** or not

  ```javascript
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  ```

- For removing the **truncated zeros** from the begining of a **Number**

  ```javascript
  var yourString = '00001';
  yourString = Number(yourString).toString(); // output => "1"
  ```

  - This method can also be applied for changing the percentage with decimal points

    ```javascript
    // input = 0.00, output = "0"
    // input = 1.31, output = "1.31"
    const number = Number(percent).toString();
    ```

- Use default arguments instead of short circuiting or conditionals

  Default arguments are often cleaner than short circuiting. Be aware that if you use them, your function will only provide default values for undefined arguments. Other "falsy" values such as '', "", false, null, 0, and NaN, will not be replaced by a default value.

  **Bad:**

  ```javascript
  function createMicrobrewery(name) {
    const breweryName = name || 'Hipster Brew Co.';
    // ...
  }
  ```

  **Good:**

  ```javascript
  function createMicrobrewery(name = 'Hipster Brew Co.') {
    // ...
  }
  ```

- Allowing only Integers Value in Input Type Number

  ```javascript
  doNotAllowDecimal(e) {
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }
  ```

# GitHub Repositories

- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
- [bxjs-weekly](https://github.com/BuildingXwithJS/bxjs-weekly)
- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)

# Articles

- [Javascript- Currying VS Partial Application](https://codeburst.io/javascript-currying-vs-partial-application-4db5b2442be8)
- [An Intro to Javascript for Experienced Programmers Who Could Use a Strong Dose of Fundamentals](https://medium.com/better-programming/an-intro-to-javascript-for-experienced-programmers-who-could-use-a-strong-dose-of-fundamentals-31535030616b)

# Websites

- [Javascript Info Website](https://javascript.info/)

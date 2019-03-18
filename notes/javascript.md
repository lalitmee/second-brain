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

- For checking all the Event Listeners on the Page in Google Chrome:

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

- For removing duplicates from an Array

  ```javascript
  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
  ```

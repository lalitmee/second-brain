# JavaScript

- For making a **NodeList** an **Array**

  ```javascript
  var nodesArray = [].slice.call(document.querySelectorAll('div'));
  ```

- For checking any **function execution time**, use something like this:

  ```javascript
  var t0 = performance.now();

  // function for which the time to be calculated
  const updatedTasks = recalculateFloat(gantt);

  var t1 = performance.now();
  console.log('Call to recalculateFloat took ' + (t1 - t0) + ' milliseconds.');
  ```

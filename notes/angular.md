# Angular Notes

- Add any **css** to the component tag from the component's css file

  ```css
  :host {
    display: block;
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: $default-background-color;
  }
  ```
  
- For adding **ngStyle** use this syntax:

  ```html
  <some-element [ngStyle]="{'font-style': styleExp}"></some-element>
  ```

# Angular Best Practices

## Must be Done

- Aliases for Imports

  Creating aliases for imports is a plus. We may use imports three folders deep sometimes, so the following import is not the ideal solution:

  ```typescript
  import { LoaderService } from '../../../loader/loader.service';
  ```

  Add the following piece of code into tsconfig.json file to make your imports short and well organized across the app:

  ```typescript
  {
    "compileOnSave": false,
    "compilerOptions": {
      removed for brevity,
      "paths": {
        "@app/*": ["app/*"],
        "@env/*": ["environments/*"]
      }
    }
  }
  ```

  When you’re done, these imports

  ```typescript
  import { LoaderService } from '../../../loader/loader.service';
  import { environment } from '../../environment’;
  ```

  should be refactored into these:

  ```typescript
  import { LoaderService } from '@app/loader/loader.service';
  import { environment } from '@env/environment’;
  ```

## Articles

- [Code Maze Article](https://code-maze.com/angular-best-practices)
- [FreeCodeCamp Article](https://medium.freecodecamp.org/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f)
- [Noteworthy Medium Article](https://blog.usejournal.com/best-practices-for-writing-angular-6-apps-e6d3c0f6c7c1)
- [Exploring the Various Decorators in Angular](https://netbasal.com/exploring-the-various-decorators-in-angular-b208875b207c)

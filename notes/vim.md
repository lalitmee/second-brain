# Vim Notes

#### Productivity

- For making **ctags** in the current directory and ignore **node_modules** and
  saving tags in **.git** folder

  ```
  ctags -R --exclude=.git -exclude=node_modules -f ./git/tags .
  ```

# Jquery-prevent-backspace
Prevent accidental back navigation for hitting the backspace key.
The plugin basically prevents the default action of the key press event.
Yet, it allows input elements to be erasable with the backspace key.

## Usage

**For the whole document**
```js
  $(document).preventBackspace();
```

**For a particular section of your page**
```js
  $("nav").preventBackspace();
```

**To undo the plugin behaviour**
```js
  $(element).preventBackspace('destroy');
```

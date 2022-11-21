Convert a JavaScript object to CSS string. Idea from [here](https://github.com/natew/object-to-css).
## usage

```js
let style = document.createElement("style");
style.textContent = objectToCSS({
  "*, :before, :after": {
    boxSizing: "border-box",
  },
  body: {
    margin: 0,
  },
  hr {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible",
    borderTopWidth: "1px",
    margin: 0,
  },
  ".awesome-class-name > div": {
    width: 35,
    height: 35,
    animation: "rotate 1.0s infinite linear",
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(360deg)",
    }
  },
});
document.body.append(style);
```
↓
```html
<style>
  *, :before, :after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-top-width: 1px;
    margin: 0;
  }
  .awesome-class-name > div {
    width: 35px;
    height: 35px;
    animation: "rotate 1.0s infinite linear";
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
```

## note

`content` propety needs double quotes. This means that escaping must be required in JavaScript objects.

ex.
```js
objectToCSS({
  "div:before": {
    content: "before" /* -> 'content: before;' not work */
  }
})
```
This is not interpreted as css.
```js
objectToCSS({
  "div:before": {
    content: "\"before\"" /* -> 'content: "before";' work */
  }
})
```
This is correct.

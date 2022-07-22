# defaultjs-extdom


** Table of Contents **

- [defaultjs-extdom](#defaultjs-extdom)
  - [Intro](#intro)
  - [How to install](#how-to-install)
    - [Browser](#browser)
    - [Nodejs/NPM](#nodejsnpm)
  - [API Documentation](#api-documentation)
    - [additional query support](#additional-query-support)
      - [pseudo selector `:parent(selector)`](#pseudo-selector-parentselector)
      - [`find(selector [, selector, ...])`](#findselector--selector-)
      - [`is(selector [, selector, ...])`](#isselector--selector-)
      - [`parent(selector, ignoreShadowRoot)`](#parentselector-ignoreshadowroot)
      - [`parents(selector)`](#parentsselector)
      - [`selector()`](#selector)
    - [additional attribute support](#additional-attribute-support)
      - [`attr(name, value)`](#attrname-value)
    - [additional class support](#additional-class-support)
      - [`addClass(classname [, classname, ...])`](#addclassclassname--classname-)
      - [`removeClass(classname [, classname, ...])`](#removeclassclassname--classname-)
      - [`toggleClass(classname [, classname, ...])`](#toggleclassclassname--classname-)
    - [additional event support](#additional-event-support)
      - [`on(eventname, callback, option)`](#oneventname-callback-option)
      - [`removeOn(callback, eventname, capture)`](#removeoncallback-eventname-capture)
      - [`trigger(event [,delegateEvent] [, data])`](#triggerevent-delegateevent--data)
    - [additional manipulation support](#additional-manipulation-support)
      - [`empty()`](#empty)
      - [`content()`](#content)
      - [`html(option)`](#htmloption)
      - [`append(option)`](#appendoption)
      - [`preppend(option)`](#preppendoption)
      - [`replace(a [, b])`](#replacea--b)
      - [`after(element)`](#afterelement)
      - [`before(element)`](#beforeelement)
    - [show / hide support](#show--hide-support)
      - [`show()`](#show)
      - [`hide()`](#hide)
      - [`toggleShow()`](#toggleshow)
    - [Extended functiality of `NodeList` and `HTMLCollection`](#extended-functiality-of-nodelist-and-htmlcollection)
      - [`forEach((element, index)=>{})`](#foreachelement-index)
      - [`map((element)=>{})`](#mapelement)
      - [`filter((element)=>{})`](#filterelement)
      - [`first()`](#first)
      - [`last()`](#last)
      - [delegate function call](#delegate-function-call)
  - [License](#license)

## Intro

This lib extents the browser dom api, provide sorter function names and easier solution to process data.

## How to install

### Browser

```html
<script type="text/javascript" src="defaultjs-extdom.min.js"></script>
```

### Nodejs/NPM

```console
npm install @default-js/defaultjs-extdom@latest
```

## API Documentation

### additional query support

#### pseudo selector `:parent(selector)`

This pseudo selector provide the capability to select a parent. It can be combined with with all other selectors. The pseudo selector works in `find`, `parent` and `parents`, only.

Param       | Required | Default | Description
------------|----------|---------|--------
`selector`  |          |         | one or more standard selector query

```javascript
element.find("div :parent()");
// the same like
find("div").first().parent();

element.find("div :parent(body)");
// the same like
find("div").first().parent("body");
```

#### `find(selector [, selector, ...])`

sort function for `querySelectorAll`.

Param       | Required | Default | Description
------------|----------|---------|--------
`selector`  | x        |         | one or more standard selector query

**@return** `NodeList`

```javascript
find("div");
// is the same like
document.querySelectorAll("div");

element.find("div")
// is the same like
element.querySelectorAll("div");
```

#### `is(selector [, selector, ...])`

sort function for `matches`.

Param       | Required | Default | Description
------------|----------|---------|--------
`selector`  | x        |         | one or more standard selector query

**@return** `boolean`

```javascript
const div = document.querySelectorAll("div");
div.is("div");
// is the same like
div.matches("div");
```

#### `parent(selector, ignoreShadowRoot)`

This function provide a parent element by a selector

Param             | Required | Default | Description
------------------|----------|---------|--------
`selector`        |          |         | standard selector query
`ignoreShadowRoot`|          | false   | experimentel

**@return** `element` or null

```javascript
element.parent() == element.parentElement;
element.parent("body") == document.body;
element.parent("div"); // result: first parent div element
```

#### `parents(selector)`

This function provide a `NodeList` with all parents of element by a selector

Param             | Required | Default | Description
------------------|----------|---------|--------
`selector`        |          |         | standard selector query

**@return** `NodeList`

```javascript
element.parents(); // result: all parent elements
element.parents("div"); // result: all parent div element
```

#### `selector()`

This function return the selector by current element.

Param             | Required | Default | Description
------------------|----------|---------|--------

**@return** `string`

```javascript
element.selector(); // result: the selector of element
// body -> div -> span
span.selector(); // result: div -> span
```

### additional attribute support

#### `attr(name, value)`

This function provide the capability to get and set an attribute. Sort for `getAttribute`, `setAttribute` and `removeAttribute`.

Param   | Required | Default | Description
--------|----------|---------|--------
`name`  |          |         | attribute name
`value` |          |         | attribute value

**@return** `object`, `string` or `undefined`

```javascript
element.attr(); // return an object with all attributes as properties
element.attr("id"); // return the value of attribute name; 
//the same like 
element.getAttribute("id");

element.attr("id", "value"); // set attribute with given value
//the same like 
element.setAttribute("id", "value");

element.attr("id", undefined); // remove the attribute
element.attr("id", null); // remove the attribute
//the same like 
element.removeAttribute("id");
```

### additional class support

#### `addClass(classname [, classname, ...])`

This function add classname(s). Same like `classList.add(classname)`.

Param       | Required | Default | Description
------------|----------|---------|--------
`classname` |          |         | one or more classname

> **Info:** Classname can also be a string of space-sapareted classnames

```javascript
element.addClass("class"); 
element.addClass("class-1 class-2"); 
element.addClass("class-1", "class-2"); 
element.addClass("class-1 class-2", "class-3"); 
element.addClass("class-1 class-2", "class-3 class-4"); 
```

#### `removeClass(classname [, classname, ...])`

This function remove classname(s). Same like `classList.remove(classname)`.

Param       | Required | Default | Description
------------|----------|---------|--------
`classname` |          |         | one or more classname

> **Info:** Classname can also be a string of space-sapareted classnames

```javascript
element.removeClass("class"); 
element.removeClass("class-1 class-2"); 
element.removeClass("class-1", "class-2"); 
element.removeClass("class-1 class-2", "class-3"); 
element.removeClass("class-1 class-2", "class-3 class-4"); 
```

#### `toggleClass(classname [, classname, ...])`

This function toggle classname(s). Same like `classList.toggle(classname)`. It add or remove classname(s), depends on if classname präsent or not.

Param       | Required | Default | Description
------------|----------|---------|--------
`classname` |          |         | one or more classname

> **Info:** Classname can also be a string of space-sapareted classnames

```javascript
element.toggleClass("class"); 
element.toggleClass("class-1 class-2"); 
element.toggleClass("class-1", "class-2"); 
element.toggleClass("class-1 class-2", "class-3"); 
element.toggleClass("class-1 class-2", "class-3 class-4"); 
```

### additional event support

#### `on(eventname, callback, option)`

This function is sort for `addEventListener` and provide more functions

Param       | Required | Default | Description
------------|----------|---------|--------
`eventname` | x        |         | `string` or `array` of event name(s)
`callback`  | x        |         | `function`
`option`    |          |         | `boolean` for capture event or `object` like `{ capture: false, once: false, passive: false }`

> **Info:** `eventname` can also be a string of space-sapareted event names

```javascript
element.on("click", (event) => {});
element.on("click focus", (event) => {});
element.on(["click","focus"], (event) => {});
element.on("click", (event) => {}, true);
element.on("click", (event) => {}, { capture: true, once: true, passive: true });
```

#### `removeOn(callback, eventname, capture)`

This function is sort for `removeEventListener`.

Param       | Required | Default | Description
------------|----------|---------|--------
`callback`  | x        |         | `function`
`eventname` |          |         | `string` or `array` of event name(s)
`capture`   |          |         | `boolean`

```javascript
const handle = (event) => {};
element.on("click", handle);
element.on("click focus", handle);

element.removeOn(handle, "click"); //removes handle only for click event
element.removeOn(handle, "fokus");//removes handle only for click event

element.on("click focus", handle);
element.removeOn(handle);//removes handle for all events
```

#### `trigger(event [,delegateEvent] [, data])`

This function is sort for `removeEventListener`.

Param           | Required | Default | Description
----------------|----------|---------|--------
`event`         | x        |         | `function`
`delegateEvent` |          |         | `event` to be delegate `data`          |          |         | `boolean`

```javascript
element.trigger("click");
element.trigger("click", {name: "my-data"});

element.on("click", (event) => {
  element.trigger("change", event);
  element.trigger("change", event, {name: "my-data"});
});
```

### additional manipulation support

#### `empty()`

This function removes all nodes of element.

Param | Required | Default | Description
------|----------|---------|--------

```javascript
element.empty();
```

#### `content()`

This function equal to `childNodes`.

Param           | Required | Default | Description
----------------|----------|---------|--------

```javascript
element.content() == event.childNodes;
```

#### `html(option)`

Param           | Required | Default | Description
----------------|----------|---------|--------
`option`        |          |         | `boolean`, `string`, `Node`, `NodeList` or `HTMLCollection`

- **`option` is not set, `undefined`, `null` or `false`**

  The function returns the inner html like `innerHtml`

- **`option` is `true`**
  
  The function returns the outer html like `outerHtml`

- **`option` is `string`, `Node`, `NodeList` or `HTMLCollection`**

  The function cleanup content and append option.

```javascript
element.html();
element.html(true);
element.html("<div></div>");
element.html(otherElement);
element.html(nodeList);
element.html(htmlCollection);
```

#### `append(option)`

This function append element(s).

Param           | Required | Default | Description
----------------|----------|---------|--------
`option`        |          |         | `string`, `Node`, `NodeList` or `HTMLCollection`

```javascript
element.append("<div></div>");
element.append(otherElement);
element.append(nodeList);
element.append(htmlCollection);
```

#### `preppend(option)`

This function preppend element(s).

Param           | Required | Default | Description
----------------|----------|---------|--------
`option`        |          |         | `string`, `Node`, `NodeList` or `HTMLCollection`

```javascript
element.preppend("<div></div>");
element.preppend(otherElement);
element.preppend(nodeList);
element.preppend(htmlCollection);
```

#### `replace(a [, b])`

This function repace a element.

Param  | Required | Default | Description
-------|----------|---------|--------
`a`    | x        |         | `Node`
`b`    |          |         | `Node`

```javascript
element.replace(otherElement); // element would be replaced by otherElement
parent.preppend(elementA, elementB);// elementA must be child of parent, than elementA would be replaced by elementB
```

#### `after(element)`

This function insert element after.

Param     | Required | Default | Description
----------|----------|---------|--------
`element` | x        |         | `string`, `Node`, `NodeList` or `HTMLCollection`

```javascript
element.after("<div></div>");
element.after(otherElement);
element.after(nodeList);
element.after(htmlCollection);
```

#### `before(element)`

This function insert element before.

Param     | Required | Default | Description
----------|----------|---------|--------
`element` | x        |         | `string`, `Node`, `NodeList` or `HTMLCollection`

```javascript
element.before("<div></div>");
element.before(otherElement);
element.before(nodeList);
element.before(htmlCollection);
```

### show / hide support

#### `show()`

This function showing an element.

Param     | Required | Default | Description
----------|----------|---------|--------

```javascript
element.show();
```

#### `hide()`

This function hiding an element.

Param     | Required | Default | Description
----------|----------|---------|--------

```javascript
element.hide();
```

#### `toggleShow()`

This function switching between `show()` and `hide()`

Param     | Required | Default | Description
----------|----------|---------|--------

```javascript
element.toggleShow();
```

### Extended functiality of `NodeList` and `HTMLCollection`

Both classes `NodeList` and `HTMLCollection` has more funtionality by adding same functions of `Array` and more.

#### `forEach((element, index)=>{})`

See `Array.prototype.foreach`;

#### `map((element)=>{})`

See `Array.prototype.map`;

#### `filter((element)=>{})`

See `Array.prototype.filter`;

#### `first()`

Retures the first element.

Param     | Required | Default | Description
----------|----------|---------|--------

```javascript
nodeList.first();
find("div").first(); //find returns a NodeList with all div's and by .first() returns only the first element
```

#### `last()`

Retures the last element.

Param     | Required | Default | Description
----------|----------|---------|--------

```javascript
nodeList.last();
find("div").first(); //find returns a NodeList with all div's and by .last() returns only the last element
```

#### delegate function call

At `NodeList` and `HTMLCollection` you can call any function of `HTMLElement` and `HTMLInputElement` except functions there availabe on `NodeList` or `HTMLCollection`.

```javascript
nodeList.show();
// same like
for(element of nodeList)
  element.show();
```

## License

[MIT](LICENSE)

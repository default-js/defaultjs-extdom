# defaultjs-extdom

Extends the native browser dom api with shorter, chainable functions - directly on the
native prototypes, without a wrapper object.

**Table of Contents:**

- [Intro](#intro)
- [How to install](#how-to-install)
- [Concepts](#concepts)
  - [No wrapper](#no-wrapper)
  - [Where the functions are available](#where-the-functions-are-available)
  - [Lists delegate](#lists-delegate)
  - [Errors](#errors)
- [Global functions](#global-functions)
  - [`create(html, asTemplate)`](#createhtml-astemplate)
  - [`script(file, target)`](#scriptfile-target)
  - [`defaultjs.extdom`](#defaultjsextdom)
- [Query](#query)
  - [pseudo selector `:parent(selector)`](#pseudo-selector-parentselector)
  - [`find(selector, ...)`](#findselector-)
  - [`is(selector, ...)`](#isselector-)
  - [`parent(selector, ignoreShadowRoot)`](#parentselector-ignoreshadowroot)
  - [`parents(selector, ignoreShadowRoot)`](#parentsselector-ignoreshadowroot)
  - [`closest(selector)` / `closests(selector)`](#closestselector--closestsselector)
  - [`nested(selector)`](#nestedselector)
  - [`selector()`](#selector)
- [Attributes](#attributes)
  - [`attr(name, value)`](#attrname-value)
- [Data](#data)
  - [`data(name, value)`](#dataname-value)
- [Classes](#classes)
  - [`addClass` / `removeClass` / `toggleClass`](#addclass--removeclass--toggleclass)
- [Events](#events)
  - [`on(events, selector, handle, options)`](#onevents-selector-handle-options)
  - [`removeOn(handle, events)`](#removeonhandle-events)
  - [`trigger(timeout, type, delegatedEvent, data)`](#triggertimeout-type-delegatedevent-data)
- [Content manipulation](#content-manipulation)
  - [`empty()`](#empty)
  - [`content()`](#content)
  - [`html(content)`](#htmlcontent)
  - [`append` / `prepend` / `before` / `after`](#append--prepend--before--after)
  - [`replace(content)`](#replacecontent)
- [Visibility](#visibility)
  - [`show()` / `hide()` / `toggleShow()`](#show--hide--toggleshow)
- [Form values](#form-values)
  - [`val(value)`](#valvalue)
- [Ready event](#ready-event)
  - [`ready(callback, once)`](#readycallback-once)
- [Lists: `NodeList` and `HTMLCollection`](#lists-nodelist-and-htmlcollection)
  - [Array functions](#array-functions)
  - [`first()` / `last()`](#first--last)
  - [`applyTo(calling, ...)`](#applytocalling-)
  - [`val(value)` on a list](#valvalue-on-a-list)
  - [`NodeList.from(...)` / `HTMLCollection.from(...)`](#nodelistfrom--htmlcollectionfrom)
  - [Delegated calls](#delegated-calls)
- [License](#license)

## Intro

This lib extends the browser dom api. It provides shorter function names, accepts html
strings wherever nodes are accepted, and makes lists behave like arrays - so working
with the dom needs less boilerplate.

```javascript
find("div.item")
    .filter((node) => node.attr("data-active") != null)
    .addClass("highlight");
```

## How to install

### Browser

```html
<script type="text/javascript" src="defaultjs-extdom.min.js"></script>
```

### Nodejs/NPM

```console
npm install @default-js/defaultjs-extdom@latest
```

```javascript
import "@default-js/defaultjs-extdom";
```

Importing the lib is enough - it extends the native prototypes on load, there is
nothing to instantiate.

## Concepts

### No wrapper

The functions are added to the native prototypes. Every node, list and the document
itself gains them, and native and added functions can be mixed freely.

```javascript
document.querySelector("div").addClass("active"); // native query, added function
find("div").first().scrollIntoView();            // added query, native function
```

Functions that only act - like `addClass` or `append` - return the node they were
called on, so calls can be chained.

### Where the functions are available

The functions are added to the type they need, so a function is available on
everything inheriting from that type.

Type                  | Functions
----------------------|----------
`EventTarget`         | `on`, `removeOn`, `trigger`
`Node`                | `data`, `empty`, `content`, `html`, `append`, `prepend`, `before`, `after`, `replace`
`Element`             | `find`, `is`, `parent`, `parents`, `closest`, `closests`, `nested`, `selector`, `attr`
`Document`            | `find`, `is`, `parent`, `parents`, `closest`, `closests`, `nested`, `selector`, `ready`
`DocumentFragment`    | `find`, `is`, `parent`, `parents`, `closest`, `closests`, `nested`, `selector`, and the content functions
`HTMLElement`         | `addClass`, `removeClass`, `toggleClass`, `show`, `hide`, `toggleShow`
`HTMLInputElement`    | `val`
`HTMLSelectElement`   | `val`
`HTMLTextAreaElement` | `val`
`NodeList`            | array functions, `first`, `last`, `applyTo`, `val`, delegated calls
`HTMLCollection`      | array functions, `first`, `last`, `applyTo`, `val`, delegated calls

A `ShadowRoot` is a `DocumentFragment` and therefore gets its functions.

### Lists delegate

A `NodeList` or `HTMLCollection` forwards any function of its items. Calling it applies
the function to every item and collects the results - see
[Delegated calls](#delegated-calls).

### Errors

Invalid arguments throw instead of failing silently. A selector that matches nothing is
not an error and returns an empty list, `null` or `undefined` - but a selector that is
not a string, an empty class name or content that is not content throws.

## Global functions

These are available on the global object, without a node to call them on.

Function                  | Description
--------------------------|------------
`find(selector, ...)`     | short for `document.find(...)`, see [`find`](#findselector-)
`ready(callback, once)`   | short for `document.ready(...)`, see [`ready`](#readycallback-once)

### `create(html, asTemplate)`

Parses an html string into nodes.

**Parameters:**

- `html` *(string, required)* - the markup to parse
- `asTemplate` *(boolean)* - return the `template` element instead of its content

**Returns** `NodeList` of the parsed nodes, or the `HTMLTemplateElement` when
`asTemplate` is true

**Throws** when `html` is not a string

```javascript
create("<div></div>");                       // NodeList with one div
create("<div></div><span></span>");          // NodeList with two nodes
create("<div></div>").first();               // the div itself
create("<div></div>", true);                 // the template element
```

### `script(file, target)`

Loads one or more scripts.

**Parameters:**

- `file` *(string | string[], required)* - the src of the script, or a list of them
- `target` *(Node)* - where to append the script tags, `document.body` by default

**Returns** `Promise` resolving once the script is loaded, or all of them for a list

```javascript
await script("lib.js");
await script(["a.js", "b.js"]);
await script("lib.js", document.head);
```

### `defaultjs.extdom`

The namespace of the lib on the global object.

Property      | Description
--------------|------------
`VERSION`     | the version of the lib
`READYEVENT`  | the event type of the ready event, `"defaultjs--event--ready"`

```javascript
document.on(defaultjs.extdom.READYEVENT, () => {});
```

## Query

### pseudo selector `:parent(selector)`

Selects a parent within a query. It works in [`find`](#findselector-) only, and can
be combined with any other selector before and behind it.

Form                  | Result
----------------------|-------
`:parent`             | the parent node
`:parent()`           | the parent node
`:parent(selector)`   | the next ancestor matching the selector

The selector inside the brackets may contain brackets and quotes itself, and may be
quoted as a whole.

```javascript
element.find("div :parent");                   // parents of all divs
element.find("div :parent(body)");             // the body, coming from a div
element.find(":parent(.card) .title");         // titles within the closest card
element.find(":parent(div:has(p):not(span))"); // nested brackets are fine
element.find(":parent(\".card\")");            // quoting is optional
```

### `find(selector, ...)`

Searches nodes, short for `querySelectorAll`.

**Parameters:**

- `selector` *(string, one or more)* - a selector, may be a comma separated list.
  Empty selectors are skipped.

**Returns** `NodeList` of the nodes found, empty when there are none. Results of
several selectors are collected in the order given, duplicates are not removed.

**Throws** when a selector is not a string

```javascript
find("div");                    // like document.querySelectorAll("div")
element.find("div");            // like element.querySelectorAll("div")
element.find("div", "span");    // both queries, one result list
element.find("div, span");      // a selector list, handled by the browser
```

### `is(selector, ...)`

Checks whether the node matches, short for `matches`.

**Parameters:**

- `selector` *(string | string[], one or more)* - the selectors to check

**Returns** `boolean`, true when at least one selector matches. A `Document` and a
`DocumentFragment` never match.

```javascript
element.is("div");
element.is("div", "span");
element.is(["div", "span"]);
```

### `parent(selector, ignoreShadowRoot)`

The parent node, or the next ancestor matching a selector.

**Parameters:**

- `selector` *(string)* - when given, walk up until an ancestor matches
- `ignoreShadowRoot` *(boolean, default false)* - continue at the host of a shadow root
  instead of stopping there. May also be passed as the only argument.

**Returns** `Node` or `null` when there is none

**Throws** when the selector is invalid

```javascript
element.parent();          // the parent node
element.parent("div");     // the closest ancestor div
element.parent(".missing"); // null
element.parent(true);      // the parent, crossing a shadow root
```

### `parents(selector, ignoreShadowRoot)`

All ancestors, from the nearest upwards. With a selector, only the matching ones.

**Returns** `NodeList`, empty when there are none

```javascript
element.parents();      // all ancestors
element.parents("div"); // all ancestor divs
```

### `closest(selector)` / `closests(selector)`

Searches the nodes closest to this one by their distance in the tree. The subtree of
the node is searched first, then the subtree of the parent, and so on upwards - the
search widens in rings until a level has matches.

> **Note:** This is not the native `closest()`. Distance counts in both directions
> here, so the result may be a child, a sibling, a cousin or an ancestor. The native
> `Element.closest()` is not changed by this lib and still walks up only.

**Returns** `closests` a `NodeList` of the matches of that level, `closest` the first
of them or `undefined`

```javascript
element.closest(".item");  // the nearest matching node
element.closests(".item"); // all matches on that level
```

### `nested(selector)`

Searches the selector at the node, below it, or above it - in that order. Unlike
`closests` it never looks into the subtree of an ancestor, so a sibling is not found.

**Returns** `NodeList`, empty when there is no match

```javascript
element.nested(".item");
```

### `selector()`

Builds a selector addressing this node. An id ends the selector, otherwise the path
continues at the parent and a position is added when there are sibling elements.

**Returns** `string`, or `undefined` for a `Document` or `DocumentFragment`

```javascript
element.selector();          // e.g. "#app > div:nth-child(2) > span"
find(element.selector());    // finds the element again
```

## Attributes

### `attr(name, value)`

Gets or sets attributes.

**Parameters:**

- `name` *(string)* - the attribute name
- `value` *(any)* - the new value, `null` or `undefined` removes the attribute

**Returns** all attributes as an object when called without arguments, the value as a
`string` (or `null` when absent) for a name, otherwise the node itself

```javascript
element.attr();                 // { id: "app", class: "box" }
element.attr("id");             // "app"
element.attr("id", "value");    // sets, returns the element
element.attr("id", null);       // removes
element.attr("id", undefined);  // removes

element.attr("tabindex", 0);    // sets "0" - only null and undefined remove
element.attr("data-on", false); // sets "false"
```

## Data

### `data(name, value)`

Gets or sets the data of a node. The first call reads the `data-` attributes into a
cache kept on the node.

> **Note:** The cache is detached from the dom. Later attribute changes are not seen
> and written values are not reflected back into attributes. `data(true)` reads the
> attributes again and merges them in - a value removed from the dom stays in the cache.

**Parameters:**

- `name` *(string | boolean)* - a name to read or write, or a boolean to read all data,
  reloading the attributes first when true
- `value` *(any)* - the new value, `null` or `undefined` removes the name

**Returns** all data as an object for no argument or a boolean, the value for a name,
otherwise the node itself

**Throws** when the first argument is neither a string nor a boolean

```javascript
element.data();               // { myValue: "1" } from data-my-value="1"
element.data("myValue");      // "1"
element.data("other", 42);    // sets, returns the element
element.data("other", null);  // removes
element.data(true);           // reloads the data- attributes and returns all data
```

> **Note:** Names are camelCase, as they come from `dataset` - `data-my-value` is read
> as `myValue`.

## Classes

### `addClass` / `removeClass` / `toggleClass`

Adds, removes or toggles class names.

**Parameters:**

- `classes` *(string | string[], one or more)* - names, whitespace separated lists of
  names, or arrays of both

**Returns** the element

**Throws** when a name is empty or not a string. `toggleClass` does not support the
force parameter of `classList.toggle` - a boolean is not a class name and throws.

```javascript
element.addClass("class-1");
element.addClass("class-1 class-2");
element.addClass("class-1", "class-2");
element.addClass(["class-1", "class-2 class-3"]);
element.removeClass("class-1 class-2");
element.toggleClass("class-1");
```

## Events

### `on(events, selector, handle, options)`

Adds a handle to one or more events, short for `addEventListener` with a few additions.

**Parameters:**

- `events` *(string | string[], required)* - event types, separated by whitespaces,
  commas or both. Entries of an array may hold several types as well.
- `selector` *(string)* - only call the handle when the target of the event matches
- `handle` *(function, required)* - called with the event
- `options` *(boolean | object)* - a boolean is taken as `capture`, otherwise the
  options of `addEventListener`

**Returns** the node

**Throws** with less than two arguments or invalid event types

```javascript
element.on("click", (event) => {});
element.on("click focus", (event) => {});
element.on("click, focus", (event) => {});
element.on(["click", "focus blur"], (event) => {});

element.on("click", ".button", (event) => {});          // only for matching targets
element.on("click", (event) => {}, true);               // capture
element.on("click", (event) => {}, { once: true });
```

> **Note:** With a selector and `once` together, the handle waits for a matching
> event - it is not consumed by an event the selector did not match.

### `removeOn(handle, events)`

Removes a handle, short for `removeEventListener`. A handle registered by several calls
of `on` is removed from all of them.

**Parameters:**

- `handle` *(function, required)* - the function given to `on`
- `events` *(string | string[])* - the events to remove it from, all of them when
  omitted

**Returns** the node

```javascript
const handle = (event) => {};
element.on("click focus", handle);

element.removeOn(handle, "click"); // only for click
element.removeOn(handle);          // for all its events
```

### `trigger(timeout, type, delegatedEvent, data)`

Dispatches a bubbling, cancelable and composed `CustomEvent`.

**Parameters:**

- `timeout` *(number)* - delay the event by that many milliseconds. A pending event of
  the same type is replaced, so a repeatedly triggered event is dispatched once after
  things came to rest.
- `type` *(string, required)* - the event type
- `delegatedEvent` *(Event)* - the event this one is triggered for, available as
  `event.delegatedEvent`
- `data` *(any, one or more)* - becomes `event.detail`. One value is taken as it is,
  several become an array of them.

**Returns** the node

```javascript
element.trigger("click");
element.trigger("change", { name: "my-data" });
element.trigger("change", "a", "b");        // detail is ["a", "b"]
element.trigger(100, "search");             // debounced by 100ms

element.on("click", (event) => {
    element.trigger("change", event);        // delegating the original event
});
```

## Content manipulation

All content functions take **content**, which is any mix of:

- a `string` of html, parsed into nodes
- a `Node`
- a `NodeList`, `HTMLCollection` or an array of any of these

```javascript
element.append("<div></div>", otherNode, nodeList, ["<span></span>", node]);
```

Empty strings are valid content and simply add nothing, `"   "` becomes a text node.
Anything that is not content throws.

### `empty()`

Removes all child nodes.

**Returns** the node

### `content()`

**Returns** the live `NodeList` of child nodes, same as `childNodes`

### `html(content)`

Gets or sets the markup.

**Parameters:**

- `content` *(boolean | content)* - `true` returns the outer html, `false` the inner
  html, any other content replaces all children

**Returns** the markup as a `string`, or the node when content was set

**Throws** when the content is invalid - the existing content is kept in that case

```javascript
element.html();                  // innerHTML
element.html(true);              // outerHTML
element.html("<div></div>");     // replaces the content
element.html(node, "<span></span>");
```

### `append` / `prepend` / `before` / `after`

Inserts content as last children, as first children, before the node or after it.

**Returns** the node

**Throws** when the content is invalid, and `before` / `after` when the node has no
parent

```javascript
element.append("<div></div>");
element.prepend(otherNode);
element.before(nodeList);
element.after("<div></div>", otherNode);
```

### `replace(content)`

Replaces a node by content.

**Parameters:**

- with one argument: the content replacing **this** node within its parent
- with more: the first one - a child of this node - is replaced by the content
  following it

**Returns** the node it was called on

```javascript
element.replace(otherNode);          // element is replaced
element.replace("<div></div>");
parent.replace(child, "<div></div>", otherNode); // child is replaced by both
```

## Visibility

### `show()` / `hide()` / `toggleShow()`

Shows or hides an element by its inline `display`.

**Returns** the element

> **Note:** The display to restore is captured on the first `show` or `hide` and kept
> from then on. Only an inline `display: none` counts as hidden, so an element hidden
> by a css rule is hidden inline first before it shows.

```javascript
element.hide();       // display: none
element.show();       // back to the captured display
element.toggleShow();
```

## Form values

### `val(value)`

Gets or sets the value of a form field. Available on `input`, `select` and `textarea`.

**Returns** the value when called without arguments, otherwise the element

The value depends on the field:

- **`select`** - reads an array of the values of all selected options, and takes a value
  or an array of them to select. Triggers `changed`.
- **`input[type=checkbox]`** - reads the checked state, or the value when it is checked
  and a `value` attribute is set. Takes a boolean, a string or an array of strings, and
  is checked when its value is among them. Triggers `changed`.
- **`input[type=radio]`** - reads the value, or true when checked without a `value`
  attribute, and `undefined` when not checked. Takes the same as a checkbox. Triggers
  `changed`.
- **every other input and `textarea`** - reads and writes the value. Triggers `input`.

> **Note:** An unchecked radio returns `undefined`, not `false` - all radios of a group
> share one name and only the selected one carries a value. That is what keeps the
> unchecked ones from overwriting the value of their group in [`val()` on a
> list](#valvalue-on-a-list).

```javascript
input.val();                  // "text"
input.val("new");             // sets and triggers input

select.val();                 // ["option-1", "option-2"]
select.val(["option-1"]);

checkbox.val();               // true / false
checkbox.val(true);
radio.val("radio-value");     // checks the radio with that value
```

## Ready event

### `ready(callback, once)`

Registers a function for the ready event of the document, triggered once the dom is
parsed. A function registered afterwards still runs, as the event is triggered again
when the document is already complete.

**Parameters:**

- `callback` *(function, required)* - called on the ready event
- `once` *(boolean)* - remove the callback after the next ready event

**Returns** the document

```javascript
ready(() => {});                  // global short form
document.ready(() => {});
document.ready(() => {}, true);   // only once
```

> **Note:** A late registration triggers the event for every ready callback, so
> callbacks registered earlier run again. Use `once` when a callback must not repeat.

## Lists: `NodeList` and `HTMLCollection`

Both types get array functions, the functions below, and forward the functions of their
items.

### Array functions

`forEach`, `map`, `filter`, `some`, `every`, `reduce`, `includes` and `indexOf` behave
like their `Array` counterparts.

The list is copied before iterating, so items may be moved or removed while iterating a
live `HTMLCollection` without skipping any.

> **Note:** `filter` keeps the type of the list - a `NodeList` returns a `NodeList` -
> so a filtered list can be used like any other. `map` returns an `Array`, as its
> results are not nodes anymore.

```javascript
find("div").forEach((node) => node.addClass("seen"));
find("div").map((node) => node.attr("id"));            // Array of ids
find("div").filter((node) => node.is(".active"));      // NodeList
find("div").filter((node) => node.is(".active")).addClass("x"); // still chainable
find("div").some((node) => node.is(".active"));        // boolean
```

### `first()` / `last()`

**Returns** the first or last item, `undefined` when the list is empty

```javascript
find("div").first();
find("div").last();
```

### `applyTo(calling, ...)`

Applies a function or a method to each item and collects the results, skipping `null`
results.

**Parameters:**

- `calling` *(function | string, required)* - a function called with the item followed
  by the extra arguments, or the name of a method to call on each item
- further arguments are passed on

**Returns** `Array` of the collected results

```javascript
list.applyTo((node) => node.tagName);        // ["DIV", "SPAN"]
list.applyTo((node, c) => node.addClass(c), "active");
list.applyTo("is", ".active");               // [true, false]
```

### `val(value)` on a list

Reads or writes the values of all items.

**Returns** without arguments a `Map` of the values, keyed by the `name`, `id` or
`selector()` of each item - items without a value are left out. With arguments the
value is set on every item and the list is returned.

```javascript
const values = find("form input, form select").val();
values.get("username");

find("form input").val("");   // clears all inputs
```

### `NodeList.from(...)` / `HTMLCollection.from(...)`

Builds a list from nodes, other lists and arrays of them. Anything that is not a
matching item is left out. The result is a plain list, not a live one.

```javascript
NodeList.from(node);
NodeList.from(node, otherNode);
NodeList.from(nodeList, [node, otherNode]);
HTMLCollection.from(element);
```

### Delegated calls

Any function of the items can be called on the list. It is applied to every item and
the results are collected: nodes come back as a list, other values as an array, and
nothing at all as `undefined`.

Functions of the list itself win - `filter` on a list is the list function, not a
delegated one.

```javascript
find("div").addClass("active");   // adds the class to every div
find("div").hide();               // hides every div
find("div").find("span");         // all spans within all divs, as one NodeList
find("input").attr("disabled");   // Array of the attribute values
```

## License

[MIT](LICENSE)

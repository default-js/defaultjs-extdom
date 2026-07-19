# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-07-19

A rework of the whole `src` tree: bugs fixed, input validation made strict and
consistent, the api rounded off, and everything covered by tests and documentation.
The test suite grew from 107 to 212 specs.

### Breaking

- **The ready event was renamed** from `"ready"` to `"defaultjs--event--ready"`. Code
  using `document.ready(...)` is unaffected. Code listening directly, like
  `document.on("ready", ...)`, has to use the new type - available as
  `defaultjs.extdom.READYEVENT`.
- **`removeOn` lost its third parameter.** The signature is now
  `removeOn(handle, events)`, the `capture` argument is gone - the options a listener
  was registered with are remembered and used to remove it.
- **`filter()` on a `NodeList` or `HTMLCollection` returns a list of the same type**
  instead of an `Array`, so the result stays chainable. Code relying on `Array`
  members of the result has to convert it with `Array.from(...)`.
- **`toggleClass` no longer supports the force parameter** of `classList.toggle`. A
  boolean is not a class name and throws. Previously `toggleClass("a", true)` silently
  added a class named `"true"`.
- **`textarea.val(value)` now triggers an `input` event**, like every other field. The
  textarea used its own value handling before and stayed silent.
- **Invalid arguments throw instead of failing silently.** A selector matching nothing
  is still not an error, but:
  - `find()` throws when a selector is not a string
  - `on()` throws when the event types are empty or not strings
  - `addClass` / `removeClass` / `toggleClass` throw on empty or non string names,
    including a call without any argument, which was a no-op before
  - the content functions throw on content that is not content - `append(0)` did
    nothing before, `append(null)` failed with an unrelated `TypeError`
  - `html(null)` throws, it did return the inner html before
  - `data()` throws when the first argument is neither a string nor a boolean
  - `parent()` throws on an invalid selector. It logged to the console before and
    returned the ancestor reached so far, which was indistinguishable from a match.
- **Setters return the node** so they can be chained: `append`, `prepend`, `before`,
  `after`, `replace` and `val()` on a list returned `undefined` before.
- **`val()` on an empty list returns an empty `Map`** instead of `undefined`.
- **The built bundle was renamed.** `browser-defaultjs-extdom.js` and
  `module-defaultjs-extdom.js` were identical and are replaced by
  `bundle-defaultjs-extdom.js` and `bundle-defaultjs-extdom.min.js`.

### Added

- TypeScript definitions in `index.d.ts`, wired up by the `types` field.
- `defaultjs.extdom.READYEVENT` holds the type of the ready event.
- The list types gained `some`, `every`, `reduce` and `includes`.
- The content functions accept any mix of nodes, html strings, lists and arrays of
  them, nested to any depth: `append("<a></a>", nodeList, ["<b></b>", node])`.
- `replace` accepts html strings and several contents at once.
- `on()` accepts several event types per array entry: `on(["click", "focus blur"], …)`.
- `data(true)` reads the `data-` attributes again and merges them into the cache.
- `NodeList.from` and `HTMLCollection.from` accept anything iterable.
- The `:parent()` pseudo selector reads nested bracket groups like
  `:parent(div:has(p):not(span))`, may be followed by further brackets, and ignores a
  `:parent` token inside a string or another group. Quoting the inner selector is
  optional now.

### Fixed

- `prepend` and `before` threw on html strings - the string was never parsed to nodes.
- `html()` with several arguments kept only the last one, as the content was emptied
  inside the loop.
- `data()` wrote to the global `window.name` on every first call, because the loop
  variable was not declared.
- Falsy results were dropped when a call was forwarded to the items of a list, so
  `find("input").attr("disabled")` reported nothing for empty attribute values.
- An unchecked radio reported `false` instead of `undefined` and could overwrite the
  selected value of its group when the values of a list were collected.
- The event type splitter matched with capture groups, which registered additional
  listeners for `" "` and `undefined` on every call with several types.
- `removeOn` only removed the last registration of a handle, as the handle was used as
  a map key - registering the same handle twice made the older listener unremovable.
- The `once` option threw a `TypeError` after the first event.
- Listener options were not remembered, so a listener registered with `capture` could
  not be removed.
- `find()` stopped at the first falsy argument, so `find("a", "", "b")` never searched
  for `"b"`.
- `selector()` counted only same tag siblings while using `:nth-child`, which addresses
  all element siblings - the result could point at a different element. A first sibling
  got no position at all and therefore matched all of them.
- The `:parent()` pseudo selector matched greedily up to the last bracket of the whole
  selector, which broke every selector with brackets behind the token.
- `applyTo` called a given function without any argument, as the argument list was
  passed as the `this` argument.
- `attr()` returned `undefined` instead of an empty object for an element without
  attributes.
- The global object was detected by a bare `window || global || self` chain, which
  throws instead of falling through wherever `window` is missing, breaking the lib in
  node and workers.

### Changed

- `NodeList` and `HTMLCollection` are built by one shared factory, they were near
  identical copies of each other before.
- Event data is kept in a `WeakMap` instead of properties on the element, so nothing
  is exposed on the dom and it is released with the element.
- All modules carry JSDoc, and the README was rewritten as api documentation.

### Known limitations

Four functions are shadowed by native members on specific nodes and are not reachable
there:

- `data()` on text and comment nodes, and on `<object>` - `CharacterData.data` and
  `HTMLObjectElement.data` are native properties
- `content()` on `<template>` - `HTMLTemplateElement.content` is a native property
- `show()` on `<dialog>` - `HTMLDialogElement.show()` is a native method

## [1.1.7] - 2026-05-28

### Fixed

- `trigger` dropped the event detail when it was `0` or `false`.

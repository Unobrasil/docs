# Utils

`Utils` is a utility containing commonly reused functions. Instance is accessible through the [BdApi](./bdapi).

## Properties



## Methods

### className
Builds a classname string from any number of arguments. This includes arrays and objects. When given an array all values from the array are added to the list. When given an object they keys are added as the classnames if the value is truthy. Copyright (c) 2018 Jed Watson https://github.com/JedWatson/classnames MIT License

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
argument|...Any|anything that should be used to add classnames.

**Returns:** `void`
___

### debounce
Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds.  Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
executor|function|
delay|number|

**Returns:** `void`
___

### escapeHTML
Takes a string of html and escapes it using the brower's own escaping mechanism.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
html|String|html to be escaped

**Returns:** `void`
___

### extend
Deep extends an object with a set of other objects. Objects later in the list of `extenders` have priority, that is to say if one sets a key to be a primitive, it will be overwritten with the next one with the same key. If it is an object, and the keys match, the object is extended. This happens recursively.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
extendee|object|Object to be extended
extenders|...object|Objects to extend with

**Returns:** `object` - - A reference to `extendee`
___

### findInTree
Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
tree|object|&#x274C;|*none*|Tree that should be walked
searchFilter|callable|&#x274C;|*none*|Filter to check against each object and subobject
options|object|&#x274C;|*none*|Additional options to customize the search
options.walkable|Array.&lt;string&gt;\|null|&#x2705;|*none*|Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable
options.ignore|Array.&lt;string&gt;|&#x2705;|[]|Array of strings to use as keys to exclude from the search, most helpful when `walkable = null`.

**Returns:** `void`
___

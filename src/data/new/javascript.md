---
layout: default
title: Javascript Cheat Sheet (v2)
updated: 2023-12-27
---

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png" alt="Javascript Logo" width="100" height="100">

## Javascript Cheat Sheet

- GLOBAL OBJECTS > OBJECT :[Doc link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Global object: properties

#### Length property

length is a property of a function object, and indicates how many
arguments the function expects, i.e. the number of formal parameters.
This number does not include the rest parameter. Has a value of 1.

```javascript
Object.length;
```

#### Prototype property

Represents the Object prototype object and allows to add new properties and methods to all objects of type Object.

```javascript
Object.prototype;
```

### Methods of the Object constructor

#### Assign method

Copies the values of all enumerable own properties from one or more source objects to a target object. method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object

```javascript
Object.assign(target, ...sources);
```

#### Create method

Creates a new object with the specified prototype object and properties. The object which should be the prototype of the newly-created object.

```javascript
Object.create(MyObject);
```

#### DefineProperties method

Adds the named properties described by the given descriptors to an object. The object on which to define or modify properties.

```javascript
Object.defineProperty(obj, prop, descriptor);
```

#### DefineProperty method

Adds the named properties described by the given descriptors to an object.

```javascript
Object.defineProperties(obj, props);
```

#### Entries method

Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

```javascript
Object.entries(obj);
```

#### Freeze method

Freezes an object: other code can't delete or change any properties.

```javascript
Object.freeze(obj);
```

#### GetOwnPropertyDescriptor method

Returns a property descriptor for a named property on an object.

```javascript
Object.getOwnPropertyDescriptor(obj, prop);
```

#### GetOwnPropertyDescriptors method

Returns an object containing all own property descriptors for an object.

```javascript
Object.getOwnPropertyDescriptors(obj);
```

#### GetOwnPropertyNames method

Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

```javascript
Object.getOwnPropertyNames(obj);
```

#### GetOwnPropertySymbols method

Returns an array of all symbol properties found directly upon a given object.

```javascript
Object.getOwnPropertySymbols(obj);
```

#### GetPrototypeOf method

Returns the prototype (i.e. the internal [[Prototype]] property) of the specified object.

```javascript
Object.getPrototypeOf(obj);
```

#### Is method

Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).

```javascript
Object.is(value1, value2);
```

#### IsExtensible method

Determines if extending of an object is allowed.

```javascript
Object.isExtensible(obj);
```

#### IsFrozen method

Determines if an object was frozen.

```javascript
Object.isFrozen(obj);
```

#### IsSealed method

Determines if an object is sealed.

```javascript
Object.isSealed(obj);
```

#### Keys method

Returns an array containing the names of all of the given object's own enumerable string properties.

```javascript
Object.keys(obj);
```

#### PreventExtensions method

Prevents any extensions of an object.

```javascript
Object.preventExtensions(obj);
```

#### Seal method

Prevents other code from deleting properties of an object.

```javascript
Object.seal(obj);
```

#### SetPrototypeOf method

Sets the prototype (i.e., the internal [[Prototype]] property).

```javascript
Object.setPrototypeOf(obj, prototype);
```

#### Values method

Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

```javascript
Object.values(obj);
```

### Object instances and Object prototype

    object (Object.prototype.property or Object.prototype.method())

### Properties

    obj.constructor // Specifies the function that creates an object's prototype.

    obj.**proto** // Points to the object which was used as prototype when the object was instantiated.

### Methods

#### HasOwnProperty method

Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

```javascript
obj.hasOwnProperty(prop);
```

#### IsPrototypeOf method

Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

```javascript
prototypeObj.isPrototypeOf(object);
```

#### PropertyIsEnumerable method

Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.

```javascript
obj.propertyIsEnumerable(prop);
```

#### ToLocaleString method

Calls toString().

```javascript
obj.toLocaleString();
```

#### ToString method

Returns a string representation of the object.

```javascript
obj.toString();
```

#### ValueOf method

Returns the primitive value of the specified object.

```javascript
object.valueOf();
```

### GLOBAL OBJECTS > ARRAY

-[Doc link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Global object: properties

#### Length property

Reflects the number of elements in an array.

```javascript
Array.length;
```

#### Prototype property

Represents the prototype for the Array constructor and allows to add new properties and methods to all Array objects.

```javascript
Array.prototype;
```

### Global object: methods

#### From method

Creates a new Array instance from an array-like or iterable object.

```javascript
Array.from(arrayLike[, mapFn[, thisArg]]);
```

#### IsArray method

Returns true if a variable is an array, if not false.

```javascript
Array.isArray(obj);
```

#### Of method

Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

```javascript
Array.of(element0[, element1[, ...[, elementN]]]);
```

### Instance: properties

    arr.length // Reflects the number of elements in an array.

### Instance: mutator methods

#### CopyWithin method

Copies a sequence of array elements within the array.

```javascript
arr.copyWithin(target[, start[, end]]);
```

#### Fill method

Fills all the elements of an array from a start index to an end index with a static value.

```javascript
arr.fill(value[, start[, end]]);
```

#### Pop method

Removes the last element from an array and returns that element.

```javascript
arr.pop();
```

#### Push method

Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
arr.push(element1[, ...[, elementN]]);
```

#### Reverse method

Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.

```javascript
arr.reverse();
```

#### Shift method

Removes the first element from an array and returns that element.

```javascript
arr.shift();
```

#### Sort method

Sorts the elements of an array in place and returns the array.

```javascript
arr.sort([compareFunction]);
```

#### Splice method

Adds and/or removes elements from an array.

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
```

#### Unshift method

Adds one or more elements to the front of an array and returns the new length of the array.

```javascript
arr.unshift([element1[, ...[, elementN]]]);
```

### Instance: accessor methods

#### At method

Returns the element at the specified index in the array.

```javascript
arr.at(index);
```

#### Concat method

Returns a new array comprised of this array joined with other array(s) and/or value(s).

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```

#### Includes method

Determines whether an array contains a certain element, returning true or false as appropriate.

```javascript
arr.includes(valueToFind[, fromIndex]);
```

#### IndexOf method

Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

```javascript
arr.indexOf(searchElement[, fromIndex]);
```

#### Join method

Joins all elements of an array into a string.

```javascript
arr.join([separator]);
```

#### LastIndexOf method

Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

```javascript
arr.lastIndexOf(searchElement[, fromIndex]);
```

#### Slice method

Extracts a section of an array and returns a new array.

```javascript
arr.slice([begin[, end]]);
```

#### ToString method

Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

```javascript
arr.toString();
```

#### ToLocaleString method

Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

```javascript
arr.toLocaleString([locales[, options]]);
```

### Instance: iteration methods

#### Entries method

Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```javascript
arr.entries();
```

#### Every method

Returns true if every element in this array satisfies the provided testing function.

```javascript
arr.every(callback[, thisArg]);
```

#### Filter method

Creates a new array with all of the elements of this array for which the provided filtering function returns true.

```javascript
arr.filter(callback[, thisArg]);
```

#### Find method

Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

```javascript
arr.find(callback[, thisArg]);
```

#### FindIndex method

Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

```javascript
arr.findIndex(callback[, thisArg]);
```

#### ForEach method

Calls a function for each element in the array.

```javascript
arr.forEach(callback[, thisArg]);
```

#### Keys method

Returns a new Array Iterator that contains the keys for each index in the array.

```javascript
arr.keys();
```

#### Map method

Creates a new array with the results of calling a provided function on every element in this array.

```javascript
arr.map(callback[, initialValue]);
```

#### Reduce method

Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

```javascript
arr.reduce(callback[, initialValue]);
```

#### ReduceRight method

Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

```javascript
arr.reduceRight(callback[, initialValue]);
```

#### Some method

Returns true if at least one element in this array satisfies the provided testing function.

```javascript
arr.some(callback[, initialValue]);
```

#### Values method

Returns a new Array Iterator object that contains the values for each index in the array.

```javascript
arr.values();
```

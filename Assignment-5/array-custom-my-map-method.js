// Q8: Add a custom myMap() method to all arrays.
// It follows the main behavior of the built-in Array.prototype.map().

Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this == null) {
            throw new TypeError("myMap called on null or undefined");
        }

        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const source = Object(this);
        const length = source.length >>> 0;
        const result = new Array(length);

        for (let index = 0; index < length; index++) {
            // map() skips indexes that do not exist in a sparse array.
            if (index in source) {
                result[index] = callback.call(
                    thisArg,
                    source[index],
                    index,
                    source
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true,
    enumerable: false
});

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myMap((number, index) => number + index));
// [1, 3, 5, 7]

// myMap() creates and returns a new array; it does not change the original.

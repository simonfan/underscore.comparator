/*
From MDN: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

If compareFunction(a, b) is less than 0, sort a to a lower index than b,
    i.e. a comes first.

If compareFunction(a, b) returns 0, leave a and b unchanged with respect
    to each other, but sorted with respect to all different elements.
    Note: the ECMAscript standard does not guarantee this behaviour,
    and thus not all browsers
    (e.g. Mozilla versions dating back to at least 2003) respect this.

If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
*/

define(["underscore"], function(undef) {

    function compareValues(aValue, bValue, direction) {
        if (aValue === bValue) {
            return 0;
        } else {
            return aValue > bValue ? 1 * direction : -1 * direction;
        }
    }

	_.mixin({
        comparator: function(properties, directions, options) {
            // properties must be an array.
            properties = _.isString(properties) ? [properties] : properties;

            // directions
            directions = directions || {};

            // default options
            options = options || {};

            // root namespace from which to obtain values.
            var root = options.root;

            return function(a, b) {

                a = root ? a[root] : a;
                b = root ? b[root] : b;

                return _.reduce(properties, function(res, property) {

                    if (res === 0) {
                        var aValue = a[property],
                            bValue = b[property],
                            direction = _.isNumber(directions) ? directions : directions[property] ? directions[property] : 1;

                        return compareValues( aValue, bValue, direction );
                    } else {
                        return res;
                    }

                }, 0);
            }
        },
        /**
        Generates a comparator function given a list of
        */
    });

});

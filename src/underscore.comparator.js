//     UnderscoreComparator
//     (c)
//     UnderscoreComparator is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module UnderscoreComparator
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(["underscore"], function (_) {

    function compareValues(aValue, bValue, direction) {
        if (aValue === bValue) {
            return 0;
        } else {
            return aValue > bValue ? 1 * direction : -1 * direction;
        }
    }

	_.mixin({
        comparator: function (properties, directions, options) {
            // properties must be an array.
            properties = _.isString(properties) ? [properties] : properties;

            // directions
            directions = directions || {};

            // default options
            options = options || {};

            // root namespace from which to obtain values.
            var root = options.root;

            return function (a, b) {

                a = root ? a[root] : a;
                b = root ? b[root] : b;

                return _.reduce(properties, function (res, property) {

                    if (res === 0) {
                        var aValue = a[property],
                            bValue = b[property],
                            direction = _.isNumber(directions) ? directions : directions[property] ? directions[property] : 1;

                        return compareValues(aValue, bValue, direction);
                    } else {
                        return res;
                    }

                }, 0);
            };
        },
        /**
        Generates a comparator function given a list of
        */
    });

	return _;
});

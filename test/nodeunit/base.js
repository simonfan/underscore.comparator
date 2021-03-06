'use strict';

/*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
        test.expect(numAssertions)
        test.done()
    Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
*/

exports.Base = {
    setUp: function (done) {
        // setup here
        done();
    },

    // tests:
    Base: function (test) {
        var UnderscoreComparator = require('../../src/underscore.comparator');

        test.ok(UnderscoreComparator, 'UnderscoreComparator loaded without any explosions! :D');

        test.done();
    }
};

/*
exports.Base = function (test) {

    var UnderscoreComparator = require('../../src/underscore.comparator');
    test.ok(UnderscoreComparator);

    test.done();
};
*/

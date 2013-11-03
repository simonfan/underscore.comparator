define(['underscore.comparator','backbone'], function(undef, Backbone) {

return function() {

    QUnit.module('Base', {
        setup: function() {
            window.fruits = [];

            fruits.push({
                name: 'Orange',
                price: 3,
                quantity: 20,
            });

            fruits.push({
                name: 'Banana',
                price: 4,
                quantity: 25,
            });

            fruits.push({
                name: 'Apple',
                price: 4,
                quantity: 30,
            });
        },
        teardown: function() {
            delete window.fruits;
        }
    });


    test('Base', function() {
        ok(_.comparator);
    })

    test('Single comparison', function() {
        var priceComparator = _.comparator('price', { price: 1 }),
            orange = _.findWhere(fruits, { name: 'Orange' }),
            banana = _.findWhere(fruits, { name: 'Banana' }),
            apple = _.findWhere(fruits, { name: 'Apple' });

        equal(priceComparator(orange, banana), -1);
        equal(priceComparator(banana, orange), 1);

        equal(priceComparator(apple, banana), 0);

        equal(priceComparator(apple, orange), 1);
    });

    test('Multiple comparison, single direction', function() {
        var priceComparator = _.comparator('price'),
            priceThenNameComparator = _.comparator(['price','name']),
            orange = _.findWhere(fruits, { name: 'Orange' }),
            banana = _.findWhere(fruits, { name: 'Banana' }),
            apple = _.findWhere(fruits, { name: 'Apple' });

        equal(priceThenNameComparator(orange, apple), -1);
        equal(priceThenNameComparator(apple, orange), 1);

        equal(priceComparator(apple, banana), 0);
        equal(priceThenNameComparator(apple, banana), -1);
        equal(priceThenNameComparator(banana, apple), 1);
    });


    test('Multiple comparison using backbone models', function() {
        var bbFruits = new Backbone.Collection(_.clone(fruits));

        deepEqual(bbFruits.pluck('name'), _.pluck(fruits, 'name'));

        // set a comparator on bbFruits
        bbFruits.comparator = _.comparator(['price','name'], {
            price: -1,
            name: -1,
        }, {
            root: 'attributes'
        });

        bbFruits.sort();

        deepEqual(bbFruits.pluck('name'), ['Banana','Apple','Orange'])
    });



    test('direction simple setting', function() {
        var higherQuantities = _.comparator('quantity', -1);

        // sort fruits
        deepEqual(_.pluck(fruits.sort(higherQuantities),'quantity'), [30, 25, 20])
    });

}
});

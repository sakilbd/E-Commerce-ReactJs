var casual = require('casual');
var fs = require('fs');

var title = casual._title();
// Same as
var title = casual.title;

// Pass generator as callback
var array_of = function(times) {
    var result = [];

    for (var i = 0; i < times; ++i) {
        casual.define('user', function() {
            var units = [
                'g',
                'pc',
                'kg',
                'lb'

            ]
            let price = casual.integer(from = 20, to = 350);
            return {
                title: casual.words(n = 6),
                image: "http://loremflickr.com/640/480/food",
                rating: (casual.double(from = 3, to = 5)).toFixed(2),
                quantity: casual.integer(from = 1, to = 100),
                unit: units[Math.floor(Math.random() * units.length)],
                price: price,
                last_price: price + casual.integer(from = 10, to = 20),
                stock: casual.integer(from = 4, to = 9),

            };
        });

        // Generate object with randomly generated fields
        var user = casual.user;
        result.push(user);
    }

    return result;
};

// Will generate array of five random timestamps
var data = array_of(10);
console.log(data)
    // fs.writeFile("./faker/db.json", JSON.stringify(data), function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    // });

fs.writeFile("./public/fakeData/products.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
});
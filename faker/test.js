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
            return {
                email: casual.email,
                firstname: casual.first_name,
                lastname: casual.last_name,
                password: casual.password
            };
        });

        // Generate object with randomly generated fields
        var user = casual.user;
        result.push(user);
    }

    return result;
};

// Will generate array of five random timestamps
var data = array_of(5);
console.log(data)
fs.writeFile("./faker/db.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
});
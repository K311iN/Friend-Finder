var fs = require("fs");

module.export = function (app, path) {

    fs.readFile("app/data/friends.js", "utf8", function (err, data) {

        if (error) {

            return console.log(error);
        }
        else {
            res.json(JSON.parse(data));
        }
    });
}

app.post("/api/friends", function (req, res) {

    var returnIt = [];
    var postResponse = JSON.stringify(req.body);

    fs.readFile("app/data/friends.js", function (err, data) {

        var friends = JSON.parse(data)
        var closest = 0
        var match = 999999999999999;

        for (var i = 0; i < friendFile.length; i++) {

            var between = 0;

            for (var j = 0; j < friendFile[i]['answers[]'].length; j++) {

                between += Math.abs((parseInt(req.body['answers[]'][j]) - parseInt(friendFile[i]['answers[]'][j])));
            }

            if (between <= match) {
                match = between;
                closest = i;
            }
        }


        //console.log("match" + friendFile[closest].name);
        
        returnIt.push(friendFile[closest]);

        friendFile.push(JSON.parse(postResponse));

        fs.writeFile("app/data/friends.js", JSON.stringify(friendFile));
            res.send(returnIt[0]);
    });
});

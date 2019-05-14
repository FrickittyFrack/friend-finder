
var allDemPeeps = require("../data/friends");

// Routes
module.exports = function(app) {
    
    // List the json of everyone in the "friends.js" file
    app.get("/api/list-o-people", function(req, res) {
        return res.json(allDemPeeps);
    });

    // Posts new person into friends.js AND sends back their "Best Match"
    app.post("/api/list-o-people", function(req, res) {
        
        // Define empty variable to fill with info from friends.js
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity,
            desc: ""
        };

        var userInfo = req.body;
        var userScore = userInfo.scores;

        console.log(userScore);
        var totalDifference;

        // Loop through all friends in friends.js
        for(var i = 0; i < allDemPeeps.length; i++) {

            var currentFriend = allDemPeeps[i];
            totalDifference = 0;

            // Loop through each score for each friend
            for(var j = 0; j < currentFriend.scores.length; j++) {

                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScore[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if(totalDifference <= bestMatch.friendDifference) {

                // bestMatch = {
                //     name: currentFriend.name,
                //     photo: currentFriend.photo,
                //     desc: currentFriend.desc
                // };

                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
                bestMatch.desc = currentFriend.desc;

            }
        }

        allDemPeeps.push(userInfo);

        res.json(bestMatch);

    });

};

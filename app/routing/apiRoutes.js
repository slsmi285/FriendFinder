//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   //* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

   //LOAD DAta
   //linking routes to a series of data sources, data sources hold arrays of information on all possible friends.
   var friends = require("../data/friends");

   //Routing

   module.exports = function(app) {
      //API GET Requests, code handles when users visit a page, user is shown a JSON of the data in the table

      app.get("/api/friends", function(req, res) {
         res.json(friends);
      });

      //API POST requests, when a user submits a form  - submits data to the server
      //when user submits form data (JSON object), JSON is pushed to the appropriate JAVASCRIPT array

      app.post("/api/friends", function(req, res) {
         //Server will respond to a user's survey result
         //THEN compare those results against every user in the database
         //It will then calculate the difference between each of the numbers and the user's numbers
         //It will then choose the user with the least differences as the "best friend match", in the case of multiple users with the same result, it will choose the first match
         //after the test, it will push the user to the database

         //creating an object to hold the 'best match', Loop is needed as it will be updated -- to go thru the options, for loop is needed
         var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
         };

         //use the result of the user's survey POST and parse it.
         var userData = req.body;
         var userScores = userData.scores;

         //create variable to calculate difference between user's score and the scores of each option in database
         var totalDifference;

         //loop thru the options/possibilities in the database
         for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0

            console.log(currentFriend.name);

         //loop thru all the scores of each friend
         for (var j = 0; j < currentFriend.scores.length; j++) {
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = userScores[j];

            //calculate the difference between the scores and sum them inot the totalDifference
            totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
         }

         //sum of differences is les then the differences of the current "best match"
         if (totalDifference <= bestMatch.friendDifference) {
            //reset the bestMatch to be the new friend
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.friendDifference = totalDifference;

         }

      }
         //save user's data to the database (this take place after the check, other the database will always return that the user si the users best friend)
         friends.push(userData);

         //return a JSON with the user's bestMatch. to be used by the html in the next page
         res.json(bestMatch);
      });
   };
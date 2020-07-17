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

         //create variable to calculate difference between user's score and the scores of each option in database
         var totalDifference;
         
         //loop thru the options/possibilities in the database
         for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
         }
      })
   }
// BASE SETUP
// =============================================================================

var express = require("express"); // call express
var app = express();

const graphqlHTTP = require("express-graphql");

const speechDataSchema = require("./schemas/speechDataSchema");

var bodyParser = require("body-parser");
const speechService = require("./Services/speechDataService");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: speechDataSchema,
    graphiql: true
  })
);

var port = process.env.PORT || 3000; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/", function(req, res) {
  speechService.getSpeechText().then(data => {
    res.json(data);
  });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);

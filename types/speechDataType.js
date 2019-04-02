const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "speechDataType",
  fields: {
    speechDataId: { type: GraphQLID },
    speechText: { type: GraphQLString }
  }
});

const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "speechDataType",
  fields: {
    speechTextId: { type: GraphQLID },
    speechTextData: { type: GraphQLString }
  }
});

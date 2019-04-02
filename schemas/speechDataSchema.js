const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require("graphql");

const speechService = require("../Services/speechDataService");
const speechDataType = require("../types/speechDataType");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getSpeechData: {
      type: new GraphQLList(speechDataType),
      description: "to get the speech data stored",
      /* args:{
          key:{type: new GraphQlNoNull(GraphQLString)}
      }, */
      resolve: () => {
        return speechService.getSpeechText();
      }
    }
  }
});

const speechDataSchema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = speechDataSchema;

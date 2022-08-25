import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const RateType = new GraphQLObjectType({
  name: 'Rate',
  fields: () => ({
    id: { type: GraphQLID },
    symbol: { type: GraphQLString },
    currencySymbol: { type: GraphQLString },
    type: { type: GraphQLString },
    rateUsd: { type: GraphQLString },
  }),
});

export default RateType;

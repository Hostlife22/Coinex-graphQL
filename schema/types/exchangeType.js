import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const ExchangeType = new GraphQLObjectType({
  name: 'Exchange',
  fields: () => ({
    exchangeId: { type: GraphQLID },
    name: { type: GraphQLString },
    rank: { type: GraphQLString },
    percentTotalVolume: { type: GraphQLString },
    volumeUsd: { type: GraphQLString },
    tradingPairs: { type: GraphQLString },
    socket: { type: GraphQLBoolean },
    exchangeUrl: { type: GraphQLString },
    updated: { type: GraphQLString },
  }),
});

export default ExchangeType;

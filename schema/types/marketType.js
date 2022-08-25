import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const MarketType = new GraphQLObjectType({
  name: 'Market',
  fields: () => ({
    exchangeId: { type: GraphQLID },
    rank: { type: GraphQLString },
    baseSymbol: { type: GraphQLString },
    baseId: { type: GraphQLID },
    quoteSymbol: { type: GraphQLString },
    quoteId: { type: GraphQLString },
    priceQuote: { type: GraphQLString },
    priceUsd: { type: GraphQLString },
    volumeUsd24Hr: { type: GraphQLString },
    percentExchangeVolume: { type: GraphQLString },
    tradesCount24Hr: { type: GraphQLString },
    updated: { type: GraphQLString },
  }),
});

export default MarketType;

import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const AssetMarketType = new GraphQLObjectType({
  name: 'AssetMarket',
  fields: () => ({
    exchangeId: { type: GraphQLID },
    baseId: { type: GraphQLID },
    quoteId: { type: GraphQLID },
    baseSymbol: { type: GraphQLString },
    quoteSymbol: { type: GraphQLString },
    volumeUsd24Hr: { type: GraphQLString },
    priceUsd: { type: GraphQLString },
    volumePercent: { type: GraphQLString },
  }),
});

export default AssetMarketType;

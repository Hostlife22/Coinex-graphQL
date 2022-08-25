import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const AssetType = new GraphQLObjectType({
  name: 'Asset',
  fields: () => ({
    id: { type: GraphQLID },
    rank: { type: GraphQLString },
    symbol: { type: GraphQLString },
    name: { type: GraphQLString },
    supply: { type: GraphQLString },
    maxSupply: { type: GraphQLString },
    marketCapUsd: { type: GraphQLString },
    volumeUsd24Hr: { type: GraphQLString },
    priceUsd: { type: GraphQLString },
    changePercent24Hr: { type: GraphQLString },
    vwap24Hr: { type: GraphQLString },
  }),
});

export default AssetType;

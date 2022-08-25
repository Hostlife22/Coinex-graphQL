import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql';

const AssetHistoryType = new GraphQLObjectType({
  name: 'AssetHistory',
  fields: () => ({
    priceUsd: { type: GraphQLString },
    time: { type: GraphQLFloat },
  }),
});

export default AssetHistoryType;

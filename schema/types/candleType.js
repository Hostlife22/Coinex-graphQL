import { GraphQLObjectType, GraphQLString } from 'graphql';

const CandleType = new GraphQLObjectType({
  name: 'Candle',
  fields: () => ({
    open: { type: GraphQLString },
    high: { type: GraphQLString },
    low: { type: GraphQLString },
    close: { type: GraphQLString },
    volume: { type: GraphQLString },
    period: { type: GraphQLString },
  }),
});

export default CandleType;

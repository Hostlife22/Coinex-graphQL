import { GraphQLEnumType } from 'graphql';

const AssetHistoryInterval = new GraphQLEnumType({
  name: 'AssetHistoryInterval',
  values: {
    m1: {
      value: 'm1',
    },
    m15: {
      value: 'm15',
    },
    h1: {
      value: 'h1',
    },
    d1: {
      value: 'd1',
    },
  },
});

export default AssetHistoryInterval;
// module.exports = AssetHistoryInterval;

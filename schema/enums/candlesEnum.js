import { GraphQLEnumType } from 'graphql';

const CandlesInterval = new GraphQLEnumType({
  name: 'CandlesInterval',
  values: {
    m1: {
      value: 'm1',
    },
    m15: {
      value: 'm15',
    },
    m30: {
      value: 'm30',
    },
    h1: {
      value: 'h1',
    },
    h2: {
      value: 'h2',
    },
    h4: {
      value: 'h4',
    },
    h8: {
      value: 'h8',
    },
    h12: {
      value: 'h12',
    },
    d1: {
      value: 'd1',
    },
    w1: {
      value: 'w1',
    },
  },
});

export default CandlesInterval;

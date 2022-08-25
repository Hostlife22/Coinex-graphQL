import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';
import fetch from 'node-fetch';
import {
  AssetHistoryType,
  AssetMarketType,
  AssetType,
  CandleType,
  ExchangeType,
  MarketType,
  RateType
} from './types/index.js';

import buildUrl from '../utils/index.js';
import { AssetHistoryInterval, CandlesInterval } from './enums/index.js';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query of all',
  fields: () => ({
    assets: {
      type: new GraphQLList(AssetType),
      args: { limit: { type: GraphQLInt }, offset: { type: GraphQLInt } },
      resolve: (parent, { limit, offset }) =>
        fetch(buildUrl('/assets', { limit, offset }))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    asset: {
      type: AssetType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, { id }) =>
        fetch(buildUrl(`/assets/${id}`))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    assetHistory: {
      type: new GraphQLList(AssetHistoryType),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        interval: { type: new GraphQLNonNull(AssetHistoryInterval) },
        start: { type: GraphQLString },
        end: { type: GraphQLString },
      },
      resolve: (parent, { id, interval, start, end }) =>
        fetch(buildUrl(`/assets/${id}/history`, { interval, start, end }))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    assetMarkets: {
      type: new GraphQLList(AssetMarketType),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      resolve: (parent, { id, limit, offset }) =>
        fetch(buildUrl(`/assets/${id}/markets`, { limit, offset }))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    rates: {
      type: new GraphQLList(RateType),
      resolve: (parent, args) =>
        fetch(buildUrl('/rates'))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    rate: {
      type: RateType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, { id }) =>
        fetch(buildUrl(`/rates/${id}`))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    exchanges: {
      type: new GraphQLList(ExchangeType),
      resolve: (parent, args) =>
        fetch(buildUrl('/exchanges'))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    exchange: {
      type: ExchangeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, { id }) =>
        fetch(buildUrl(`/exchanges/${id}`))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    markets: {
      type: new GraphQLList(MarketType),
      args: {
        exchangeId: { type: GraphQLID },
        baseSymbol: { type: GraphQLString },
        quoteSymbol: { type: GraphQLString },
        baseId: { type: GraphQLID },
        quoteId: { type: GraphQLString },
        assetSymbol: { type: GraphQLString },
        assetId: { type: GraphQLID },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        fetch(buildUrl('/markets', args))
          .then((res) => res.json())
          .then((json) => json.data),
    },

    candles: {
      type: new GraphQLList(CandleType),
      args: {
        exchange: { type: new GraphQLNonNull(GraphQLString) },
        interval: { type: new GraphQLNonNull(CandlesInterval) },
        baseId: { type: new GraphQLNonNull(GraphQLID) },
        quoteId: { type: new GraphQLNonNull(GraphQLID) },
        start: { type: GraphQLString },
        end: { type: GraphQLString },
      },
      resolve: (parent, args) =>
        fetch(buildUrl('/candles', args))
          .then((res) => res.json())
          .then((json) => json.data),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});

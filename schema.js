const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');
  // Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
        wikipedia: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

// History Type
const HistoryType = new GraphQLObjectType({
    name: 'History',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        event_date_utc: { type: GraphQLString },
        details: { type: GraphQLString },
        links: { type: LinksType }
    })
});

// Links Type
const LinksType = new GraphQLObjectType({
    name: 'Links',
    fields: () => ({
        reddit: { type: GraphQLString },
        article: { type: GraphQLString },
        wikipedia: { type: GraphQLString }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios
                    .get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                return axios
                    .get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            args: {
                rocket_id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
                    .then(res => res.data);
                }
        },
        histories: {
            type: new GraphQLList(HistoryType),
            resolve(parent, args) {
                return axios
                    .get('https://api.spacexdata.com/v3/history')
                    .then(res => res.data);
            }
        },
        history: {
            type: HistoryType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/history/${args.id}`)
                    .then(res => res.data);
                }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery });
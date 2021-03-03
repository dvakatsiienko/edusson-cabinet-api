/* Instruments */
// const { paginateResults } = require('./utils');

/**
 * Resolver signature: fieldName: (parent, args, context, info) => data.
 */
module.exports = {
    Query: {
        user: (_, props, { dataSources }) => {
            return {
                name: 'Jack',
            };
        },
    },
    // Mission: {
    //     // make sure the default size is 'large' in case user doesn't specify
    //     missionPatch: (
    //         mission,
    //         { mission: missionArg, size } = { size: 'LARGE' },
    //     ) => {
    //         console.log('→ message', mission, missionArg, size);
    //         return size === 'SMALL'
    //             ? mission.missionPatchSmall
    //             : mission.missionPatchLarge;
    //     },
    // },
    // Launch: {
    //     isBooked: async (launch, _, { dataSources }) => {
    //         return await dataSources.userAPI.isBookedOnLaunch({
    //             launchId: launch.id,
    //         });
    //     },
    // },
    // User: {
    //     trips: async (_, __, { dataSources }) => {
    //         // get ids of launches by user
    //         const launchIds = await dataSources.userAPI.getLaunchIdsByUser();

    //         if (!launchIds.length) return [];

    //         // look up those launches by their ids
    //         return (
    //             dataSources.launchAPI.getLaunchesByIds({
    //                 launchIds,
    //             }) || []
    //         );
    //     },
    // },

    // Mutation: {
    //     login: async (_, { email }, { dataSources }) => {
    //         const user = await dataSources.userAPI.findOrCreateUser({ email });
    //         const token = Buffer.from(email).toString('base64');

    //         console.log('login resolver, email:', email);
    //         console.log('login resolver, token:', token);

    //         if (user) return token;
    //     },
    //     bookTrips: async (_, { launchIds }, { dataSources }) => {
    //         const results = await dataSources.userAPI.bookTrips({ launchIds });
    //         const launches = await dataSources.launchAPI.getLaunchesByIds({
    //             launchIds,
    //         });

    //         return {
    //             success: results && results.length === launchIds.length,
    //             message:
    //                 results.length === launchIds.length
    //                     ? 'trips booked successfully'
    //                     : `the following launches couldn't be booked: ${launchIds.filter(
    //                           id => !results.includes(id),
    //                       )}`,
    //             launches,
    //         };
    //     },
    //     cancelTrip: async (_, { launchId }, { dataSources }) => {
    //         const result = await dataSources.userAPI.cancelTrip({ launchId });

    //         if (!result) {
    //             return {
    //                 success: false,
    //                 message: 'failed to cancel trip',
    //             };
    //         }

    //         const launch = await dataSources.launchAPI.getLaunchById({
    //             launchId,
    //         });

    //         return {
    //             success: true,
    //             message: 'trip cancelled',
    //             launches: [launch],
    //         };
    //     },
    // },
};

import TripsList from './TripsList/TripsList.vue';
import TripDetails from './TripDetails/TripDetails.vue';
import { RouteRecordRaw } from 'vue-router';
import TripView from './Trip.vue';
import TripCreation from './TripCreation/TripCreation.vue';

export default (): RouteRecordRaw[] => {
    return [
        {
            path: '',
            component: TripView,
            children: [
                {
                    path: ':id',
                    component: TripDetails,
                    name: 'trip-details',
                    props: true,
                },
                {
                    path: '',
                    component: TripsList,
                },
                {
                    path: 'create',
                    component: TripCreation,
                },
            ]
        },

    ];
}
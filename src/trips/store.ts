import { createStore } from 'vuex';
import trip from './Trip.vue';

interface CargoDetails {
    cargoType: string;
    quantity: number;
    weight: number;
    description: string;
}

interface Trip {
    id: string;
    departureDate: string;
    cargoDetails: CargoDetails;
    clientName: string;
    deliveryDestinations: string;
}

interface TripState {
    trips: Trip[];
}

export default createStore({
    state: {
        trips: [] as Trip[],
    } as TripState,

    mutations: {
        addTrip(state: TripState, newTrip: Trip) {
            state.trips.push(newTrip);
        },
        updateTrip(state: TripState, updatedTrip: Trip) {
            const index = state.trips.findIndex(trip => trip.id === updatedTrip.id);
            if (index !== -1) {
                // Replace the existing trip with the updated one
                state.trips.splice(index, 1, updatedTrip);
            }
        },
        deleteTrip(state: TripState, id: string) {
            console.log('delete', id)
            const index = state.trips.findIndex(trip => trip.id === id);
            if (index !== -1) {
                state.trips.splice(index, 1);
            }
        },
    },

    actions: {
        saveTrip({ commit }, newTrip: Trip) {
            commit('addTrip', newTrip);
        },
    },

    getters: {
        getTrips: (state: TripState) => state.trips,
        getTripById: (state: TripState) => (id: string) => {
            // Getter to retrieve a specific trip by ID
            console.log('trips', state.trips)
            return state.trips.find(trip => trip.id === id) || {};
        },
    },
});

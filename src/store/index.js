import { createStore } from 'vuex';

const store = createStore({
    state: {
        selected: {
            mainMenuCategory: 0,
            filtersCategory: null,
        }
    },

    getters: {
        selected(state) {
            return state.selected;
        }
    },

    mutations: {
        SET_MAIN_MENU_CAT(state, value) {
            state.selected.mainMenuCategory = value;
        },
        
        SET_FILTERS_CAT(state, value) {
            state.selected.filtersCategory = value;
        }
    },

    actions: {
        setMainMenuCategory(context, { cat }) {
            context.commit("SET_MAIN_MENU_CAT", cat);
        },

        setFiltersCategory(context, { cat }) {
            context.commit("SET_FILTERS_CAT", cat);
        },
    }
});

export default store;

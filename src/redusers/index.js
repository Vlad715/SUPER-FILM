
const initualState = {
    films: [],
    showMoreFilms: false,
    showBiggerImg: false
};

const reducer = (state = initualState, action) => {

    switch (action.type) {
        case 'FILMS_LOADED':
            return {
                ...state,
                films: action.payload
            };
        case 'SHOW_MORE_FILMS':
            return {
                ...state,
                showMoreFilms: !state.showMoreFilms
            };
        case 'SHOW_BIGGER_IMG':
            return {
                ...state,
                showBiggerImg: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
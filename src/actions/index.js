
export const filmsLoaded = (newFilms) => {
    return {
        type: 'FILMS_LOADED',
        payload: newFilms
    };
};

export const showMoreFilmsBtn = () => {
    return {
        type: 'SHOW_MORE_FILMS',
        
    };
};

export const onBiggerImg = (newImg) => {
    return {
        type: 'SHOW_BIGGER_IMG',
        payload: newImg
    };
};
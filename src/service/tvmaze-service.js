export default class TVmazeService {

  _apiBase = 'http://api.tvmaze.com/schedule?country=US&date=';

    getResource = async (dateMod) => {
        const res = await fetch(`${this._apiBase}${dateMod}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch` + 'url дописать'
            `, received ${res.status}`)
        }
        return res.json();
    }

    getMovieDay = async (date) => {
        const dateMod = new Date(date).toISOString().split('T')[0];
        const res = await this.getResource(dateMod);
        return this._transformMovie(res);
    }

    _transformMovie = (arrayMovie) => {
      const newArr = arrayMovie.map((el) => {

        const original = el.show.image !== null ? el.show.image.original : null;

        return {
          id: el.id,
          name: el.name,
          season: el.season,
          episode: el.number,
          image: original,
          year: el.show.premiered
        }
      });
      return newArr;
    }
}


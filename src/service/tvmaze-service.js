export default class TVmazeService {

  _apiBase = 'http://api.tvmaze.com/schedule?country=US&date=';

    getResource = async (date) => {
        const res = await fetch(`${this._apiBase}${date}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch` + 'url дописать'
            `, received ${res.status}`)
        }
        return res.json();
    }

    getMovieDay = async (date) => {
        const res = await this.getResource(date);
        return this._transformMovie(res);
    }

    _transformMovie = (arrayMovie) => {
      const newArr = arrayMovie.map((el) => {
        return {
          id: el.id,
          name: el.name,
          season: el.season,
          episode: el.number,
          image: el.show.image.original,
          year: el.show.premiered
        }
      });
      return newArr;
    }
}


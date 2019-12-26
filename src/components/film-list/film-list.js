import React, {Component} from 'react';
import TVmazeService from '../../service/tvmaze-service';
import './film-list.css';
import imgDef from './404.png';

const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class FilmList extends Component {

    tvmazeServise = new TVmazeService();

    state = {
        filmArr: [],
        showMore: false,
        biggerImg: false
    }

    componentDidMount() {
        this.updateMovie();
    }

    movieDay = new Date(this.props.itemId).toISOString().split('T')[0];
    day = new Date(this.props.itemId).getDate();
    month = new Date(this.props.itemId).getMonth();
    year = new Date(this.props.itemId).getFullYear();

    updateMovie() {
        this.tvmazeServise
            .getMovieDay(this.movieDay)
            .then((movie) => {
                this.setState({filmArr: movie});
            });
    }

    onShowMore = () => {
        this.setState((state) => {
            return {
                showMore: !state.showMore
            }
        });
    }

    onBiggerImg = (url) => {
        this.setState({
            biggerImg: url
        });
    }

    render() {    

        const showFilms = this.state.showMore === true ? this.state.filmArr : this.state.filmArr.slice(0, 4);
        const countRestFilms = this.state.filmArr.length - 4;
        const btnText = this.state.showMore === true ? `Показать меньше ^` : `Еще ${countRestFilms} сериала`;

        const showDescription = showFilms.map((item) => {

            const nameShowStart = item.name.slice(0, 30);
            const nameShowEnd = item.name.slice(30, 60);

            

            return (
                <div className='show-description'>
                    <div className='show-block' onClick={() =>
                        this.onBiggerImg(`${item.image !== null ? item.image : imgDef}`)}>
                        <img className="block-img"src={item.image !== null ? item.image : imgDef} />       
                    </div>
                    <div className='show-name'>
                        <p>{nameShowStart}</p>
                        <p>{nameShowEnd}</p>
                        <p>{item.year}</p>
                        <div className='show-season'>
                            <p>Сезон {item.season}: Эпизод {item.episode}</p>
                        </div>
                    </div>
                </div>
            );
        });
    
        return (
            <div className='show-style'>
                <div className='month-line'>
                    <p> {this.day + ' ' + monthName[this.month] + ' ' + this.year}</p>    
                </div>
                {showDescription}
                <div className="extra-block" onClick={() => this.onBiggerImg(false)}>
                    <img src={this.state.biggerImg } className="extra-img" />
                </div>                
                <button className='list-btn' onClick={this.onShowMore}>{btnText}</button>
            </div>
        );
    }  
};

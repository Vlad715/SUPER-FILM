import React, { Component }  from 'react';
import { connect } from 'react-redux';
import FilmListItem from '../film-list-item';
import withTVmazeService from '../hoc';
import { filmsLoaded, showMoreFilmsBtn, onBiggerImg } from '../../actions';
import './film-list.css';

const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

class  FilmList extends Component {

    componentDidMount() {
        const { TVmazeService } = this.props;
        TVmazeService.getMovieDay(this.props.date)
        .then( (films) => this.props.filmsLoaded(films));
    }

    render() {

        const { films, showMoreFilms, showMoreFilmsBtn, onBiggerImg, showBiggerImg } = this.props;

        const showFilms = showMoreFilms === true ? films : films.slice(0, 4);
        const countRestFilms = films.length - 4;
        const btnText = showMoreFilms === true ? `Показать меньше ^` : `Еще ${countRestFilms} сериала`;

        const day = new Date(this.props.date).getDate();
        const month = new Date(this.props.date).getMonth();
        const year = new Date(this.props.date).getFullYear();

        return (
            <div className='show-style'>
                <div className='month-line'>
                    <p> {day + ' ' + monthName[month] + ' ' + year}</p>    
                </div>
                <FilmListItem films={showFilms} onBiggerImg={onBiggerImg}/>
                <div className="extra-block" onClick={() => onBiggerImg(false)}>
                    <img src={showBiggerImg} className="extra-img" />
                </div>                
                <button className='list-btn' onClick={showMoreFilmsBtn}>{btnText}</button>
            </div>
        );
    }    
};

const mapStateToProps = ({ films, showMoreFilms, showBiggerImg }) => {
    return { films, showMoreFilms, showBiggerImg };
}

const mapDispatchToProps = {
    filmsLoaded,
    showMoreFilmsBtn,
    onBiggerImg
};

export default withTVmazeService()(connect(mapStateToProps, mapDispatchToProps)(FilmList));
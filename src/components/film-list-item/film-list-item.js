import React from 'react';
import imgDef from './404.png';


const FilmListItem = ({ films, onBiggerImg }) => {

    return (
        films.map((item) => {

            const nameShowStart = item.name.slice(0, 30);
            const nameShowEnd = item.name.slice(30, 60);
        
            return (
                <div className='show-description'>
                    <div className='show-block' onClick={
                        () => onBiggerImg(item.image !== null ? item.image : imgDef)}>
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
        })
    );
}

export default FilmListItem;
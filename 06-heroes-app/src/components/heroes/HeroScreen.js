import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ( {history}) => {

    const { heroeId } = useParams();

    const hero = getHeroById( heroeId )

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {

        if( history.length <=2 ){

            history.push('/');
        } else {

            history.goBack()
        }
    }

    return (

        <div className="row mt-5">
            <div className="col-4">
                <img 
                    className="img-thumbnail"
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero }/>
            </div>
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters }</p>

                <button 
                    className="btn btn-outline-light"
                    onClick={ handleReturn }>
                    Regresar
                </button>
            </div>
        </div>
    )
}

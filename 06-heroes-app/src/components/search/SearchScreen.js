import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'

export const SearchScreen = ( { history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);

    const [ values, handleInputChange] = useForm({
        searchText:q
    });

    const {searchText} = values

    const heroesFiltered = heroes;


    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }


    return (

        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de busqueda </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            value= { searchText}
                            onChange={ handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-light"
                            >
                                Buscar...
                            </button>
                    </form>
                </div>

                <div
                    className="col-7">
                        <h4> Resultados </h4>
                        <hr />
                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id }
                                    { ... hero }
                                    />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

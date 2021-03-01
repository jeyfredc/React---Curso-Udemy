import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import '../heroes/herocard.css'

export const SearchScreen = () => {


    const [ values, handleInputChange] = useForm({
        searchText:''
    });

    const {searchText} = values

    const heroesFiltered = heroes;


    const handleSearch = ( e ) => {
        e.preventDefault();
        console.log(values)
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


import './index.css'

//Functional Components
const primeraApp = () => {


    const saludo = 'Hola Mundo'

    return (
        <>
        <h1>{saludo}</h1>
            {/* {}<pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
    )
}

export default primeraApp;
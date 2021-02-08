export const getImagen = async() => {

    try {
        const apiKey = 'Zy1yG1NMTt86p6wqHZEaOUPMbmMONOJr';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = await data.images.downsized;
        
        return url;
    } catch (error) {
        
        return 'No existe';
    }
}
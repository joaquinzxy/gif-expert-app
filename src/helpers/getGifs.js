export const getGifs = async (category) => { 

    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyCpYb4FQpEzAX56EgNZbDrmxfyTGjqeBRM&limit=5`
    const resp = await fetch( url );
    const { results } = await resp.json();

    const gifs = results.map(image =>({
        id: image.id,
        url: image.media_formats.gif.url
    }))

    return gifs;
}
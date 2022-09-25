export const getGifs = async (category) => { 

    const limit = 44;
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyCpYb4FQpEzAX56EgNZbDrmxfyTGjqeBRM&limit=${limit}&media_filter=minimal`
    const resp = await fetch( url );
    const { results } = await resp.json();

    const gifs = results.map(image =>({
        id: image.id,
        urlPreview: image.media_formats.tinygif.url,
        url: image.media_formats.gif.url
    }))
    console.log(gifs);
    return gifs;
}
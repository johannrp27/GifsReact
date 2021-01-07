import axios from 'axios';

export const getGifs = async (category) => {
    const key = 'GEBf5VuEuNr1I6v9CekU2DKrnwuNoqbb';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(category)}&limit=10`
    let { data } = await axios.request(url);
    data = data.data;

    const gifs = data.map(x => ({
        id: x.id,
        title: x.title,
        url: x.images?.downsized_medium.url,
    }))
    return gifs;
}
import axios from 'axios'

export const getImages = async (id: string, amount: number) => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${id}&limit=${amount}`);

    return response.data.map((item: {download_url: string}) =>
        item.download_url.replace(/\d*\/\d*$/, '400/400')
    );
}
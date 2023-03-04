import axios from 'axios'
import { Product } from '../interfaces/Product';

export const getProducts = async (): Promise<Product[]> => {
    const request = `https://6075786f0baf7c0017fa64ce.mockapi.io/products`;

    const response = await axios.get(request);

    return response.data || [];
}
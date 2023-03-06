import { Product } from "../Product";

export interface CardComponentProps {
    card: Product;
    images: string[];
    visible: boolean;
}
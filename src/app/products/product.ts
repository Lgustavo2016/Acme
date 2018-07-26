//Interface make it easy to define the type of each of the properties in our object. It also makes easier to debug 
//and find errors
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
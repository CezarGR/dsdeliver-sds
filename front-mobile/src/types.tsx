export type Order = {
    address: string,
    id: number,
    latitude: number,
    longitude: number,
    moment: string,
    status: string,
    products: Products[],
    total: number       
}

export type Products = {
  
        description: string,
        id: number,
        imageUri: string,
        name: string,
        price: number
 
}
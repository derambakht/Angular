export class Product {
    id:number;
    productName:string;
    price:string;
    categoryId:number;
    categoryName:string;
    body:string;
    features:ProductFeature[] = [];
}

export class ProductFeature {
    id:number;
    title:string;
    featureType:FeatureType;
    featureComboId:number;
    sortOrder:number;
}

export class ProductFeatureValue {
    id:number;
    productId:number;
    productFeatureId:number;
    value:any;
}

export enum FeatureType {
    Text = 101,
    Boolean = 102,
    Combo = 103,
    Multi = 104
}
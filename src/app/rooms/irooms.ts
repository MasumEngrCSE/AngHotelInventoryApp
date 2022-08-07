export interface IRoom {
    aroom: number;
    broom: number;
    troom: number;

}

export interface IRoomList {
    roomNo:number;
    roomType: string;
    amenities:string;
    price:number;
    photo:string;
    checkinTime:Date;
    checkoutTime:Date;
    rating:number;

}
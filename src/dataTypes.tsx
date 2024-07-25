export interface Coins{
    cap:number,
    code:string,
    rate:number,
    volume:number,
    delta:{
        hour:number,
        day:number,
        week:number,
        month:number,
        quarter:number,
        year:number
    }
}
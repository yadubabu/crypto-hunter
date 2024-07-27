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
export interface SingleCoin{
    
    age:number,
    allTimeHighUSD:number,
    categories:[string],
    circulatingSupply:number,
    code:string,
    exchanges:number,
    history:[{
        cap:number,
        date:Date,
        liquidity:number,
        rate:number,
        volume:number,
    }],
    links:{
        discord:string,
        instagram:null,
        linkedin:null,
        medium:null,
        naver:null,
        reddit:string,
        soundcloud:null,
        spotify:null,
        telegram:null,
        tiktok:null,
        twitch:null,
        twitter:string, 
        website:string, 
        wechat:null,
        whitepaper:string, 
        youtube:null
    },
markets:number,
maxSupply:null,
name:string,
pairs:number,
png32:string,
png64:string,
rank:number,
symbol:string,
totalSupply:number,
webp32:string,
webp64:string,
}
export interface CoinHistory{
    
        cap:number,
        date:Date,
        liquidity:number,
        rate:number,
        volume:number,
    
}
export const API_KEY = "AIzaSyBPOL9_XQ24T04y5wapT14eZX1IWDnq6GM";


export const valueConverter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}
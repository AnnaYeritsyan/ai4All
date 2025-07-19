
import axios from "axios";
import { api_url } from "../../api";


export const AboutusPage = async(locale:string)=>{
    const url =  `${api_url}about-us?populate=*&locale=${locale}`;
    try{
        const response = await axios.get(url);
        return response.data;
    }
    catch(error){
        return null;
    }
}
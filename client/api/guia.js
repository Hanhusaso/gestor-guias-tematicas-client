import { toast } from "react-toastify";
import { BASE_PATH } from "../utils/constants";

export async function getGuiasApi(){
    try {
        const url = `${BASE_PATH}/guias`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function createGuiasApi(formData){
    try {
        const url = `${BASE_PATH}/guias`;
        const params = {
            method : "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = response.json();
        toast.success(`Nueva guía creada`);
    } catch (error) {
        
    }
}
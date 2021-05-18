import { toast } from "react-toastify";
import { BASE_PATH } from "../utils/constants";

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
        return result;
    } catch (error) {
        
    }
}
import { BASE_PATH } from "../utils/constants";

export async function getGuiasApi(){
    try {
        const url = `${BASE_PATH}/guias`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("Hola");
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
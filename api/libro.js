import { toast } from "react-toastify";
import { BASE_PATH } from "../utils/constants";

export async function createColectionLibroApi(formData){
    try {
        const url = `${BASE_PATH}/coleccions`;
        const params = {
            method : "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = response.json();
        console.log(result);
        toast.success(`Nueva colección de libro creada`);
        return result;
    } catch (error) {
        
    }
}

export async function deleteLibroApi(idLibro) {
    try {
        const url = `${BASE_PATH}/coleccions/${idLibro}`;
        const params = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const result = fetch(url, params);
        return result;
    } catch (error) {
    //   console.log(error);
      return null;
    }
}
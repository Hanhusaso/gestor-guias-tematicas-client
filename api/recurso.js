import { toast } from "react-toastify";
import { BASE_PATH } from "../utils/constants";

export async function createRecursosApi(formData){
    try {
        const url = `${BASE_PATH}/recursos`;
        const params = {
            method : "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        console.log("dentro", formData);
        const response = await fetch(url, params);
        const result = response.json();
        toast.success(`Recursos guardados correctamente`);
        return result;
    } catch (error) {
        
    }
}

export async function getRecursosApi(){
    try {
        const url = `${BASE_PATH}/recursos`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        // console.log(error);
        return null;
    }
}

export async function getTodosRecursosPorColeccion(idColeccion){
    try {
        const url = `${BASE_PATH}/recursos?coleccion.id=${idColeccion}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        // console.log(error);
        return null;
    }
}

export async function deleteRecursoApi(idRecurso) {
    try {
        const url = `${BASE_PATH}/recursos/${idRecurso}`;
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
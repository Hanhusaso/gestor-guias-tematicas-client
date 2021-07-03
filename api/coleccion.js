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

export async function getColeccionesGuiaApi(recurso, idGuia){
    try{
        const url = `${BASE_PATH}/coleccions?recurso=${recurso}&&guia._id=${idGuia}`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, params);
        const result = response.json();
        return result;
    } catch(error){
        return null;
    }   
}

export async function getTodasColeccionesPorGuia(idGuia){
    try{
        const url = `${BASE_PATH}/coleccions?guia.id=${idGuia}`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, params);
        const result = response.json();
        return result;
    } catch(error){
        return null;
    }  
}

export async function createColeccionApi(formData){
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

export async function deleteColeccionApi(idColeccion) {
    try {
        const url = `${BASE_PATH}/coleccions/${idColeccion}`;
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

export async function updateColeccionesApi(id, data){
    try{
        const url = `${BASE_PATH}/coleccions/${id}`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, params);
        const result = response.json();
        console.log(result);
        return result;
    } catch(error){
        return null;
    }
}
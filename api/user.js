import { BASE_PATH } from "../utils/constants"

export function registerApi(formData){
    // console.log(formData);
}

export async function loginApi(formData){
    try{
        const url =  `${BASE_PATH}/auth/local`;
        const params = {
            method : "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        if (result.statusCode === 400) throw "El email o la contraseña son incorrectos";
        return result;
    } catch( error ){
      
        // console.log(error);
        return null;
    }
}

export async function resetPasswordApi(email) {
    try {
      const url = `${BASE_PATH}/auth/forgot-password`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      // console.log(error);
      return null;
    }
}


export async function getMeApi(logout) {
    try {
      const url = `${BASE_PATH}/users/me`;
      const result = await authFetch(url, null, logout);
      return result ? result : null;
    } catch (error) {
      return null;
    }
  }

export async function getUser(idUser) {
    try {
      const url = `${BASE_PATH}/users/${idUser}`;
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
  
  export async function updateNameApi(idUser, data, logout) {
    try {
      const url = `${BASE_PATH}/users/${idUser}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const result = await authFetch(url, params, logout);
      return result ? result : null;
    } catch (error) {
      // console.log(error);
      return null;
    }
  }
  
  export async function updateEmailApi(idUser, email, logout) {
    try {
      const url = `${BASE_PATH}/users/${idUser}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      };
      const result = await authFetch(url, params, logout);
      return result ? result : null;
    } catch (error) {
      // console.log(error);
      return null;
    }
  }
  
  export async function updatePasswordApi(idUser, password, logout) {
    try {
      const url = `${BASE_PATH}/users/${idUser}`;
      const params = {
        mode: 'no-cors',
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      };
      const result = await authFetch(url, params, logout);
      return result ? result : null;
    } catch (error) {
      // console.log(error);
      return null;
    }
  }
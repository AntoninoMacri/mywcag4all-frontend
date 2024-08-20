import axios from "axios";

export const postLogin = async (email, password) => {
  try {
    console.log("postLogin", email);
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}auth/login`, { email, password });

    /*
    console.log("arrivo3", res.data);
    res.data = { ...res.data, token: "token", user: "user" };
    console.log("arrivo3", res.data);*/

    console.log("postLogin response", res);
    return res.data;
  } catch (err) {
    console.error("Errore in api.auth", err);
    throw err;
  }
};

export const postRegister = async (formData) => {
  try {
    console.log("postRegister formData", formData);
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}auth/register`, formData);
    console.log("postRegister response", res);
    return res.data;
  } catch (err) {
    console.error("Errore in api.auth", err);
    throw err;
  }
};

/*

import client from "./client"; // Importa il client Axios personalizzato

// Funzione per eseguire il login
export const postLogin = async (email, password) => {
  try {
    console.log("postLogin email", email); // Debugging
    const response = await client.post("/auth/login", { email, password });
    console.log("postLogin response", response); // Debugging
    return response.data;
  } catch (err) {
    console.error("Errore in api.auth (postLogin)", err);
    throw err;
  }
};

// Funzione per registrare un nuovo utente
export const postRegister = async (formData) => {
  try {
    console.log("postRegister formData", formData); // Debugging
    const response = await client.post("/auth/register", formData);
    console.log("postRegister response", response); // Debugging
    return response.data;
  } catch (err) {
    console.error("Errore in api.auth (postRegister)", err);
    throw err;
  }
};

// Funzione per cambiare la password
export const postChangePassword = async (email) => {
  try {
    console.log("postChangePassword email", email); // Debugging
    const response = await client.post("/auth/change_password", { email });
    console.log("postChangePassword response", response); // Debugging
    return response.data;
  } catch (err) {
    console.error("Errore in api.auth (postChangePassword)", err);
    throw err;
  }
};
*/

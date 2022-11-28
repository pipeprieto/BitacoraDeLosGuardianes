import axios from "axios";
import { villanos } from "../../config/supers";


let url = "https://localhost:7046";
const localstorage = window.localStorage.getItem("villanos");

export const getVillainList =  () => {
  try {
    if (localstorage === null) {
      window.localStorage.setItem("villanos", JSON.stringify(villanos));
    }
    let supers = JSON.parse(window.localStorage.getItem("villanos"));
    return supers;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getVillainById = async (id) => {
  try {
    const res = await axios.get(
      `${url}/api/v1/supers/villano/${id}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getVillainByName = async (name) => {
  try {
    const res = await axios.get(
      `${url}/api/v1/supers/villano/${name}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getVillainByOrigin = async (origin) => {
  try {
    const res = await axios.get(
      `${url}/api/v1/supers/villanoByOrigen/${origin}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getVillainByWeaknesses = async (weaknesses) => {
  try {
    const res = await axios.get(
      `${
        url
      }/api/v1/supers/villanoByDebilidades/${weaknesses}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWorstYoungVillain = async () => {
  try {
    const res = await axios.get(
      `${url}/api/v1/supers/worstVillainAgainstTeen`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWorstVillainWithYoungHero = async (id) => {
  try {
    const res = await axios.get(
      `${
        url
      }/api/v1/supers/WorstVillainAgainstTeenHero/${id}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

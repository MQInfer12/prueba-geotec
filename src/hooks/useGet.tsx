import { useEffect, useState } from "react"
import { http } from "../constants/http";

const getFromLocalStorage = <T,>(key: string): T | null => {
  const local = JSON.parse(localStorage.getItem(key) || "null");
  if(local) {
    const now = new Date();
    const expired = (now.getTime() - local.expires) > (2 * 60 * 60 * 1000);
    if(expired) {
      return null;
    } else {
      return local.data;
    }
  }
  return null;
}

/**
 * El custom hook useGet realiza peticiones a la API especificada en constants/http,
 * el mismo se encarga de guardar las peticiones ya realizadas en el localStorage y comprobar
 * si ya existen datos guardados para reponerlos.
 * @param {string} route la ruta de la API a la que se hará la petición
 */
export const useGet = <T,>(
  route: string
) => {
  const [res, setRes] = useState<T | null>(getFromLocalStorage(route));

  useEffect(() => {
    const getData = async () => {
      try {
        const fullRoute = `${http}${route}`;
        const response = await fetch(fullRoute, {
          headers: {
            "Authorization": "Bearer " + import.meta.env.VITE_GITHUB_TOKEN
          }
        });
        if(response.ok) {
          const json: T = await response.json();

          const now = new Date();
          localStorage.setItem(route, JSON.stringify({
            data: json,
            expires: now.getTime()
          }));

          setRes(json);
        }
      } catch (e) {
        console.log(e);
      }
    }
    
    const data = getFromLocalStorage<T>(route);
    if(data) {
      setRes(data);
    } else {
      getData();
    }
  }, [route]);

  return res;
}
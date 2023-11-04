import { useEffect, useState } from "react"
import { http } from "../constants/http";

export const useGet = <T,>(
  route: string
) => {
  const [res, setRes] = useState<null | T>(null);

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
          setRes(json);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [route]);

  return res;
}
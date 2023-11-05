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
    
    const local = JSON.parse(localStorage.getItem(route) || "null");
    if(local) {
      const now = new Date();
      const expired = (now.getTime() - local.expires) > (2 * 60 * 60 * 1000);
      if(expired) {
        getData();
      } else {
        setRes(local.data);
      }
    } else {
      getData();
    }
  }, [route]);

  return res;
}
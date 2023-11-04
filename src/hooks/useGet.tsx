import { useEffect, useState } from "react"
import { http } from "../constants/http";

export const useGet = <T,>(
  route: string
) => {
  const local = JSON.parse(localStorage.getItem(route) || "null");
  let expired: boolean = true;
  if(local) {
    const now = new Date();
    expired = (now.getTime() - local.expires) > (1000 * 20)
  }
  const [res, setRes] = useState<null | T>(expired ? null : local.data);

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
    
    if(!res) {
      console.log("llamando a la api")
      getData();
    }
  }, [route]);

  return res;
}
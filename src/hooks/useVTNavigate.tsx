import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom"

/**
 * Utiliza ViewTransitionAPI si está disponible para realizar una animación entre páginas
 */
export const useVTNavigate = () => {
  const nav = useNavigate();

  /**
   * Navegar entre rutas con ViewTransitionAPI
   * @param {string} to ruta a la cual se navegará
   */
  const navigate = (to: string) => {
    if(document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          nav(to);
        })
      })
    } else {
      nav(to);
    }
  }

  return navigate;
}
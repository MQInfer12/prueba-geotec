import styled from "styled-components"
import Button, { ButtonType } from "../../../components/button"

interface Props {
  page: number
  nextPage: () => void
  previousPage: () => void
  max: number
}

const PageSelector = ({ nextPage, page, previousPage, max }: Props) => {
  return (
    <Container>
      <Button 
        onClick={previousPage} 
        type={ButtonType.primary} 
        icon="fa-solid fa-chevron-left"
        disabled={page === 1}
      >{""}</Button>
      <p>Página {page}</p>
      <Button 
        onClick={nextPage} 
        type={ButtonType.primary} 
        icon="fa-solid fa-chevron-right"
        disabled={page === max}
      >{""}</Button>
    </Container>
  )
}

export default PageSelector

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > p {
    opacity: 0.6;
  }
`;
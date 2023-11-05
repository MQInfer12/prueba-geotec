import { useState } from "react";
import { useGet } from "../../../hooks/useGet"
import { RepositoriesData } from "../interfaces/repositories";
import styled from "styled-components";
import RepositorieCard from "./repositorieCard";
import PageSelector from "./pageSelector";
import { maxRepos } from "../../../constants/maxRepos";

interface Props {
  url: string
  max: number
}

const Repositories = ({ url, max }: Props) => {
  const [page, setPage] = useState(1);
  const repositoriesData = useGet<RepositoriesData>(`${url}?per_page=${maxRepos}&page=${page}`);

  if(!repositoriesData) return <div>Cargando repositorios...</div>
  return (
    <Container>
      <h2>Repositorios</h2>
      <PageSelector 
        page={page}
        nextPage={() => setPage(page + 1)}
        previousPage={() => setPage(page - 1)}
        max={max}
      />
      <CardsContainer>
        {
          repositoriesData.map(repos => (
            <RepositorieCard key={repos.id} repos={repos}  />
          ))
        }
      </CardsContainer>
    </Container>
  )
}

export default Repositories

const Container = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 48px;
  column-gap: 32px;
`;
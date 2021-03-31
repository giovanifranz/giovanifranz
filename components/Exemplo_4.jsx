import { Container } from "react-bootstrap";
import { GithubGist } from "react-gistlab";
import { Button } from 'react-bootstrap'

export default function exemplo_4(props) {

  return (
    <div className="exemplo">
      <h1>Exemplo 4 - NextJS + React</h1>
      <Container className="gist">
        <GithubGist
          url="https://gist.github.com/giovanifranz/1468e4c3df2b4274a5cc7d9dcfce1e60"
          Loading={() => <p>Carregando...</p>}
        />
        <Button variant="outline-primary" onClick={props.voltar}>Retornar</Button>
      </Container>
    </div>
  )
}
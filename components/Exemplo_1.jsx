import { Container } from "react-bootstrap";
import { GithubGist } from "react-gistlab";
import { Button } from 'react-bootstrap';

export default function exemplo_1(props) {

  return (
    <div className="exemplo">
      <h1>Exemplo 1 - Linguagem C</h1>
      <Container className="gist">
        <GithubGist
          url="https://gist.github.com/giovanifranz/89891ee5d3b2270d2687f005316b8d82"
          Loading={() => <p>Carregando...</p>}
        />
        <Button variant="outline-primary" onClick={props.voltar}>Retornar</Button>
      </Container>
    </div>
  )
}
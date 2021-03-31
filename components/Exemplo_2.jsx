import { Container } from "react-bootstrap";
import { GithubGist } from "react-gistlab";
import { Button } from 'react-bootstrap'

export default function exemplo_2(props) {

  return (
    <div className="exemplo">
      <h1>Exemplo 2 - Johnny-Five</h1>
      <Container className="gist">
        <GithubGist
          url="https://gist.github.com/giovanifranz/ed9e4e4a9fdb92c43e9894a6683c6c4f"
          Loading={() => <p>Carregando...</p>}
        />
        <Button variant="outline-primary" onClick={props.voltar}>Retornar</Button>
      </Container>
    </div>
  )
}
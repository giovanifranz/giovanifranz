import { Container } from "react-bootstrap";
import { GithubGist } from "react-gistlab";
import { Button } from 'react-bootstrap'
export default function exemplo_3(props) {

  return (
    <div className="exemplo">
      <h1>Exemplo 3 - Johnny-Five + Socket.IO</h1>
      <Container className="gist">
        <GithubGist
          url="https://gist.github.com/giovanifranz/a2b2d37a3d8dc4367f532a627a8f6c48"
          Loading={() => <p>Carregando...</p>}
        />
        <GithubGist
          url="https://gist.github.com/giovanifranz/04e3f19ce7c6ea2c589c15196f4e8ad7"
          Loading={() => <p>Carregando...</p>}
        />
        <Button variant="outline-primary" onClick={props.voltar}>Retornar</Button>
      </Container>
    </div>
  )
}



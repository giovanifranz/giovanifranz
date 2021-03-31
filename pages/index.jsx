import Academico from '../components/Academico'
import Profissional from '../components/Profissional'
import Expertise from '../components/Epertise'
import Links from '../components/Links'
import Profile from '../components/Profile'
import Exemplo1 from '../components/Exemplo_1'
import Exemplo2 from '../components/Exemplo_2'
import Exemplo3 from '../components/Exemplo_3'
import Exemplo4 from '../components/Exemplo_4'
import Head from 'next/head'
import { Container } from 'react-bootstrap';
import { useState } from 'react'

export default function Home() {
  const [selection, setSelection] = useState("")

  let page = (<><Academico></Academico><Profissional></Profissional></>);

  function voltar() {
    setSelection("0")
  }

  switch (selection) {
    case '1':
      page = (<Exemplo1 voltar={voltar}></Exemplo1>)
      break;
    case '2':
      page = (<Exemplo2 voltar={voltar}></Exemplo2>)
      break;
    case '3':
      page = (<Exemplo3 voltar={voltar}></Exemplo3>)
      break;
    case '4':
      page = (<Exemplo4 voltar={voltar}></Exemplo4>)
      break;
    default:
      page = (<><Academico></Academico><Profissional></Profissional></>);
  }
  return (

    <div className="root">
      <Head>
        <title>Curriculum Giovani Franz</title>
        <meta name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Container className="container flex">
        <div className="section">
          <Profile></Profile>
          <img className="linha-perfil" src="/line_profile.png" alt="Linha de quebra" />
          <Links></Links>
          <img className="linha-perfil" src="/line_profile.png" alt="Linha de quebra" />
          <Expertise></Expertise>
          <img className="linha-perfil" src="/line_profile.png" alt="Linha de quebra" />
          <div className="listas">
            <h1 className="tittle-section ">Exemplos - Gists</h1>
            <div className="lista">
              <li> <button  onClick={() => setSelection("1")}> C</button></li>
              <li> <button  onClick={() => setSelection("2")}>Johnny-Five</button></li>
              <li> <button  onClick={() => setSelection("3")}>Johnny-Five + Socket.IO</button></li>
              <li> <button  onClick={() => setSelection("4")}>NextJS + React</button></li>
            </div>
          </div>
        </div>
        <article className="article">
          <div className="title">
            <h1>Giovani Franz</h1>
            <h2>Autônomo</h2>
          </div>
          {page}
        </article>
      </Container>
    </div>
  )
}
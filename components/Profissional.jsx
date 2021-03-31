export default function profissional() {

    return (
        <div className="profissional">
            <h1>Principais Experiências</h1>
            <ul>
                <li>
                    <h2>Highlander Tech RS</h2>
                    <p>Highlander Tech é uma empresa fundada por mim, onde trabalho fazendo a montagem e manutenção de computadores, revendendo componentes em diversas plataformas como OLX e Mercado Livre.</p>
                </li>
                <li>
                    <h2>Automata Engenharia</h2>
                    <p>A Autômata é uma empresa do segmento de Automação Industrial, com grande atuação no setor de serviços (Projetos de Automação e Software de Controle) e Montagem de Painéis/Quadros de Comando e Automação.</p>
                    <ul className="itens">
                        <li>Programação de CLP (Altus, Phoenix);</li>
                        <li>Programação de sistema de supervisão Elipse SCADA e alterações em Elipse E3;</li>
                        <li>Parametrização de Inversores;</li>
                        <li>Utilização de redes modbus, profibus e ethernet;</li>
                    </ul >
                </li>
                <li>
                    <h2>Parks</h2>
                    <p>Fundada em 1966, a Parks é uma empresa 100% brasileira, sediada no Distrito Industrial de Cachoeirinha, no RS.</p>
                    <p>Era responsável por atendimento de clientes por telefone ou acesso remoto, identificando e solucionando problemas em produtos PARKS.</p>
                </li>
                <li>
                    <h2>Getnet</h2>
                    <p>A Getnet é uma empresa de tecnologia do grupo Santander com soluções de pagamento para toda a cadeia do negócio, do grande ao pequeno empreendedor.</p>
                    <ul className="itens">
                        <li>Prototipagem utilizando Arduino Uno e xBee.</li>
                        <li>Pesquisa e desenvolvimento de IoT.</li>
                        <li>Estudo em torno de metodologias ágeis.</li>
                        <li>Desenvolvimento de aplicação Android.</li>
                        <li>Desenvolvimento de protótipos em CAD.</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
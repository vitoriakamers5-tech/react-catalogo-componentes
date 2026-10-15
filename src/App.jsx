import "./App.css";
import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12,
  },
  {
    nome: "Redes de Computadores",
    duracao: "800 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 8,
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "400 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas:0,
  },
  {
    nome: "Programação Web",
    duracao: "600 horas",
    modalidade: "Online",
    nivel: "Qualificação",
    vagas: 15,
  },
  {
    nome: "Banco de Dados",
    duracao: "500 horas",
    modalidade: "Online",
    nivel: "Qualificação",
    vagas: 5,
  },
  
  {
    nome: "Desenvolvimento Mobile",
    duracao: "800 horas",
    modalidade: "Online",
    nivel: "Qualificação",
    vagas: 0,
  },

];

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <section>
          <h2>Nossos cursos</h2>

          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Por que estudar tecnologia?</h2>

          <Destaque
            titulo="Aprenda fazendo"
            texto="Desenvolva projetos e pratique os conhecimentos durante sua formação."
          />

          <Destaque
            titulo="Amplie seus conhecimentos"
            texto="Explore diferentes áreas da tecnologia e descubra novas possibilidades."
          />

          <Destaque
            titulo="Prepare-se para o futuro"
            texto="Aprenda habilidades que podem ajudar no seu desenvolvimento profissional."
          />
        </section>
      </main>

      <Rodape />
    </>
  );
}

export default App;

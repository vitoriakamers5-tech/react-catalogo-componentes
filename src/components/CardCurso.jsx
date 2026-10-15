function CardCurso({
  nome,
  duracao,
  modalidade,
  nivel,
  vagas,
}) {
  return (
    <article className="card-curso">
      <h3>{nome}</h3>

      <p>
        <strong>Duração:</strong> {duracao}
      </p>

      <p>
        <strong>Modalidade:</strong> {modalidade}
      </p>

      <p>
        <strong>Nível:</strong> {nivel}
      </p>

      <p>
        <strong>
          {vagas > 0
            ? `Vagas disponíveis: ${vagas}`
            : "Turma completa"}
        </strong>
      </p>
    </article>
  );
}

export default CardCurso;

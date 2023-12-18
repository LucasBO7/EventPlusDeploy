import React from "react";
import "./NextEvent.css";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Link } from "react-router-dom";

const NextEvent = ({ evento }) => {
  function conectar(idEvent) {
    // dá pra usar a prop idEvent? testar
    alert(`Chamar o recurso para conectar: ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{evento.nomeEvento}</h2>

      <p
        className="event-card__description"
        
        data-tooltip-id={evento.idEvento}
        data-tooltip-content={evento.descricao}
        data-tooltip-place="top"
      >
        <Tooltip id={evento.idEvento} className="tooltip" />
        {evento.descricao.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(evento.dataEvento)}
      </p>


      <a
        onClick={() => {
          conectar(evento.idEvento);
        }}
        className="event-card__connect-link"
      >
        Conectar
      </a>

      <Link className="event-card__connect-link" to={"/detalhes-evento"} state={evento}>
        Ver detalhes
      </Link>
    </article>
  );
};

export default NextEvent;

import React from "react";
import "./EventoAnterior.css";
import api, { eventsResource } from "../../Services/Service";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";
import { Link } from "react-router-dom";

const EventoAnterior = ({ title, description = "", eventDate = "", idEvent }) => {
  const eventoSla = {};

  async function getEvento(){
    const promise = api.get(eventsResource + "/" + idEvent);
    eventoSla = promise.data;
  }

  function conectar(idEvent) {
    // dá pra usar a prop idEvent? testar
    alert(`Chamar o recurso para conectar: ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(eventDate)}
      </p>

      <Link
        to={"/detalhes-evento"}
        state={eventoSla}
      >
        Detalhes do Evento
      </Link>
    </article>
  );
};

export default EventoAnterior;

import React from "react";
import "./TableComments.css";
// import editPen from "../../../assets/images/edit-pen.svg";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";
import { dateFormateDbToView } from "../../../Utils/stringFunctions";

// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

// import trashDelete from "../../../assets/images/trash-delete.svg";

const Table = ({ dados, userRole }) => {
  return (
    <table className="table-data">
      {/* cabeçalho */}
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Usuário
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Comentário
          </th>
        </tr>
      </thead>

      {/* corpo */}
      <tbody>
        {dados.map((comment) => {
          return (
            <tr
              className="table-data__head-row"
              key={comment.idComentarioEvento}
            >
              <td className="table-data__data table-data__data--big">
                {comment.usuario.nome}
              </td>

              <td className="table-data__data table-data__data--big">
                {comment.descricao}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

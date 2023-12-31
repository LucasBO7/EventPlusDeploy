import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import "./DetalhesEventoPage.css";
import Title from "../../components/Title/Title";
import { dateFormateDbToView } from "../../Utils/stringFunctions";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import api, { commentaryEventResource } from "../../Services/Service";
import Table from "./TableComments/TableComments";

import Spinner from "../../components/Spinner/Spinner";

export default function DescricoesEventoPage() {
  const [showSpinner, setShowSpinner] = useState(false);

  const { state } = useLocation();
  const { userData } = useContext(UserContext);
  const [commentaries, setCommentaries] = useState([]);

  useEffect(() => {
    setShowSpinner(true);
    async function getEventComments() {
      console.log(state);
      // Mostrar todos os comentários
      if (userData.role === "Administrador") {
        const promise = await api.get(
          `/ComentariosEvento?id=${state.idEvento}`
        );
        const commentariesGet = promise.data;
        setCommentaries(commentariesGet);
      }
      if (userData.role === "Comum") {
        // Mostrar os comentários permitidos pela IA do Content Moderator
        const promise = await api.get(
          `${commentaryEventResource}/ListarSomenteExibe?id=${state.idEvento}`);
        console.log(promise.data);
        setCommentaries(promise.data);
      }
    }
    
    getEventComments();
    setShowSpinner(false);
  }, [userData]);

  return (
    <>
      <MainContent>
        {showSpinner ? <Spinner /> : null}

        <section className="cadastro-evento-section">
          <Container>
            {userData.role === "Administrador" ? <a href="/eventos">Voltar</a> : <a href="/eventos-aluno">Voltar</a>}
            

            {/* Impressão dos dados do evento */}
            <div>
              <Title titleText={state.nomeEvento} />

              <section className="detalhes-evento-section">
                <label className="title">Descrição</label>
                <p>{state.descricao}</p>

                <label className="title">Data do evento</label>
                <p>{dateFormateDbToView(state.dataEvento)}</p>

                <label className="title">Tipo do evento</label>
                <p>{state.tiposEvento.titulo}</p>

                <label className="title">Instituição</label>
                <p>{state.instituicao.nomeFantasia}</p>
              </section>
            </div>

            {/* Comentários */}
          </Container>
        </section>
        <section className="lista-eventos-section">
          <Container>
            <Title
              additionalClass="comments-evento-section"
              titleText={"Comentários"}
              color={"white"}
            />

            <Table dados={commentaries} />
          </Container>
        </section>
      </MainContent>
    </>
  );
}

// export default DescricoesEventoPage;

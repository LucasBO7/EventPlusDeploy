import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import "./DetalhesEventoPage.css";
import Title from "../../components/Title/Title";
import { useEffect } from "react";

export default function DescricoesEventoPage() {
  const { state } = useLocation();

  useEffect(() => {

  }, [])

  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            {/* Impressão dos dados do evento */}
            <div>
              <Title titleText={state.nomeEvento} />

              <section className="detalhes-evento-section">
                <label className="title">Descrição</label>
                <p>{state.descricao}</p>

                <label className="title">Data do evento</label>
                <p>{state.dataEvento}</p>

                <label className="title">Tipo do evento</label>
                <p>{state.tiposEvento.titulo}</p>

                <label className="title">Instituição</label>
                <p>{state.instituicao.nomeFantasia}</p>
              </section>
            </div>

            {/* Comentários */}
            <section>
              <Title additionalClass="comments-evento-section" titleText={"Comentários"} />



            </section>
          </Container>
        </section>
      </MainContent>
    </>
  );
}

// export default DescricoesEventoPage;

import { useLocation } from 'react-router-dom';
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import api, { eventsResource } from "../../Services/Service";
import './DescricoesEventoPage.css';
import { useEffect, useState } from 'react';

export default function DescricoesEventoPage() {
    const { state } = useLocation();
    const [evento, setEvento] = useState();

    useEffect(() => {
        // Busca um evento pelo seu ID
        async function getEventById(idEvento) {
            // const promise = await api.get(`${eventsResource}/${idEvento}`);

            // /Evento/{id}
            const promise = await api.get(`Evento/${idEvento}`);
            setEvento(promise.data);
            console.log(evento);
        }

        getEventById(state);
    }, [])





    return (
        <>
            <MainContent>
                <Container>
                    <h2>Descrições do Evento de id: {state}</h2>
                    {/* <p>{evento.nomeEvento}</p> */}
                </Container>
            </MainContent>
        </>
    );
};

// export default DescricoesEventoPage;

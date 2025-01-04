# Event Plus

**Event Plus** é uma aplicação web desenvolvida com **React JS**, que vai além do gerenciamento de eventos, permitindo a conexão entre participantes, inscrições e coleta de feedbacks. A plataforma possui dois tipos de usuários: **Administrador**, com controle total sobre os eventos, e **Comum**, que pode interagir e comentar nos eventos.

## 🔧 Funcionalidades

### Administrador 👑:
- **Gerenciar Tipos de Evento**: Adicionar, editar, remover e listar os tipos de eventos.
- **Gerenciar Eventos**: Criar, editar, remover, visualizar e listar eventos.
- **Moderação de Comentários**: Filtrar e moderar comentários agressivos, que ficam visíveis apenas para administradores com serviços da Azure.

### Usuário Comum 👥:
- **Visualizar Eventos**: Consultar eventos que já ocorreram, estão ocorrendo ou vão ocorrer.
- **Inscrever-se em Eventos**: Participar de eventos futuros.
- **Comentar em Eventos**: Deixar comentários em eventos passados. O sistema filtra comentários agressivos, permitindo que apenas administradores vejam os comentários moderados.

## 🛠️ Tecnologias Utilizadas

- **React JS**: Framework para construção da interface. 
- **Redux**: Gerenciamento de estado da aplicação.
- **Axios**: Comunicação com a API.
- **CSS/Tailwind CSS**: Estilização da interface.
- **Serviço Moderador de Conteúdo - Azure**: serviço da Azure para moderar os comentários, não permitindo a visualização de comentários agressivos.

## 🎥 Fluxo rodando

https://github.com/user-attachments/assets/55702783-a6fb-4af9-82c9-efe6cc261852


  

## 🖥️ Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/event-plus.git
    ```

2. Instale as dependências:
    ```bash
    cd event-plus
    npm install
    ```

3. Inicie a aplicação:
    ```bash
    npm start
    ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

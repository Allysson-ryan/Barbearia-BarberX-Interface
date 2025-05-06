# BarberX - Interface do Cliente e Painel Administrativo 💈

Este repositório contém o frontend do BarberX, uma aplicação moderna para barbearias que desejam oferecer uma experiência digital de agendamento de serviços, com uma interface intuitiva tanto para clientes quanto para administradores.

Deploy BarberX Cliente: https://barberx-cliente.netlify.app/

Deploy BarberX Admin: https://admin-barberx.netlify.app/entrar
<br></br>
Backend: https://github.com/Allysson-ryan/Barbearia-BarberX-Backend

## 📦 Estrutura

- `frontend/` → Interface pública para clientes
- `admin/` → Painel administrativo

## ✨ Funcionalidades

### Cliente (Frontend)

- Visualização de informações da barbearia (nome, endereço, horários, contato)
- Galeria de imagens e serviços
- Depoimentos de clientes
- Mapa interativo com localização
- Formulário de agendamento online (nome, email, data, horário, serviço)
- Confirmação de agendamento na tela
- Horários ocupados ocultados para evitar conflitos

### Administrador (Painel Admin)

- Login/autenticação no painel admin
- Visualização de agendamentos por dia com filtro
- Cadastro e remoção de horários de atendimento
- Registro de atendimentos concluídos com filtros por nome ou data
- Edição de senha do administrador

## 📋 Requisitos

### Funcionais

- Cliente pode visualizar informações e agendar horários
- Sistema esconde horários já ocupados
- Admin pode gerenciar horários e atendimentos

### Regras de Negócio

- Agendamentos não podem ser no passado
- Cada serviço tem duração de 1h
- Um email por agendamento em um mesmo horário
- Admin autenticado acessa painel seguro

## 💻 Tecnologias

- ReactJs
- Vite
- React Router DOM
- Mantine UI + Material UI (MUI)
- Styled Components
- React Hook Form
- Axios
- JWT Decode
- Day.js

## Screenshot

### Interface do Cliente:

![screenshot](/frontend/src/assets/screenshotInterface.png)

<br><br/>

### Painel Administrativo:

![screenshot](/adminInterface/src/assets/AdminFoto.png)

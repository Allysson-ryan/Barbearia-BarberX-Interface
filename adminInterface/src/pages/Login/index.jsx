import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Notification } from "@mantine/core";
import { loginAdmin } from "../../Service/api"; // Importando a função de login
import {
  BoxInput,
  Container,
  Form,
  Title,
  BoxButton,
  Button,
  LoginRedirect,
  InformationLogin,
  TitleInformationLogin,
  BoxInformation,
} from "./style";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import { Info } from "@phosphor-icons/react";

export function Login() {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm({
    initialValues: {
      nome: "",
      senha: "",
    },
    validate: {
      nome: (value) => (value.trim() ? null : "O nome é obrigatório"),
      senha: (value) =>
        value.length >= 6 ? null : "A senha deve ter pelo menos 6 caracteres",
    },
  });

  const handleSubmit = async (values) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");

      const response = await loginAdmin(values);

      if (!response || !response.token) {
        throw new Error("Token não encontrado na resposta da API.");
      }

      login(response);
      setSuccessMessage("Login realizado com sucesso!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Container>
        <BoxInput>
          <Title>Entrar</Title>

          {errorMessage && (
            <Notification color="red" onClose={() => setErrorMessage("")}>
              {errorMessage}
            </Notification>
          )}

          {successMessage && (
            <Notification color="green" onClose={() => setSuccessMessage("")}>
              {successMessage}
            </Notification>
          )}

          <Form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Nome cadastrado"
              placeholder="Digite seu nome"
              {...form.getInputProps("nome")}
              error={form.errors.nome}
            />
            <TextInput
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              mt="md"
              {...form.getInputProps("senha")}
              error={form.errors.senha}
            />
            <BoxButton>
              <Button type="submit" mt="md">
                Entrar
              </Button>
            </BoxButton>

            <LoginRedirect>
              <p>
                Não possui conta?
                <Link to="/cadastrar">Clique aqui para se registrar</Link>
              </p>
            </LoginRedirect>
          </Form>
          <InformationLogin>
            <TitleInformationLogin>
              <Info size={17} color="#b09a7b" />
              <h3>Para teste</h3>
            </TitleInformationLogin>
            <BoxInformation>
              <h4>Nome: teste admin</h4>
              <h4>Senha: 123456</h4>
            </BoxInformation>
          </InformationLogin>
        </BoxInput>
      </Container>
    </>
  );
}

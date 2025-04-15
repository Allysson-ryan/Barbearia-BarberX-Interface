import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Notification } from "@mantine/core";
import {
  BoxInput,
  Container,
  Form,
  Title,
  BoxButton,
  Button,
  LoginRedirect,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { cadastrarAdmin } from "../../Service/api";

function PasswordField({ label, placeholder, ...props }) {
  return <PasswordInput label={label} placeholder={placeholder} {...props} />;
}

export function Cadastrar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nome: "",
      senha: "",
      confirmarSenha: "",
    },
    validate: {
      nome: (value) => (value.trim() ? null : "O nome é obrigatório"),
      senha: (value) =>
        value.length >= 6 ? null : "A senha deve ter pelo menos 6 caracteres",
      confirmarSenha: (value, values) =>
        value !== values.senha ? "As senhas não coincidem" : null,
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await cadastrarAdmin({ nome: values.nome, senha: values.senha });
      setSuccess(true);
      setTimeout(() => navigate("/entrar"), 1000);
    } catch (error) {
      const backendMessage =
        error.response?.data?.error || "Erro, tente novamente mais tarde.";
      setError(backendMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <BoxInput>
          <Title>Registrar</Title>
          {error && (
            <Notification
              color="red"
              title="Erro"
              onClose={() => setError(null)}
            >
              {error}
            </Notification>
          )}
          {success && (
            <Notification
              color="green"
              title="Sucesso"
              onClose={() => setSuccess(null)}
            >
              O administrador foi cadastrado com sucesso!
            </Notification>
          )}
          <Form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Nome"
              placeholder="Digite seu nome"
              {...form.getInputProps("nome")}
              error={form.errors.nome}
            />
            <PasswordField
              label="Senha"
              placeholder="Digite sua senha"
              mt="md"
              {...form.getInputProps("senha")}
              error={form.errors.senha}
            />
            <PasswordField
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              mt="md"
              {...form.getInputProps("confirmarSenha")}
              error={form.errors.confirmarSenha}
            />
            <BoxButton>
              <Button type="submit" mt="md" loading={loading}>
                {loading ? "Registrando..." : "Cadastrar"}
              </Button>
            </BoxButton>

            <LoginRedirect>
              <p>
                Já possui conta?
                <Link to="/entrar"> Clique aqui para entrar</Link>
              </p>
            </LoginRedirect>
          </Form>
        </BoxInput>
      </Container>
    </>
  );
}

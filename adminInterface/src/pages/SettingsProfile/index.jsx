import {
  BoxButtonEdit,
  BoxUser,
  ButtonEdit,
  Container,
  ProfileContainer,
  BoxInput,
  Form,
  Title,
  BoxButton,
  Button,
} from "./style";
import { UserCircle, SignOut } from "@phosphor-icons/react";
import EditIcon from "../../assets/icon/EditIcon.svg";
import { useDisclosure } from "@mantine/hooks";
import { Modal, TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/useAuth";

function PasswordField({ label, placeholder, ...props }) {
  return <PasswordInput label={label} placeholder={placeholder} {...props} />;
}

export function SettingsProfile() {
  const { logout } = useAuth();

  const [opened, { open, close }] = useDisclosure(false);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("barberx:userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setAdminName(parsedData.nome || "Usuário");
    }
  }, []);

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

  const handleSubmit = (values) => {
    console.log("Valores do formulário:", values);
  };

  return (
    <Container>
      <ProfileContainer>
        <BoxUser>
          <UserCircle size={90} />
          <h3>{adminName}</h3>
        </BoxUser>
        <BoxButtonEdit>
          <ButtonEdit variant="default" onClick={open}>
            <img src={EditIcon} />
            <span>Editar Senha</span>
          </ButtonEdit>
          <ButtonEdit variant="default" onClick={logout}>
            <SignOut size={23} />
            <span>Sair do perfil</span>
          </ButtonEdit>
        </BoxButtonEdit>
      </ProfileContainer>

      <Modal opened={opened} onClose={close}>
        <BoxInput>
          <Title>Editar Senha</Title>
          <Form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Seu nome do perfil"
              placeholder="Digite seu nome de perfil"
              {...form.getInputProps("nome")}
              error={form.errors.nome}
            />
            <br />
            <PasswordField
              label="Nova senha"
              placeholder="Digite sua nova senha"
              mt="md"
              {...form.getInputProps("senha")}
              error={form.errors.senha}
            />

            <PasswordField
              label="Confirmar a nova senha"
              placeholder="Digite novamente sua nova senha"
              mt="md"
              {...form.getInputProps("confirmarSenha")}
              error={form.errors.confirmarSenha}
            />
            <BoxButton>
              <Button type="submit" mt="md">
                Editar
              </Button>
            </BoxButton>
          </Form>
        </BoxInput>
      </Modal>
    </Container>
  );
}

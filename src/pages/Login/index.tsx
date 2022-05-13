import { Container, FormContainer, PageTitle } from "./styles";
import Logo from "../../assets/logo.svg?component";
import { Input } from "../../components/Input";

export function Login() {
    return (
        <Container>
            <Logo />
            <PageTitle>Login</PageTitle>
            <FormContainer>
                <Input label="Teste" id="teste" />
            </FormContainer>
        </Container>
    );
}
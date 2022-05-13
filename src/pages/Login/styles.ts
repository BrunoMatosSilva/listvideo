import styled from "styled-components";
import { Title } from "../../components/Title";

export const Container = styled.main`
background: ${({ theme }) => theme.background};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
padding: 1rem;
overflow-y: auto;

> svg {
    width:8rem;
}
`;

export const PageTitle = styled(Title)`
font-size: 1.5rem;
margin-left: 1.2rem;
align-self: flex-start;

&::before{
width: 0.8rem;
height: 0.8rem;
border-radius: 0.2rem;
left: -1.2rem;
}
`;

export const FormContainer = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`;
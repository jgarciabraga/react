import React from "react";
import styled from "styled-components";
import {
  DivForm,
  Form,
  DivInput,
  Input,
  DivLabel,
  Label,
  DivBtn,
  Button,
} from "../components/form/FormComponents";

export const DivPage = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
  width: 100vw;
`;

export const DivLeft = styled.div`
  grid-column: 1;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #cae1ff;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cae1ff;
  height: 30%;
  width: 45%;
  font-family: var(--font-logo);
  font-size: 3rem;
  color: #07689f;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
`;

export const DivRight = styled.div`
  grid-column: 2;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: red;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  box-shadow: -10px -5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export default function Login() {
  return (
    <div>
      <DivPage>
        <DivLeft>
          <DivImage>Jupiter & BonaDea</DivImage>
        </DivLeft>
        <DivRight>
          <DivForm>
            <Form>
              <DivLabel>
                <Label>Email:</Label>
              </DivLabel>
              <DivInput>
                <Input type="email"></Input>
              </DivInput>
              <DivLabel>
                <Label>Senha:</Label>
              </DivLabel>
              <DivInput>
                <Input type="password"></Input>
              </DivInput>
              <DivBtn>
                <Button>Login</Button>
              </DivBtn>
            </Form>
          </DivForm>
        </DivRight>
      </DivPage>
    </div>
  );
}

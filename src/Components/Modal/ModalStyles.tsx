import styled from "styled-components";

export interface ModalProps {
  active: boolean;
  message?: string;
}

export const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  width: 260px;
  box-shadow: 1px 1px 1px black;
  padding: 1.5em;
  margin-left: -130px;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  left: 50%;
  margin-top: ${(props: ModalProps) => (!props.active ? "0" : "50vh")};
  transform: ${(props: ModalProps) =>
    !props.active ? "translateY(-100%)" : "translate(0)"};

  @media only screen and (min-width: 700px) {
    width: 600px;
    margin-left: -300px;
  }
`;

export const ModalText = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

export const ModalLink = styled.h3`
  text-align: center;
  color: #000;
  padding: 0.5rem;
  font-family: "Quicksand", sans-serif;
  border: none;
  font-size: 0.8rem;
  background-color: #ccc;
  font-weight: bolder;
  filter: drop-shadow(1px 1px 1px #ffffff);

  text-decoration: none;
  &:hover {
    background-color: #ffca20;
    transition: 0.4s ease-in-out;
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`;

import styled from "styled-components";
import {ModalProps} from "../../Modal/ModalStyles";

export const ModalBox = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: #fff;
  box-shadow: 0 1px 10px #fffbfb, 0 0 0 2px #ffffffeb;
  padding: 1.5em;
  margin-left: -130px;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  left: 50%;
  margin-top: 15vh;
  border-radius: 20px;
  transform: ${(props: ModalProps) =>
          !props.active ? "translateY(-1000%)" : "translate(0)"};

  @media only screen and (min-width: 700px) {
    width: 600px;
    margin-left: -300px;
  }

  p {
    margin: .3rem 0;
    font-size: 1rem;
  }

  select {
    width: 100%;
    border: none;
    height: 2rem;
    background-color: #ebeaea;
    margin: .6rem 0;
    color: #000000;
    font-size: 1.3rem;
  }
  div{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    
  }
  i{
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const Label = styled.p`
font-weight: bold;
  padding-top: .3rem;
  font-size: 1.1rem;
`
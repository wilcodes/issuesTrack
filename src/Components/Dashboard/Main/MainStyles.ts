import styled from "styled-components";

export const Box = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  background-color: #fff;
  grid-area: 1 / 2 / 2 / 6;
  padding-top: 35px;

  box-sizing: border-box;
  @media only screen and (min-width: 850px) {
    padding-left: 20px;
  }
  h3 {
    font-weight: bold;
    color: #000;
    font-size: 2rem;
  }
`;

export const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  padding: 0.4rem;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InnerBoxText = styled.div`
  padding-top: 20px;
`;

export const AddButton = styled.button`
  font-size: 1rem;
  border: 2px solid #19263c;

  padding: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 400;
  box-shadow: 0 1px 7px #b9b6b6, 0 0 0 2px #ffffffeb;

  background-color: transparent;
  color: #000;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
    background-color: #19263c;
  }

  @media only screen and (min-width: 700px) {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    padding: 0.6rem;
  }
`;

export const RecordsBox = styled.div`
  padding: 1rem;
  h3 {
    margin-bottom: 1rem;
  }
`;

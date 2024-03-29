import styled from "styled-components";

export const Box = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style: none;
    box-sizing: border-box;
    justify-content: space-between;
    border: 2px solid #d8d6d6;
    border-radius: 10px;
    padding: 0.7rem 0.4rem;
    margin-top: 0.5rem;
    color: #7e7d7d;
    cursor: pointer;
    align-items: center;
  }

  li {
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
  }

  ul:hover {
    background-color: #e6e2e2;
    transition: 0.5ms ease-in-out;
  }

  @media only screen and (min-width: 700px) {
    ul {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export const LiName = styled.li`
  font-weight: bold;
  color: #000;
  font-size: 1rem;
`;

interface PropsStatus {
  active: boolean | undefined;
}

export const LiStatus = styled.li`
  width: 70%;
  background-color: ${(props: PropsStatus) =>
    props.active ? "#caf1b2" : "#ccc"};
  color: ${(props: PropsStatus) => (props.active ? "#000000" : "#000000")};
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
  padding: 0.2rem;
  @media only screen and (min-width: 700px) {
    width: 40%;
    padding: 0.3rem;
    border-radius: 20px;
  }
  @media only screen and (min-width: 1000px) {
    width: 35%;
  }
`;

export const LiDescription = styled.li`
  display: none;
  @media only screen and (min-width: 700px) {
    display: block;
  }
`;

export const LiPhone = styled.li`
  display: none;
  @media only screen and (min-width: 700px) {
    display: block;
  }
`;

export const LiEmail = styled.li`
  display: none;
  @media only screen and (min-width: 1000px) {
    display: block;
  }
`;

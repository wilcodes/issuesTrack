import styled from "styled-components";

export const Box = styled.div`
  h3 {
    color: #e9ac30;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  button {
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    text-align: left;
  }
    span{
      width: 100%;
      color: #f3f3bd;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 1rem;
    }
  
    @media only screen and (min-width: 700px) {
      span {
        display: none;
    
      }
    }
  

  button:hover {
    background-color: #cfcdcd;
    transition: 0.5ms ease-in-out;
    cursor: pointer;
    color: #000;
  }

  i {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  text-align: center;
 
  p {
    color: #f3f3bd;
    padding-bottom: 1rem;
    font-size: .7rem;
  }
  @media only screen and (min-width: 700px) {
    p{
      font-size: 1rem;
    }
  }
 
`;

interface MainBoxProps {
  isSidebarOpen: boolean;
}

export const MainBox = styled.div`
  background: linear-gradient(0deg, #19191b, 10%, #19263c);
  box-shadow: 1px 2px 2px;
  transition: all 0.5s ease-in-out;
  position: fixed;
  top: 0;
  justify-content: space-between;
  flex-flow: column nowrap;
  width: 50%;
  display: flex;
  z-index: 100;
  padding-top: .5rem;
  transform: ${(props: MainBoxProps) =>
      props.isSidebarOpen ? "translateX(0)" : "translateX(-120%)"};
  height: 100%;
  @media only screen and (min-width: 700px) {
    display: flex;
    width: 100%;
    padding-top: 50px;
    transform: translateX(0);
    position: relative;
    z-index: 1;
    height: auto;
  }
`;

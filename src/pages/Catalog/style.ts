import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    padding: 15px;
    font-weight: 400;
  }

  button {
    padding: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Board = styled.div`
  padding: 75px 15px 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

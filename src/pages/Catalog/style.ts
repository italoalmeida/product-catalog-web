import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  min-height: 105px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  h2 {
    padding: 15px;
    font-weight: 400;
  }

  button {
    padding: 5px;

    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    white-space: nowrap;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Board = styled.div`
  padding: 105px 15px 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin-bottom: 15px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;

  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 10px -5px black;
  }
`;

export const Header = styled.div`
  padding: 0 0 15px 0;

  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  padding: 0 0 15px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  font-size: smaller;

  button {
    padding: 8px;
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

export const Title = styled.div`
  padding: 0 5px 0 0;
  font-size: large;
`;

export const Price = styled.div`
  font-size: large;
  white-space: nowrap;
`;

export const Description = styled.div`
  min-height: 60px;
  height: 8vh;
  overflow: hidden;

  text-align: justify;
  font-size: smaller;

  color: rgba(0, 0, 0, 0.6);
`;

import styled from "styled-components";

export const Card = styled.div`
  max-width: 600px;
  padding: 15px;
  margin-bottom: 15px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;

  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
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
    padding: 5px;
    margin: 0 5px;

    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
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
  height: 10vh;
  overflow: hidden;

  text-align: justify;
  font-size: smaller;
`;

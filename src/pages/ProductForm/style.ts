import styled from 'styled-components';

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
`;

export const Form = styled.form`
  height: 100vh;
  padding: 75px 15px 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  #action-buttons {
    width: 100%;
    max-width: 600px;
    padding: 15px;

    display: flex;
    justify-content: space-evenly;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 0 0 25px 0;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;

  font-size: large;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 200px;
  padding: 10px;
  margin: 0 0 25px 0;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;

  font-size: large;
  line-height: 1.8rem;
  resize: vertical;
`;

export const Button = styled.button`
  min-width: 5rem;
  padding: 10px;

  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;

  cursor: pointer;

  &.cancel {
    &:hover {
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  &.save {
    color: rgba(10, 142, 126, 1);
    border-color: rgba(10, 142, 126, 0.6);

    &:hover {
      color: white;
      background-color: rgba(10, 142, 126, 0.8);
    }
  }
`;

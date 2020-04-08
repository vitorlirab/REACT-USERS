import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  padding: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    padding: 80px 120px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    section {
      display: flex;
      justify-content: center;
    }
    div {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px;
    }
  }

  button {
    padding: 1px 0;
    width: 100%;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    line-height: 40px;
    cursor: pointer;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#e02041')};
    }
  }
`;
export const Label = styled.label`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
  }
  input {
    display: none;
  }
`;
export const HomeLink = styled(Link)`
  margin-left: auto;
  width: 160px;
  height: 40px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 40px;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#e02041')};
  }
`;

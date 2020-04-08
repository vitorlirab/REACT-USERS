import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    img {
      height: 64px;
    }
    h1 {
      font-size: 20px;
      margin-left: 24px;
    }
    a {
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
    }
    button {
      height: 60px;
      width: 60px;
      border-radius: 8px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;

      &:hover {
        border-color: #999;
      }
    }
  }
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: #fff;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
      border-radius: 2px;
      padding: 20px;
      position: relative;

      a {
        text-decoration: none;

        header {
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            width: 54px;
            height: 54px;
            border-radius: 50%;
          }
          div {
            margin-left: 20px;
            display: flex;
            flex-direction: column;

            strong {
              display: block;
              font-size: 16px;
              color: #333;
            }

            span {
              font-size: 13px;
              color: #999;
              margin-top: 2px;
            }
          }
        }
      }
      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;

        &:hover {
          opacity: 0.8;
        }
      }
    }
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

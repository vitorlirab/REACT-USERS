import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

body {
  background:#F0f0f5;
  -webkit-font-smoothing:antialiased;
}

body, input ,button {
  font:12px Roboto,sans-serif;
}

input {
    width:100%;
    height:40px;
    color:#333;
    border-radius:8px;
    border: 1px solid #dcdce6;
    padding: 0 24px;
  }

`;

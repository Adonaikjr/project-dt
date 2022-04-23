
import { createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root{
    --background:#f0f2f5;
    --red:#e52e4d;
    --blue:#5429cc;

    --blue-light: #6933ff;

    --text-title:#363f5f;

    --text-body: #969cb3;
    --shape: #ffffff ;

  }

  *{
    margin:0; 
    padding: 0;
  }

  body {
    background: var(--background)

  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }



  button{
    cursor:pointer;
  }

  [disabled]{

    opacity: 0.6;
    cursor: not-allowed;
  }



  html {

   @media (max-width: 1280px) {
  font-size:87.5%;

  }

}

`

export default GlobalStyle;
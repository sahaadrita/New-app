import react from "react";
import styled from "styled-components";

const Button = styled.button`
   font: inherit;
   padding : 0.5rem 1.5rem;
   border: 1px solid #8b005d;
   color: white;
   background-color:${(props)=>props.backgroundColor};
   box-shadow: 0 0 4px rgba(0,0,0,0.26);
   cursor: pointer;
  `
  export default Button;
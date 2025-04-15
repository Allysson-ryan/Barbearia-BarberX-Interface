import { createGlobalStyle } from "styled-components";

const globalstyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: none;
        font-family: "Barlow", serif;
    }

    body {
        background-color: ${(props) => props.theme.cultured};
    }
`;

export default globalstyles;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@200;400&display=swap');
@font-face {
    font-family: 'MyFont';
    src: local('Barlow-ExtraLight'), url(./fonts/Barlow-ExtraLight.tff) format('tff');
}

html {
    height: 100%;
    width: 100%;
}

body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
}

a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
}

a:hover, a.active {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}

.highlight {
    color: ${({ theme }) => theme.primary};
}

label {
    margin: 0;
}

`

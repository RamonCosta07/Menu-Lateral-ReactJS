import styled from "styled-components";

type NavMenu = {
    showMenu: boolean;
}

export const NavMenu = styled.nav<NavMenu>`
background-color: black;
height: 100%;
width: 100%;
max-width: 380px;
padding-top: 60px;
position: absolute;
transition: all 0.5s ease-in-out;
top: 0;
left: 0;
z-index: 1;
transform: ${({ showMenu }) => showMenu ? 'translate(0%, 0%)' : 'translate(-100%, 0%)'};

ul{
    list-style: none;
    margin: 0;
    padding: 0;
}

li{
    color: white;
    font-size: 20px;
    padding: 10px 25px;
    cursor: pointer;
    margin: 5px 0;
    border-right: 2px solid black;
    transition: all 0.25s ease-out;
    &:hover{
        border-right: 5px solid tomato;
        background-color: #171717;
    }
}
`
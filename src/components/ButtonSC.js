import React,  { Component } from 'react';
import styled from 'styled-components';

class ButtonSC extends Component {
    render() {
        return(
            <StyledButton>{this.props.texto}</StyledButton>
        );
    }
}

const StyledButton = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;

    &:hover{
        background: #008CEA;
    }

    &:focus{
        box-shadow: 0 0 0 .2rem rgba(38,143,255,.5);
    }
`;

ButtonSC.defaultProps = {
    texto: " "
}
export default ButtonSC;
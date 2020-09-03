import React,  { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
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
`;

Button.defaultProps = {
    texto: " "
}
export default Button;
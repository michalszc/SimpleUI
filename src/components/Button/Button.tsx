import React, { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";

export interface ButtonProps extends StyleProps {
  size?: 'small' | 'medium' | 'large';
  /**
   * Disable button
   */
  isDisable?: boolean;
  mode?: 'filled' | 'outlined' | 'elevated' | 'text';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  margin: 1em;
  padding: ${props => props.size === 'small' ? "7.5px 15px" : (props.size === 'medium' ? "10px 20px": "15px 30px")};
  font-size: ${props => props.size === 'small' ? ".9em" : (props.size === 'medium' ? "1em": "1.3em")};
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid #50a8ff;
  color: #fff;
  background-color: #50a8ff;
  transition: transform .2s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.05);
  }

  ${({ disabled }) => disabled && css`
    &:hover, &:focus {
      transform: none;
    }
    background-color: #7e7e7e;
    border: 2px solid #7e7e7e;
    cursor: default;
  `};
`;

const OutlinedButton = styled(StyledButton)`
  color: #6e6e6e; 
  background-color: transparent;
`;

const TextButton = styled(StyledButton)`
  border: none;
  background-color: transparent;
  color: #6e6e6e; 
`;

const ElevatedButton = styled(StyledButton)`
  box-shadow: 2px 2px 5px #00000070;
`;

const Button: FC<ButtonProps> = ({ size, mode, isDisable, children, onClick, ...props }) => {
  
  if (mode === 'text') {
    return (
      <Styles {...props}>
        <TextButton type="button" size={size} disabled={isDisable} onClick={onClick}>{children}</TextButton>
      </Styles>
    );
  }
  else if (mode === 'outlined') {
    return (
      <Styles {...props}>
        <OutlinedButton type="button" size={size} disabled={isDisable} onClick={onClick}>{children}</OutlinedButton>
      </Styles>
    );
  }
  else if (mode === 'elevated') {
    return (
       <Styles {...props}>
        <ElevatedButton type="button" size={size} disabled={isDisable} onClick={onClick}>{children}</ElevatedButton>
      </Styles>
    );
  }
  else {
    return (
      <Styles {...props}>
        <StyledButton type="button" size={size} disabled={isDisable} onClick={onClick}>{children}</StyledButton>
      </Styles>
  );
}};

export default Button;

import React, { MouseEventHandler, FC } from 'react';
import styled from 'styled-components';

export interface ButtonProps{
  //color?: 'primary' | 'secondary' | 'error';
  bg?: string;
  size?: 'small' | 'medium' | 'large';
  isDisable?: boolean;
  mode?: 'filled' | 'outlined' | 'elevated' | 'text';
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-size: ${props => props.size === 'small' ? ".9em" : (props.size === 'medium' ? "1em": "1.3em")};
  font-weight: bold;
  margin: 1em;
  padding: ${props => props.size === 'small' ? "7.5px 15px" : (props.size === 'medium' ? "10px 20px": "15px 30px")};
  border-radius: 4px;
  color: ${({color}) => color ? color: '#fff'};
  border: 2px solid ${({bg}) => bg ? bg: '#50a8ff'};
  background-color: ${({bg}) => bg ? bg : '#50a8ff'};
  display: flex;
  align-items: 'center';
  flex-direction: 'row';
  justify-items: 'stretch';
  

  &:hover, &:focus{
    transform: scale(1.2);
    transition: transform .3s ease-in-out;
  }
`;

const OutlinedButton = styled(StyledButton)`
  color: ${({color}) => color ? color: '#6e6e6e'}; 
  background-color: transparent;
`;

const TextButton = styled(StyledButton)`
  border: none;
  background-color: transparent;
  color: ${({color}) => color ? color: '#6e6e6e'}; 
`;

const ElevatedButton = styled(StyledButton)`
  box-shadow: 2px 2px 5px #00000070;
`;


const Button: FC<ButtonProps> = ({bg, size, mode, isDisable, children, onClick, ...props}: ButtonProps) => {
  
  if (mode === 'text') {
    return (
      <TextButton bg={bg} size={size} disabled={isDisable} onClick={onClick}>{children}</TextButton>
    );
  }
  else if (mode === 'outlined') {
    return (
      <OutlinedButton bg={bg} size={size} disabled={isDisable} onClick={onClick}>{children}</OutlinedButton>
    );
  }
  else if (mode === 'elevated') {
    return (
      <ElevatedButton bg={bg} size={size} disabled={isDisable} onClick={onClick}>{children}</ElevatedButton>
    );
  }
  else {
    return (
      <StyledButton bg={bg} size={size} disabled={isDisable} onClick={onClick}>{children}</StyledButton>
  );
}};

export default Button;
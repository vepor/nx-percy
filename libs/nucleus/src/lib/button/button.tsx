import styled from 'styled-components';
import React from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  readonly children: React.ReactNode;

}

const StyledButton = styled.div`
  color: white;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: deeppink;
`;


export function Button({ children }: ButtonProps) {
  return (
    <StyledButton>{children}</StyledButton>
  );
}

export default Button;

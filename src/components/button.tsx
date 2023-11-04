import styled from "styled-components"
import { colors } from "../constants/colors"

export enum ButtonType {
  primary = "primary",
  secondary = "secondary"
}

interface Props {
  children: string
  onClick: () => any
  type: ButtonType
  icon?: string
}

const Button = ({ children, onClick, type, icon }: Props) => {
  return (
    <StyledButton 
      onClick={onClick}
      type={type}
    >
      {children}
      {icon && <i className={icon} />}
    </StyledButton>
  )
}

export default Button

interface StyledButtonProps {
  type: ButtonType
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${props => props.type === ButtonType.primary ? colors.primary500 : colors.white};
  color: ${props => props.type === ButtonType.primary ? colors.white : colors.primary500};
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: opacity 0.3s;
  cursor: pointer;
  display: flex;
  gap: 8px;
  white-space: nowrap;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;
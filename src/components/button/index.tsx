import React from "react";
import * as S from "./styles";

interface ButtonProps {
  padding: string;
  border: string;
  color: string;
  background: string;
  gap: string;
  animation: boolean;
  className: string;
  children: React.ReactNode;
  rest: void;
}

export const Button: React.FC<ButtonProps> = ({
  padding,
  border,
  color,
  background,
  gap,
  animation,
  children,
  className,
  ...rest
},) => {
  return (
    <S.Wrapper className={className} animation={animation} padding={padding} border={border} color={color} background={background} gap={gap}>
      <button {...rest}>{children}</button>
    </S.Wrapper>
  );
};

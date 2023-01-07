import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  (
    {
      children, // дочерний элемент, отображаемый в кнопке
      link, // ссылка
      maxWidth, // делает кнопку на 100% родителя
      className, // класс
      onClick, // событие по клику
      ...props // остальные переданные пропсы
    },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        $maxWidth={maxWidth}
        ref={ref}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;

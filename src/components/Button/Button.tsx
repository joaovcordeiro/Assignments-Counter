import { PropsWithChildren } from "react";
import style from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: PropsWithChildren<Props>) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

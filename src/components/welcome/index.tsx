import * as S from "./styles";
import { DiReact } from "react-icons/di";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

export default function Welcome() {
  return (
    <S.Wrapper>
      <h1 className="pageTitle">Ogaki</h1>

      <DiReact className="react-icon-spin" />

      <div>
        <span>Olá, me chamo Paulo.</span>
        <span>Seja bem vindo o meu cantinho</span>
      </div>

      <BsArrowRightCircle />
    </S.Wrapper>
  );
}

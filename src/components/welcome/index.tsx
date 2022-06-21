import * as S from "./styles";
import React from "react";
import { DiReact } from "react-icons/di";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Button } from "../button";
import Link from "next/link";

export default function Welcome() {
  return (
    <S.Wrapper>
      <h1 className="pageTitle">Ogaki</h1>

      <S.Left>
        <DiReact className="react-icon-spin" />
      </S.Left>

      <div className="homeDescription">
        <p>
          Olá, me chamo Paulo.
          <span>
            Seja bem vindo o meu cantinho, desenvolvido em{" "}
            <Link className="toNextDocs" href="https://nextjs.org/">
              Next Js.
            </Link>
          </span>
        </p>
      </div>

      <div className="arrowCircle"></div>

      <Link href="https://cdn.discordapp.com/attachments/978437256807325756/988802757202968607/AnaLauraNunes.pdf">
        <a>
          <Button
            padding="10px"
            background="var(--secundaryColor2)"
            color="var(--secundaryColor)"
            border="none"
            gap="20px"
            animation={true}
            className="download-button"
          >
            Baixar currículo <FaDownload />
          </Button>
        </a>
      </Link>
    </S.Wrapper>
  );
}

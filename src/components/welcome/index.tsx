import * as S from "./styles";
import React from "react";
import { DiReact } from "react-icons/di";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

interface WelcomeProps {
  screenSizeFunction: any
}

export default function Welcome({ screenSizeFunction  }: WelcomeProps) {
  const getWindowSize = screenSizeFunction()
  const { width, height } = getWindowSize

  

  function scroll (width: number, height: number) {
    const currentX = window.scrollX
    const currentY = window.scrollY

    if (width) {
      if (width < 1024) {
        scrollTo({
          top: currentY + height,
          left: 0,
          behavior: "smooth"
        })
      } else {
        scrollTo({
          top: 0,
          left: currentX + width,
          behavior: "smooth"
        })
      }
    }
  }

  return (
    <S.Wrapper onScroll={(event) => console.log(event)}>
      <h1 className="pageTitle">Ogaki</h1>

      <S.Left>
        <DiReact className="react-icon-spin" />
      </S.Left>

      <div className="homeDescription">
        <p>
          Olá, me chamo Paulo.
          <span>
            Seja bem vindo ao meu cantinho, desenvolvido em{" "}
            <a className="toNextDocs" href="https://nextjs.org/">
              Next Js.
            </a>
          </span>
        </p>
      </div>

      <div onClick={() => { scroll(width, height) }} className="arrowCircle"></div>
    </S.Wrapper>
  );
}

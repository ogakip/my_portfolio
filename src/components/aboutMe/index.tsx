import * as S from "./styles";
import { Button } from "../button";
import Link from "next/link";

interface AboutProps {
  screenSizeFunction: any
}

export default function AboutMe({ screenSizeFunction }: AboutProps) {
  const getWindowSize = screenSizeFunction()
  const { width, height } = getWindowSize
  const windowIsLoaded = typeof window !== 'undefined';

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
    <S.Wrapper>
      <h1 className="pageTitle">Sobre mim</h1>
      <div className="about-me-background"></div>
      <div className="about-description">
        <div className="who-am-i">
          <h2>Quem sou eu?</h2>
          <p>
            Paulo Henrique Marques Ogaki, 20 anos, um garoto comunicativo e que
            gosta de se enturmar. Apaixonado por tecnologia e suas áreas, mais
            especificamente da programação.
          </p>
        </div>

        <div className="what-i-do">
          <h2>O que eu faço?</h2>
          <p>
            Formado em desenvolvimento front-end utilizando HTML 5, CSS 3,
            JavaScript e a famosa biblioteca React Js, cursando em
            desenvolvimento back-end utilizando Node, SQL e Python,
            posteriormente me especializando em full-stack! meu grande objetivo
            como desenvolvedor.
          </p>
        </div>

        <div className="how-i-get-here">
          <h2>Como cheguei até aqui?</h2>
          <p>
            Desde criança tive um brilho especial por qualquer coisa que
            envolvesse tecnologia, e esse amor vem aumentando desde então.
            Sempre vasculhava aparelhos inativos para estudar o que havia lá
            dentro. Com 19 anos de vida encontrei o ramo da programação,
            experimentei por um breve tempo e me apaixonei completamente, hoje
            anseio por mais conhecimento, sempre olhando para o horizonte.
          </p>
        </div>
      </div>
      <div className="btn-box">
        <Link href="/projects">
            <a>
                <Button
                  padding="15px"
                  color="var(--secundaryColor)"
                  background="var(--secundaryColor2)"
                  border="none"
                  className=""
                  gap="none"
                  animation={false}
                >
                  Ir para projetos
                </Button>
            </a>
        </Link>
        <Link href="/contact">
            <a>
                <Button
                  padding="15px"
                  color="var(--secundaryColor)"
                  background="var(--secundaryColor2)"
                  border="none"
                  className=""
                  gap="none"
                  animation={false}
                >
                  Ir para contatos
                </Button>
            </a>
        </Link>
      </div>
      <div onClick={() => { scroll(width, height) }} className="arrowCircle"></div>
    </S.Wrapper>
  );
}

import type { NextPage } from "next";
import * as S from "../pages-styles/indexStyles";
import Welcome from "../components/welcome";
import AboutMe from "../components/aboutMe";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../components/button";
import HardSkills from "../components/skills";
import { useState, useEffect } from "react";
import useWindowSize from "../utils/getWindowSize";

const Home: NextPage = () => {
  const getWindowSize = useWindowSize();

  return (
    <S.Wrapper id="teste">
      <Welcome screenSizeFunction={useWindowSize} />
      <AboutMe screenSizeFunction={useWindowSize} />
      <HardSkills />
      <Link href="https://drive.google.com/file/d/1xizo2e31-rrZ9YNIfKbo3U26SpM8lqZQ/view?usp=sharing">
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
};

export default Home;

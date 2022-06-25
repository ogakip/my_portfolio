import type { NextPage } from "next";
import * as S from "../styles/homePageStyles";
import Welcome from "../components/welcome";
import AboutMe from "../components/aboutMe";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../components/button";
import HardSkills from "../components/skills";
import useWindowSize from "../utils/getWindowSize";
import Head from "next/head";

const Home: NextPage = () => {
  const getWindowSize = useWindowSize();

  return (
    <S.Wrapper id="teste">
      <Head>
        <title>Sobre mim</title>
      </Head>
      <Welcome screenSizeFunction={useWindowSize} />
      <AboutMe screenSizeFunction={useWindowSize} />
      <HardSkills />
        <a href="/meContrate.pdf">
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
    </S.Wrapper>
  );
};

export default Home;

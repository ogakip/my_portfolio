import * as S from "./styles";
import { Project } from "../../components/project";
import fteamImg from "../../assets/img/background-fteam.png";
import kenziehubImg from "../../assets/img/background-kenziehub.png";
import justhelpImg from "../../assets/img/background-justhelp.png";
import nukenzieImg from "../../assets/img/background-nukenzie.png";
import hamburgueriaImg from "../../assets/img/background-hamburgueria.png";
import kenzieshioImg from "../../assets/img/background-kenzieshop.png";
import { Button } from "../../components/button";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <S.Wrapper>
      <div className="nav">
        <h1>Meus projetos</h1>
        <Link href="/contact">
          <Button
            padding="10px"
            color="var(--secundaryColor)"
            gap="20px"
            animation={false}
            border="none"
            background="var(--secundaryColor2)"
            className=""
          >
            Ir para contatos
          </Button>
        </Link>
        <Link href="/">
          <Button
            padding="10px"
            color="var(--secundaryColor)"
            gap="20px"
            animation={false}
            border="none"
            background="var(--secundaryColor2)"
            className=""
          >
            Ir para sobre mim
          </Button>
        </Link>
      </div>
      <S.ListSkillsBox>
        <Project
          className=""
          title="Fteam"
          goal="Somos um estúdio de criar plataformas bonitas e intuitivas com um design estratégico e focando na experiência do usuário."
          github=""
          link="https://boisterous-pastelito-8135aa.netlify.app/"
          img={fteamImg}
        />
        <Project
          className=""
          title="Kenzie Hub"
          goal="Adicione suas tecnologias prediletas em nosso banco e gerencie seu avanço na área!"
          github="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-ogakip"
          link="https://react-entrega-s2-kenzie-hub-ogakip.vercel.app/login"
          img={kenziehubImg}
        />
        <Project
          className=""
          title="Just Help!"
          goal="Sempre quis ajudar o próximo mas não sabe por onde começar? Nossa aplicação permite organizações criarem eventos em prol da humanidade, onde você pode vê-los e participar!"
          github="https://github.com/lucascortesc/m3-capstone-grupo2"
          link="https://justhelp-capstone-m3.vercel.app/"
          img={justhelpImg}
        />
        <Project
          className=""
          title="Nu Kenzie"
          goal="Gerencie agora mesmo as suas finanças de uma maneira dinâmica e elegante!"
          github="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-ogakip"
          link="https://react-entrega-s1-nu-kenzie-ogakip.vercel.app/"
          img={nukenzieImg}
        />
        <Project
          className=""
          title="Hamburgueria"
          goal="Adicione agora mesmo no seu carrinho de compras nossos produtos listados utilizando uma aplicação externa!"
          github="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-ogakip"
          link="https://react-entrega-s1-hamburgueria-da-kenzie-ogakip.vercel.app/"
          img={hamburgueriaImg}
        />
        <Project
          className=""
          title="Kenzie Shop"
          goal="Nosso e-commerce disponibiliza para você uma lista com 130 produtos de diversas categorias, seja livre!"
          github="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-ogakip"
          link="https://react-entrega-s3-kenzieshop-ogakip.vercel.app/"
          img={kenzieshioImg}
        />
      </S.ListSkillsBox>
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
}

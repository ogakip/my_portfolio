import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { AiFillGithub } from "react-icons/ai";

interface ProjectProps {
  title: string;
  goal: string;
  img: StaticImageData;
  link: string;
  github: string;
  className: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  goal,
  img,
  link,
  github,
  className,
}) => {
  return (
    <S.Wrapper className={className}>
      <div className="goToLink">
        <Link href={link}>
          <a target="_blank">Visitar Link</a>
        </Link>
      </div>
      <S.ImageBox>
        <Image src={img.src} width="100px" height="100px" objectFit="contain" />
        <div className="goToRepo">
            <Link href={github}>
              <a target="_blank">
                <AiFillGithub className="github-icon" />
              </a>
            </Link>
            <span>Repositório</span>
        </div>
      </S.ImageBox>
      <S.DescriptionBox>
        <h2>{title}</h2>
        <p>{goal}</p>
      </S.DescriptionBox>
    </S.Wrapper>
  );
};

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
        <a href={link} rel="noreferrer" target="_blank">
          Visitar Link
        </a>
      </div>
      <S.ImageBox>
        <Image
          priority={true}
          src={img.src}
          width="100px"
          height="100px"
          alt=""
        />
        <div className="goToRepo">
          <a href={github} rel="noreferrer" target="_blank">
            <AiFillGithub className="github-icon" />
          </a>
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

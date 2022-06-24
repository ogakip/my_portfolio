import { useEffect } from "react";
import * as S from "./styles";

export default function HardSkills() {
  return (
    <S.Wrapper>
      <S.Mobile>
        <h1>Principais Capacidades</h1>
        <div className="skill-box">
          <div className="react-box">
            <h2>React Js</h2>
            <div className="react-img"></div>
          </div>
          <div className="js-box">
            <h2>Javascript</h2>
            <div className="js-img"></div>
          </div>
          <div className="css-box">
            <h2>CSS 3</h2>
            <div className="css-img"></div>
          </div>
          <div className="html-box">
            <h2>HTML 5</h2>
            <div className="html-img"></div>
          </div>
          <div className="git-box">
            <h2>GIT</h2>
            <div className="git-img"></div>
          </div>
          <div className="node-box">
            <h2>Node.js</h2>
            <div className="node-img"></div>
          </div>
        </div>
      </S.Mobile>

      <h1>Principais Competências</h1>
      <S.Desktop>
        <div className="skill-box">
          <div className="react-box">
            <h2>React Js</h2>
            <div className="react-img"></div>
          </div>
          <div className="js-box">
            <h2>Javascript</h2>
            <div className="js-img"></div>
          </div>
          <div className="css-box">
            <h2>CSS 3</h2>
            <div className="css-img"></div>
          </div>
          <div className="html-box">
            <h2>HTML 5</h2>
            <div className="html-img"></div>
          </div>
          <div className="git-box">
            <h2>GIT</h2>
            <div className="git-img"></div>
          </div>
          <div className="node-box">
            <h2>Node.js</h2>
            <div className="node-img"></div>
          </div>
        </div>
      </S.Desktop>
    </S.Wrapper>
  );
}

import type { NextPage } from "next";
import * as S from "./styles"
import Welcome from "../components/welcome";

const Home: NextPage = () => {
  return (
    <S.Wrapper>
      <Welcome/>
    </S.Wrapper>
  );
};

export default Home;

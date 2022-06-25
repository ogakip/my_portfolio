import * as S from "./styles";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { Button } from "../../components/button";
import { FaDownload } from "react-icons/fa";

export default function Contact() {

    function copyToClipboard (text: string) {
        toast.success("Copiado para a área de transferência")
        navigator.clipboard.writeText(text)
    }

  return (
    <S.Wrapper>
      <aside>
        <h1>Contatos</h1>
        <Link href="/projects">
          <Button
            padding="10px"
            color="var(--secundaryColor)"
            gap="20px"
            animation={false}
            border="none"
            background="var(--secundaryColor2)"
            className=""
          >
            Ir para projetos
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
      </aside>
      <div>
        <Link className="teste" href="https://www.linkedin.com/in/paulohenriquemarquesogaki/">
            <a target="_blank">
            <div>
              <h2>Ir para Linkedin</h2>
              <AiFillLinkedin className="linkedin-logo" />
            </div>
            </a>
        </Link>
        <a onClick={() => copyToClipboard("pauloogaki.principal@gmail.com")} href="tomail:pauloogaki.principal@gmail.com">
            <div>
              <h2>Ir para email</h2>
              <MdOutlineEmail className="email-logo" />
            </div>
        </a>
        <div onClick={(event: any) => {
            toast.success("Copiado para a área de transferência")
            navigator.clipboard.writeText("(44) 9-9992-0655")
        }}> 
          <h2>(44) 9-9992-0655</h2>
          <BsWhatsapp className="whatsapp-logo" />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
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

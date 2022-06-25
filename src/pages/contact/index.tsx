import * as S from "../../styles/contactPageStyles";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Button } from "../../components/button";
import { FaDownload } from "react-icons/fa";
import Head from "next/head";

export default function Contact() {
  function copyToClipboard(text: string) {
    toast.success("Copiado para a área de transferência");
    navigator.clipboard.writeText(text);
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Contato</title>
      </Head>
      <aside>
        <h1>Contatos</h1>
        <Link href="/projects">
          <a>
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
          </a>
        </Link>
        <Link href="/">
          <a>
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
          </a>
        </Link>
      </aside>
      <div>
        <a
          className="teste"
          href="https://www.linkedin.com/in/paulohenriquemarquesogaki/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h2>Ir para Linkedin</h2>
            <AiFillLinkedin className="linkedin-logo" />
          </div>
        </a>
        <a
          onClick={() => copyToClipboard("pauloogaki.principal@gmail.com")}
          href="tomail:pauloogaki.principal@gmail.com"
        >
          <div>
            <h2>Ir para email</h2>
            <MdOutlineEmail className="email-logo" />
          </div>
        </a>
        <div
          onClick={() => {
            toast.success("Copiado para a área de transferência");
            navigator.clipboard.writeText("(44) 9-9992-0655");
          }}
        >
          <h2>(44) 9-9992-0655</h2>
          <BsWhatsapp className="whatsapp-logo" />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <a href="/meContrate.pdf" download="meContrate">
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
}

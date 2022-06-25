import styled from "styled-components"

export const Wrapper = styled.div`
width: 100% !important;
height: 100% !important;
min-height: 100% !important;
background-color: var(--backgroundColor);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

.download-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    

    :hover {
        transform: scale(1.13);
    }
}

>aside {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;

    h1 {
        color: var(--secundaryColor);
    }
}

>div {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    >a {
        >div {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.5s ease;
            cursor: pointer;

            h2 {
                color: var(--secundaryColor);
            }

            :hover {
                transform: scale(1.13);
            }
        }
    }

    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.5s ease;
        cursor: pointer;

        h2 {
            color: var(--secundaryColor);
        }

        :hover {
            transform: scale(1.13);
        }
    }

    .linkedin-logo {
        font-size: 70px;
        color: #0a66c2;
    }
    .email-logo {
        font-size: 70px;
        color: #ff5858;
    }
    .whatsapp-logo {
        font-size: 70px;
        color: #47c041;
    }
}

@media (min-width: 1024px) {
    >aside {
    position: absolute;
    top: 30px;
    left: 30px;
    flex-direction: row;
    gap: 10px;
}
}
`
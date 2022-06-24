import styled from "styled-components"
import aboutMeImg from "../../assets/img/aboutMeImg.svg"
import arrowDown from "../../assets/img/ArrowDown.svg"
import arrowRight from "../../assets/img/ArrowRight.svg"

export const Wrapper = styled.div`
width: 100%;
min-height: calc(100% / 3 + 450px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

.pageTitle {
    color: var(--secundaryColor);
}

.arrowCircle {
    width: 40px;
    height: 40px;
    background-image: url(${arrowDown.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: toDown infinite 1s;
    animation-direction: alternate;
    cursor: pointer;
}

.btn-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;


    @media (max-width: 278px) {
        flex-direction: column;
        align-items: center;
    }
}

.about-description {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    >div {
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 90%;

        h2 {
        color: var(--primaryColor);
        }
        h3 {
            color: var(--secundaryColor);
        }

    }
    p {
        align-self: center;
        max-width: 90%;
        font-size: 15px;
        color: #176ab2;
        text-align: justify;
        text-justify: auto;
    }
}

.about-me-background {
    width: 100%;
    height: 220px;
    background-image: url(${aboutMeImg.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

@media (min-width: 1024px) {
    width: calc(100% / 3);
    height: 100%;
    position: relative;

    h1 {
        font-size: 40px;
    }

    .arrowCircle {
        background-image: url(${arrowRight.src});
        animation: toRight infinite 1s;
        animation-direction: alternate;

        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .about-description {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        padding: 0px 15px;
        gap: 10px;

        .who-am-i, .what-i-do, .how-i-get-here {
            align-self: baseline !important;
            max-width: 500px;

            >h2 {
                width: 70%;
                align-self: center;
            }

            >p {
                font-size: 16px;
                max-width: 70%;
            }
        }
    }

    .about-me-background {
        width: 30%;
        height: 40%;
    }

    .pageTitle {
        position: absolute;
        top: 30px;
        left: 30px;
    }
}

@keyframes toRight {
    0% {
        transform: translateX(5px);
    }
    35% {
        transform: translateX(-5px);
    }
    60% {
        transform: translateX(5px);
    }
    100% {
        transform: translateX(-5px);
    }
}

@keyframes toDown {
    0% {
        transform: translateY(5px);
    }
    35% {
        transform: translateY(-5px);
    }
    60% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(-5px);
    }
}
`
import styled from "styled-components"
import arrowDown from "../../assets/img/ArrowDown.svg"
import arrowRight from "../../assets/img/ArrowRight.svg"

export const Wrapper = styled.div`
width: 100%;
min-height: calc(100% / 3);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;

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

.pageTitle {
    font-size: 40px;
    color: var(--secundaryColor);
}

.homeDescription {
    min-width: 245px;
    width: 50%;
    font-size: 1.5em;
    color: var(--secundaryColor);

    a {
        :hover {
            text-decoration: underline;
        }
    }
}

.react-icon-spin {
    font-size: 200px;
    animation: spin infinite 50s;
    color: var(--primaryColor);
    transition: all 1s ease;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (min-width: 768px) {
        font-size: 300px;
    }
}

@media (min-width: 1024px) {
    width: calc(100% / 3);
    min-height: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .arrowCircle {
        background-image: url(${arrowRight.src});
        animation: toRight infinite 1s;
        animation-direction: alternate;

        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .react-icon-spin {
        font-size: 450px;
        flex: 1;
    }

    .pageTitle {
        position: absolute;
        top: 30px;
        left: 30px;
    }

    .homeDescription {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            width: 80%;
            display: flex;
            flex-direction: column;
            font-size: 35px;

            a {
                color: var(--primaryColor);
            }
        }
    }
}

@media (min-width: 1366px) {
    .react-icon-spin {
        font-size: 500px;
        max-width: 500px;
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

export const Left = styled.div`
@media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
`
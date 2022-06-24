import styled from "styled-components"
import jslogo from "../../assets/img/js-logo.svg"
import csslogo from "../../assets/img/css-logo.svg"
import htmllogo from "../../assets/img/html-logo.svg"
import reactlogo from "../../assets/img/react-logo.svg"
import nodelogo from "../../assets/img/node-logo.svg"
import gitlogo from "../../assets/img/git-logo.svg"

export const Wrapper = styled.div`
min-height: calc(100% / 3);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
background-color: var(--backgroundColor);

>h1 {
    display: none;
}

@media (min-width: 1024px) {
    width: calc(100% / 3);
    height: 100%;
    flex-direction: row;
    position: relative;

    >h1 {
        display: inline;
        color: var(--secundaryColor);
        position: absolute;
        top: 30px;
        left: 30px;
    }
}
`

export const Mobile = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;

    h1 {
        width: 100%;
        color: var(--secundaryColor);
        text-align: center;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 30px;
        color: var(--primaryColor);
        margin-bottom: 5px;
    }

>div {
    >div {
        margin-bottom: 20px;
    }
}

.skill-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .react-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .react-img {
            width: 80px;
            height: 80px;
            background-image: url(${reactlogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .js-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .js-img {
            width: 80px;
            height: 80px;
            background-image: url(${jslogo.src});
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #dddd11;
            border-radius: 5px;
        }
    }

    .css-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .css-img {
            width: 80px;
            height: 80px;
            background-image: url(${csslogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .html-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .html-img {
            width: 80px;
            height: 80px;
            background-image: url(${htmllogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .git-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .git-img {
            width: 80px;
            height: 80px;
            background-image: url(${gitlogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .node-box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .node-img {
            width: 80px;
            height: 80px;
            background-image: url(${nodelogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
}

@media (min-width: 1024px) {
    display: none;
}
`

export const Desktop = styled.div`
display: none;


@media (min-width: 1024px) {
    display: flex;

    h2 {
        font-size: 30px;
        color: var(--primaryColor);
        margin-bottom: 5px;
    }
    
    .skill-box {
        width: 500px;
        height: 500px;
        display: flex;
        position: relative;

    .react-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .react-img {
            width: 120px;
            height: 120px;
            background-image: url(${reactlogo.src});
            background-repeat: no-repeat;
            background-size: cover;
            animation: spin infinite 15s;

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }
    }

    .js-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: -10%;
        right: 50%;
        animation: moveLogo infinite 40s;

        .js-img {
            width: 80px;
            height: 80px;
            background-image: url(${jslogo.src});
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #dddd11;
            border-radius: 5px;
        }
    }

    .css-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0px;
        right: 100px;
        animation: moveLogo2 infinite 25s;

        .css-img {
            width: 80px;
            height: 80px;
            background-image: url(${csslogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .html-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 50px;
        left: 40px;
        animation: moveLogo infinite 15s;

        .html-img {
            width: 80px;
            height: 80px;
            background-image: url(${htmllogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .git-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 50%;
        right: 0%;
        animation: moveLogo2 infinite 20s;

        .git-img {
            width: 80px;
            height: 80px;
            background-image: url(${gitlogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .node-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100px;
        left: 0px;
        animation: moveLogo2 infinite 40s;

        .node-img {
            width: 80px;
            height: 80px;
            background-image: url(${nodelogo.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
}
}

@keyframes moveLogo {
    0%{
        transform: translate(0px, 0px);
    }
    14.2%{
        transform: translate(-10%, 20%);
    }
    28.4%{
        transform: translate(10%, -20%);
    }
    42.4%{
        transform: translate(-15%, 20%);
    }
    54.6%{
        transform: translate(20%, -10%);
    }
    66.8%{
        transform: translate(-20%, 10%);
    }
    79%{
        transform: translate(20%, -30%);
    }
    100%{
        transform: translate(0px, 0px);
    }
}

@keyframes moveLogo2 {
    0%{
        transform: translate(0px, 0px);
    }
    14.2%{
        transform: translate(10%, -20%);
    }
    28.4%{
        transform: translate(-10%, 20%);
    }
    42.4%{
        transform: translate(10%, -20%);
    }
    54.6%{
        transform: translate(-20%, 10%);
    }
    66.8%{
        transform: translate(20%, -10%);
    }
    79%{
        transform: translate(-20%, 10%);
    }
    100%{
        transform: translate(0px, -0px);
    }
}
`
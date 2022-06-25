import styled from "styled-components"

export const Wrapper = styled.div`
    width: 80%;
    min-width: 250px;
    max-width: 350px;
    height: 400px;
    position: relative;
    transition: all 0.5s ease;
    cursor: pointer;
    margin: 200px 20px 0px 20px;


    :hover {
        transform: scale(1.05);
    }

    .goToLink {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 5;
    
    a {
        font-weight: bold;
        color: var(--secundaryColor);
        opacity: 0.5;
    }
}
`

export const ImageBox = styled.div`
    width: 100%;
    height: 200px;
    position: relative;

    .goToRepo {
        position: absolute;
        top: -50px;
        left: 20px;
        font-size: 40px;
        transition: all 0.5s ease;
        display: flex;
        align-items: center;

        >span {
            font-size: 14px;
            margin-bottom: 7px;
            margin-left: 10px;
            font-weight: 700;
            color: var(--primaryColor);
        }

        :hover {
            transform: scale(1.25);
        }

        a {
            color: var(--primaryColor);
        }
    }

>span {
    width: 100% !important;
    height: 100% !important;
    
    >span {
        width: 100% !important;
        height: 100% !important;
    }
}
`

export const DescriptionBox = styled.div`
h2 {
    color: var(--secundaryColor);
}

p {
    color: var(--primaryColor);
    text-align: justify;
    text-justify: auto;
}
`
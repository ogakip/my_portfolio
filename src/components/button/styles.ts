import styled from "styled-components"

interface ContainerProps {
    padding: string;
    border: string;
    color: string;
    background: string;
    gap: string;
    animation: boolean;
}

export const Wrapper = styled.div<ContainerProps>`
button {
    display: flex;
    padding: ${props => props.padding && props.padding};
    border: ${props => props.border && props.border};
    background: ${props => props.background && props.background};
    gap: ${props => props.gap && props.gap};
    animation: ${props => props.animation && "jump infinite 3s"};
    animation-direction: alternate;
    border-radius: 5px;
    color: ${props => props.color && props.color};
    font-weight: 700;
    transition: all 0.5s;
    
    :hover {
        background-color: var(--secundaryColor);
        color: var(--secundaryColor2);
        font-weight: 900;
    }
}

@keyframes jump {
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
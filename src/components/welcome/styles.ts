import styled from "styled-components"

export const Wrapper = styled.div`
width: 100%;
height: calc(100% / 3);

.react-icon-spin {
    animation: spin infinite 50s;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
}

@media (min-width: 1024px) {
    width: calc(100% / 3);
    height: 100%;
}
`
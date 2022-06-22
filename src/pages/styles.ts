import styled from "styled-components"

export const Wrapper = styled.div`
height: 300% !important;
background-color: var(--backgroundColor);
display: flex;
flex-direction: column;
gap: 50px;

.download-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

@media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
    width: 300% !important;
    height: 100% !important;
    display: flex;
}
`
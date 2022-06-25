import styled from "styled-components"

export const Wrapper = styled.div`
min-height: 300% !important;
background-color: var(--backgroundColor);
display: flex;
flex-direction: column;
gap: 50px;

.download-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    

    :hover {
        transform: scale(1.13);
    }
}

@media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
    width: 300% !important;
    min-height: 100% !important;
    display: flex;
}
`
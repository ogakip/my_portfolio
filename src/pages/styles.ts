import styled from "styled-components"

export const Wrapper = styled.div`
height: 300% !important;
max-width: 100%;
max-height: 300%;
background-color: var(--backgroundColor);

@media (min-width: 1024px) {
    width: 300% !important;
    height: 100% !important;
    max-width: 300%;
    max-height: 100%;
}
`
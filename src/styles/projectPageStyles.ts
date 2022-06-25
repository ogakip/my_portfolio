import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100% !important;
    height: unset !important;
    min-height: 100% !important;
    background-color: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .download-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    

    :hover {
        transform: scale(1.13);
    }
}

    
    .nav {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        h1 {
            color: var(--secundaryColor);
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;


        
        .nav {
            margin-top: 0;
            position: absolute;
            top: 30px;
            left: 30px;
            flex-direction: row;
            gap: 20px;

            h1 {
                margin-bottom: 0;
            }
        }
    }
`

export const ListSkillsBox = styled.div`
max-width: 90%;
max-height: 90%;
display: flex;
flex-direction: column;
align-items: center;
overflow-x: scroll;
box-shadow: 0px 7px 5px 0px #000000;
padding: 10px;
border-radius: 10px;
gap: 50px;


@media (min-width: 1024px) {
    width: 1000px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: none;

}
`
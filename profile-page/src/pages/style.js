import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin: 5px 10px;
    height: 100%;
`

export const ContainerAboutMe = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px 70px;
    color: orange;

    .FotoPerfil {
        width: 300px;
        height: 300px;
        opacity : 0.8;
        border-radius: 50%;
        margin: 0 20px;
    }
    span, h3 {
        line-height: 200%;
        padding: 10px 0;
    }

    .IconTech {
        width: 50px;
        height: 50px;
        padding: 0 20px;
    }
    .iconanexo {
        width: 30px;
        padding: 0 20px;
    }
`
export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: orange;

    span, h3 {
        line-height: 200%;
        padding: 10px 0;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .SocialMedia {
        height: 70px;
    }
    a {
        padding: 20px;
    }
`
export const NotFoundStyle = styled.div`
    background-color: #fff;
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    img {
        width: 50%;
    }
`
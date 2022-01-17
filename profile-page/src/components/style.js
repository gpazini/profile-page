import styled from "styled-components";

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px 70px;
    color: orange;

    div {
        display: flex;
        flex-direction: column;
        margin: 0 20px 0 0;
        width: 33%;

        h1, h3,  span {
            line-height: 200%;
        }

        h1 {
            font-size: 35px;
            border-bottom: 1px solid orange;
        }
        .tech {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .IconTech {
            height: 30px;
            padding: 0 35px 0 10px;
        }
        .iconanexo {
            height: 35px;
            padding: 0 35px 0 10px;
        }
        .contact {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .SocialMedia {
            height: 30px;
            padding: 0 35px 0 10px;
        }

    }
    .FotoPerfil {
        width: 33%;
        width: 300px;
        height: 300px;
        opacity : 0.8;
        border-radius: 50%;
        margin: 0 20px;
    }
`
export const About = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`
export const ImagemProfile = styled.img`
    width: 300px;
    height: 300px;
    opacity : 0.8;
    border-radius: 50%;
`
export const Details = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid orange;
    margin: 5px 10px;

    button, Link {
        position: relative;
        padding: 10px 24px;
        margin: 5px;
        background-color: #2B2D2F;
        color: orange;
        border: 1px solid orange;
        border-radius: 17px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
    }
    button {
        transition-duration: 0.4s;
    }

    button:hover {
        background-color: orange; 
        color: #2B2D2F;
    }
    button:active {
        background-color: darkorange;
        color: #2B2D2F;
    }
`
export const ContainerProject = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 70px;
    color: orange;
    h1, h3,  span {
        line-height: 200%;
    }

    h1 {
        font-size: 35px;
        border-bottom: 1px solid orange;
    }
    h3 {
        margin-top: 10px;
    }

    .ContainerProject {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .ImgProject {
        width: 360px;
    }
    span {
        width: 350px;
    }
`

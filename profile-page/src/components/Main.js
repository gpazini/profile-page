import { ContainerProfile, ContainerProject } from './style'
import FotoProfile from '../img/1557357741383.jpg'
import GitHub from '../img/githubW.png'
import Gmail from '../img/gmailW.png'
import Linkedin from '../img/linkedinW.png'
import WhatsApp from '../img/whatsapp.png'
import CVGuilherme from '../assets/Guilherme-Pazini.CV.pdf'
import ImagePDF from '../img/pdf.png'
import Astromatch from '../img/astromatch.jpg'
import LabeX from '../img/labex.jpg'
import Labefy from '../img/labefy.jpg'
function Main() {
    return (
        <div>
            <ContainerProfile>
                <div>
                    <h1>Sobre Mim</h1>
                    <span>
                    Desenvolvedor Frontend, com conhecimento em HTML, 
                    JavaScript, CSS, React.js, API e Hooks.
                    Atualmente, estudante do curso de Frontend, na BootCamp Labenu, já desenvolvi 
                    mais de 20 projetos práticos usando tecnologias como o JavaScript, React.js, API's, e Hooks.
                    Formado em Relações Públicas, com experiência profissional na área da saúde, 
                    em especifico na gestão hospitalar e gestão de pessoas.
                    </span>
                    <h3>Tecnologias Dominantes</h3>
                    <div className="tech">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="IconTech" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="IconTech"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="IconTech" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" className="IconTech"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="IconTech" />
                    </div>
                </div>
                <img src={FotoProfile} className='FotoPerfil' alt="Foto Profile" />
                <div>
                    <h1>Detalhes</h1>
                    <h3>Nome:</h3>
                    <span>&nbsp; Guilherme Pazini</span>
                    <h3>Idade:</h3>
                    <span>&nbsp; 32 anos</span>
                    <h3>Localização:</h3>
                    <span>&nbsp; Uberlândia, Minas Gerais - Brasil</span>
                    <h3>Contate-Me</h3>
                    <div className='contact'>
                        <a href="malito:pazini.guilherme@gmail.com" target="_blank">
                        <img src={Gmail} className="SocialMedia" alt="Gmail" />
                        </a>
                        <a href="https://www.linkedin.com/in/guilhermepazini/" target="_blank">
                        <img src={Linkedin} className="SocialMedia" alt="Linkedin" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5511992863883" target="_blank">
                        <img src={WhatsApp} className="SocialMedia" alt="WhatsApp" />
                        </a>
                        <a href="https://github.com/gpazini" target="_blank">
                        <img src={GitHub} className="SocialMedia" alt="GitHub" />
                        </a>
                    </div>
                    <h3>Currículo</h3>
                    <div>
                        <a href={CVGuilherme} target="_blank">
                            <img src={ImagePDF} className="iconanexo" />
                        </a>
                    </div>
                </div>
            </ContainerProfile>

            <ContainerProject>
                <h1>Projetos</h1>
                <div className='ContainerProject'>
                    <h3>Labe-X</h3>
                    <h3>Astromatch</h3>
                    <h3>Labefy</h3>
                </div>
                <div className='ContainerProject'>
                    <img src={LabeX} alt="" className='ImgProject'/>
                    <img src={Astromatch} alt="" className='ImgProject'/>
                    <img src={Labefy} alt="" className='ImgProject'/>
                </div>
                <div className='ContainerProject'>
                    <span>Projeto de uma plataforma de viagens espacial, com a possibilidade do usuário olhar o catalogo, 
                            escolher uma opção e se candidatar para a viagem. Na área administrativa (privada), o usuário pode: 
                            criar novas viagens, deletar as existentes, aprovar ou reprovar candidatos para as viagens.
                    </span>
                    <span>Astromatch é um projeto de desenvolvimento e integração de 
                            JavaScript em React com integração nos endpoints da Postman API proposta pela BootCamp Labenu. 
                            A proposta e inspiração é ter as mesmas funcionalidades do Tinder (aplicativo de paquera).
                    </span>
                    <span>Projeto de uma plataforma de stream musical inspirada no Spotify com integração a API, 
                            onde o usuário cria suas playlists e adiciona suas musicas edita e ouve as músicas.
                    </span>
                </div>

            </ContainerProject>
        </div>
    )
}
export default Main;
import logo from './assets/logo-portfolio.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

export function App() {
  return  (
    <div className='mx-auto max-w-6xl my-3'>
      <img src={logo} alt="logo do projeto" className='w-60'/>
      <a href="">Projetos</a>
      <a href="">Sobre mim</a>
      <a href="https://github.com/GustavoVito"><img src={github} alt="link para o github" className='w-5'/>  </a>
      <a href="https://www.linkedin.com/in/gustavo-do-carmo-vito-7a41ab217/"><img src={linkedin} alt="link para o linkedin" className='w-5'/>  </a>

    </div>
)
}


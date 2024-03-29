import logo from './assets/logo-portfolio.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

export function App() {
  return  (
    <div className='mx-auto max-w-6xl space-x-48 my-3 flex items-center'>
      <img src={logo} alt="logo do projeto" className='w-60'/>

      <div className='space-x-10'>
        <a href="">Projetos</a>
        <a href="">Sobre mim</a>
      </div>

      <div className='space-x-2 flex'>
        <a href="https://github.com/GustavoVito"><img src={github} alt="link para o github" className='w-5'/>  </a>
        <a href="https://www.linkedin.com/in/gustavo-do-carmo-vito-7a41ab217/"><img src={linkedin} alt="link para o linkedin" className='w-5'/>  </a>
      </div>

      <div className='h-1 bg-red-700'/>

    </div>
    )
}

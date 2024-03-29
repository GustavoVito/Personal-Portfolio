import logo from './assets/logo-portfolio.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import dark2 from './assets/dark2.svg'

export function App() {
  return  (
    <div className='mx-auto max-w-6xl '>
    <div className=' space-x-48 mt-3 flex items-center'>
      <img src={logo} alt="logo do projeto" className='w-60'/>

      <div className='space-x-16 mr-12 text-lg'>
        <a href="">Projetos</a>
        <a href="">Sobre mim</a>
      </div>

      <div className='space-x-2 flex '>
        <a href="https://github.com/GustavoVito"><img src={github} alt="link para o github" className='w-7' />  </a>
        <a href="https://www.linkedin.com/in/gustavo-do-carmo-vito-7a41ab217/"><img src={linkedin} alt="link para o linkedin" className='w-7'/>  </a>
      </div>

      <img src={dark2} alt="" className='w-7'/>

      

    </div>
    <div className='h-0.5 bg-red-700 rounded-full'/>
    </div>
    )
}

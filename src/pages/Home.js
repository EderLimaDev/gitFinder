import { Header } from '../components/Header';
import background from '../assets/background.png';
import './styles.css';


export const Home = () => {
  return (
    <div>
        <Header />
        <div className='conteudo'>
        <img src={background} alt="Bg github" className='background' />
        <div className='info'>
          <div>
          <input name='usuario' placeholder='@username' type="text" />
          <button>Buscar</button>
          
          </div>
        </div>


        </div>
    
    </div>
  )
}

import { FaHome, FaChartLine, FaBook, FaGamepad, FaLink, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, onToggle, onNavigate }) {
  const navigate = useNavigate();

  const handleTempNavigation = () => {
    navigate('/em-breve');
  };

  return (
    <aside className="sidebar">
      <button className="sidebar-toggle" onClick={onToggle}>
        {isOpen ? '⮜' : '⮞'}
      </button>

      <ul className="sidebar-menu">
        <li onClick={() => onNavigate('Início')}>
          {isOpen ? "Início" : <FaHome id='icons'/>}
        </li>

        <li onClick={() => onNavigate('Tópicos')}>
          {isOpen ? "Tópicos" : <FaBook id='icons'/>}
        </li>

        <li onClick={handleTempNavigation}>
          {isOpen ? "Progresso" : <FaChartLine id='icons'/>}
        </li>

        <li onClick={handleTempNavigation}>
          {isOpen ? "Desafios" : <FaGamepad id='icons'/>}
        </li>

        <li onClick={handleTempNavigation}>
          {isOpen ? "Fontes" : <FaLink id='icons'/>}
        </li>

        <li onClick={handleTempNavigation}>
          {isOpen ? "Recomendações" : <FaStar id='icons'/>}
        </li>
      </ul>
    </aside >
  );
}
export default Sidebar
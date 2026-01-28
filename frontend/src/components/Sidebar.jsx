import { FaHome, FaChartLine, FaBook, FaGamepad, FaLink, FaStar } from 'react-icons/fa';

function Sidebar({ isOpen, onToggle, onNavigate }) {
  return (
    <aside className="sidebar">
      <button className="sidebar-toggle" onClick={onToggle}>
        {isOpen ? '⮜' : '⮞'}
      </button>

      <ul className="sidebar-menu">
        <li onClick={() => onNavigate('Início')}>
          {isOpen ? "Início" : <FaHome />}
        </li>

        <li onClick={() => onNavigate('Progresso')}>
          {isOpen ? "Progresso" : <FaChartLine />}
        </li>

        <li onClick={() => onNavigate('Tópicos')}>
          {isOpen ? "Tópicos" : <FaBook />}
        </li>

        <li onClick={() => onNavigate('Desafios')}>
          {isOpen ? "Desafios" : <FaGamepad />}
        </li>

        <li onClick={() => onNavigate('Fontes')}>
          {isOpen ? "Fontes" : <FaLink />}
        </li>

        <li onClick={() => onNavigate('Recomendações')}>
          {isOpen ? "Recomendações" : <FaStar />}
        </li>
      </ul>
    </aside >
  );
}
export default Sidebar
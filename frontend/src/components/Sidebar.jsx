import { FaHome, FaChartLine, FaBook, FaGamepad, FaLink, FaStar } from 'react-icons/fa';

function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className="sidebar">
      <button className="sidebar-toggle" onClick={onToggle}>
        {isOpen ? '⮜' : '⮞'}
      </button>

      <ul className="sidebar-menu">
        <li>{isOpen ? <> Início</> : <FaHome />}</li>
        <li>{isOpen ? <> Progresso</> : <FaChartLine />}</li>
        <li>{isOpen ? <> Tópicos</> : <FaBook />}</li>
        <li>{isOpen ? <> Desafios</> : <FaGamepad />}</li>
        <li>{isOpen ? <> Fontes</> : <FaLink />}</li>
        <li>{isOpen ? <> Recomendações</> : <FaStar />}</li>
      </ul>
    </aside>
  );
}
export default Sidebar
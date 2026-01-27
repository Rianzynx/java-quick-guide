import java from '../assets/java.svg'

function Header() {
    return (
        <div className="header-text">
            <div className="title-with-icon">
                <img src={java} alt="Icone Java" />
                <h1>Java Quick Guide</h1>
            </div>
        </div>
    )
}

export default Header;
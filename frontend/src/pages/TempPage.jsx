import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IoMdConstruct } from "react-icons/io";
import FuzzyText from '../components/FuzzyText';

const TempPage = () => {
    const navigate = useNavigate();

    const containerStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        textAlign: 'center',
        padding: '20px'
    };

    const iconStyle = {
        marginBottom: '20px',
        color: '#ffcc00',
    };

    const buttonStyle = {
        marginTop: '30px',
        padding: '10px 20px',
        backgroundColor: '#ff6f00',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
            <div style={iconStyle}>
                <IoMdConstruct  size={80} />
            </div>
            <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.3}
                enableHover
            >
                Em construção
            </FuzzyText>
            <p style={{ color: '#f3f3f3', maxWidth: '400px' }}>
                Estou trabalhando para trazer essa funcionalidade.
            </p>

            <button
                style={buttonStyle}
                onClick={() => navigate(-1)} // Volta para a página anterior
            >
                <ArrowLeft size={18} />
                Voltar
            </button>
        </div>
    );
};

export default TempPage;
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '10px 15px',
    display: 'block',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#fff',
    fontWeight: 'bold'
  };

  return (
    <nav style={{ 
      width: "250px", // Reducido de 250px
      padding: "15px", // Reducido de 20px
      backgroundColor: "#f0f0f0", 
      borderRight: "1px solid #ddd",
      height: "100%"
    }}>
      <div style={{ 
        textAlign: 'left',
        marginBottom: '20px',
        paddingLeft: '10px' // Reducido de 15px
      }}>
        <NavLink to="/" style={{ 
          display: 'block', 
          textDecoration: 'none', 
          color: '#333',
          marginBottom: '10px'
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "25px", height: "25px" }}
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </NavLink>
        <h2 style={{
          margin: 0,
          color: '#333',
          fontSize: '1.3em'
        }}><u>Ejercicios</u></h2>
      </div>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      }}>
        <li>
          <NavLink to="/e1" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            1. Hola Mundo
          </NavLink>
        </li>
        <li>
          <NavLink to="/e2" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            2. Contador
          </NavLink>
        </li>
        <li>
          <NavLink to="/e3" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            3. Saludo-Props
          </NavLink>
        </li>
        <li>
          <NavLink to="/e4" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            4. Boton-Evento
          </NavLink>
        </li>
        <li>
          <NavLink to="/e5" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            5. Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/e6" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            6. Lista-Compra
          </NavLink>
        </li>
        <li>
          <NavLink to="/e7" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            7. Galeria
          </NavLink>
        </li>
        <li>
          <NavLink to="/e8" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            8. !Inputs
          </NavLink>
        </li>
        <li>
          <NavLink to="/e9" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            9. Puntuaciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/e10" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            10. Cuestionario
          </NavLink>
        </li>
        <li>
          <NavLink to="/e11" style={({ isActive }) => 
            isActive ? activeLinkStyle : linkStyle
          }>
            11. Notas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
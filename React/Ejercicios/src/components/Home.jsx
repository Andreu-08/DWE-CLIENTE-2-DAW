import reactLogo from '../assets/react.png'

const Home = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <section>
        <h2 style={{
          borderBottom: '1px solid #ccc',
          paddingBottom: '10px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          Actividades y ejercicios hechos en React
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <img 
            src={reactLogo}
            alt="Logo de React"
            style={{
              width: '250px',
              height: 'auto'
            }}
          />
        </div>

        <div style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: '#fff'
        }}>
          <p style={{ lineHeight: '1.6' }}>
            Este es un repositorio para agrupar todos los ejercicios y actividades
            de la asignatura de Desarrollo Web en Entorno Cliente del módulo de Desarrollo
            de Aplicaciones Web
          </p>
        </div>

        <div style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '20px',
          marginBottom: '30px',
          backgroundColor: '#fff'
        }}>
          <p style={{ lineHeight: '1.6' }}>
            Andreu Orenga Ramon 2º DAW
          </p>
        </div>

        <div style={{
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          fontSize: '0.9em',
          color: '#666'
        }}>
          <p>
            Nota: Para ver los ejercicios y actividades realizadas en React, selecciona una de las opciones del menú lateral
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
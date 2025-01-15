import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#333',
      color: '#fff',
      height: '80px'
    }}>
      <h1 style={{
        fontSize: '1.8rem',
        margin: 0,
        fontWeight: 'bold'
      }}>
        <Link to="/" style={{
          color: '#fff',
          textDecoration: 'none'
        }}>
        Movie App
        </Link>
      </h1>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '30px',
        margin: 0,
        alignItems: 'center'
      }}>
        <li>
          <Link to="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

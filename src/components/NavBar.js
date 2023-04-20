import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/'>
        <div>Home</div>
      </Link>

      <Link to='/about'>
        <div>About</div>
      </Link>
      
      <Link to='/projects'>
        <div>Projects</div>
      </Link>
    </nav>
  )
}

export default NavBar












// function NavBar() {
//     return (
//         <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
//         <Container>
//           <Navbar.Brand>MI</Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">About</Nav.Link>
//               <Nav.Link href="#link">Projects</Nav.Link>
//               <Nav.Link href="#link">Connect</Nav.Link>
             
//             </Nav>
//           </Navbar.Collapse>


//         </Container>
//       </Navbar>
//     )
// }
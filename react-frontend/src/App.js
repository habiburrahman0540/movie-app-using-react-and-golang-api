import {Container,Row,Col, Nav} from 'react-bootstrap';
import { Outlet ,Link} from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
import Badge from 'react-bootstrap/Badge';
function App() {
  return (
    <Container>
      <Row>
          <Col xs={12} md={8}>
              <h1 className='mt-3'>Go watch Movies</h1>
          </Col>
          <Col xs={6} md={4} className="flex justify-items-md-end">
            <Link to='/login'>
              <Badge bg="primary" className=" mt-4">
                <span><AiOutlineLogin/> </span>
                Login
             </Badge> 
            </Link>
          </Col>
          {/* <hr className="mb-3"></hr> */}
      </Row>
      <Row>
          <Col md={3} className="d-flex justify-content-center">
              <Nav className='mt-5'>
                <div className="list-group">
                  <Link to="/" className="list-group-item list-group-item-action">Home</Link>
                  <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
                  <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>
                  <Link to="/add-movie" className="list-group-item list-group-item-action">Add movie</Link>
                  <Link to="/catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </div>
              </Nav>
          </Col>
          <Col md={9}>
             <Outlet/>
          </Col>
      </Row>
    </Container>
  );
  
}

export default App;

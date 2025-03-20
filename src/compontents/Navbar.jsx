import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const categories = ["All", "Animals", "Space", "History", "Technology", "Food"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setFilteredSuggestions(
        categories.filter((category) =>
          category.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (category) => {
    navigate(`/${category.toLowerCase()}`); // Navigates to the respective route
    setSearchTerm("");
    setFilteredSuggestions([]);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && categories.includes(searchTerm)) {
      navigate(`/${searchTerm.toLowerCase()}`);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
        <Navbar.Brand href="/">Random Facts</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">All</Nav.Link>
            <Nav.Link href="/animals">Animals</Nav.Link>
            <Nav.Link href="/space">Space</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/food">Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex position-relative" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
            {filteredSuggestions.length > 0 && (
              <div className="position-absolute bg-white shadow p-2 rounded w-100" style={{ top: "100%", zIndex: 10 }}>
                {filteredSuggestions.map((category, index) => (
                  <div
                    key={index}
                    className="p-2 hover-bg-light cursor-pointer"
                    onClick={() => handleSuggestionClick(category)}
                    style={{ cursor: "pointer" }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

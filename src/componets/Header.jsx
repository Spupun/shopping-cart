import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
         Spicy Heaven
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={0}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <NavLink to="/cart/1" onClick={handleClose}>
                      <img
                        src="image_url"
                        style={{ width: "5rem", height: "5rem" }}
                        alt=""
                      />
                    </NavLink>
                  </td>
                  <td>
                    <p>Restaurant Name</p>
                    <p>Price : ₹0</p>
                    <p>Quantity : 0</p>
                    <p
                      style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                    >
                      <i className="fas fa-trash smalltrash"></i>
                    </p>
                  </td>
                  <td
                    className="mt-5"
                    style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                  >
                    <i className="fas fa-trash largetrash"></i>
                  </td>
                </tr>
                <p className="text-center">Total : ₹0</p>
              </tbody>
            </Table>
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;


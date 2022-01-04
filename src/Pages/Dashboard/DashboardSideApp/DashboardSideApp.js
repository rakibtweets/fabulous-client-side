import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Drawer } from 'react-bootstrap-drawer';
import { Collapse, Nav } from 'react-bootstrap';
import 'react-bootstrap-drawer/lib/style.css';

import './DashboardSideApp.css';
import { Link } from 'react-router-dom';

const DashboardSideApp = () => {
  const [open, setOpen] = useState(false);
  const { user, userLogOut } = useAuth();

  const handleToggle = () => setOpen(!open);
  return (
    <Drawer>
      <div className=" d-flex justify-content-between align-content-center">
        <h5 className="pt-4 text-info fw-bold">Dashboard</h5>
        <Drawer.Toggle onClick={handleToggle} />
      </div>

      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC className="dashboard-drawer fw-bold">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Drawer.Nav>
              <Nav className=" user__dashboard d-flex flex-column justify-content-center fw-bold">
                <Nav.Link as={Link} to={`/myOrders`}>
                  My Orders
                </Nav.Link>
                <Nav.Link as={Link} to={`/review`}>
                  Review
                </Nav.Link>
                <Nav.Link as={Link} to={`/payment`}>
                  Payment
                </Nav.Link>
              </Nav>

              <Nav className="admin__dashboard d-flex flex-column justify-content-center fw-bold">
                <Nav.Link as={Link} to={`/addProducts`}>
                  Add Products
                </Nav.Link>

                <Nav.Link as={Link} to={``}>
                  Manage All Orders
                </Nav.Link>
                <Nav.Link as={Link} to={`/manageProducts`}>
                  Manage Products
                </Nav.Link>

                <Nav.Link as={Link} to={`/makeAdmin`}>
                  Make Admin
                </Nav.Link>
                <Nav.Link as={Link} to={`/payment`}>
                  Payment
                </Nav.Link>
              </Nav>

              <Nav className="d-flex flex-column justify-content-center">
                <Nav.Link className="text-secondary fw-bold mx-2">
                  {user?.displayName}{' '}
                </Nav.Link>
                <Nav.Link>
                  <button
                    onClick={userLogOut}
                    className="btn btn-danger text-white rounded-pill px-5 py-2"
                  >
                    Log Out
                  </button>
                </Nav.Link>
              </Nav>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

export default DashboardSideApp;

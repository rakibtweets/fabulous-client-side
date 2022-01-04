import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardSideApp from '../DashboardSideApp/DashboardSideApp';

const Dashboard = () => {
  // const { admin } = useAuth();
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col /* as={DashboardSideApp}  */ sm={12} md={3} lg={3}>
          <DashboardSideApp />
        </Col>
        <Col sm={12} md={9} lg={9}>
          <h2>Componets</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

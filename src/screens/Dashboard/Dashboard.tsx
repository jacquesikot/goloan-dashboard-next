import React from 'react';
import { NavBar } from '../../components';
import styled from 'styled-components';

import {} from './styles';

const Container = styled.div`
  padding: 100px 0px;
`;

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;

// Imports
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Components
import Chat from './Chat/Chat';

const App = () => (
  <Grid fluid>
    SocketIO Implementation
    <Row>
      <Col sm={12}>
        <Chat />
      </Col>
    </Row>
  </Grid>
);

export default App;

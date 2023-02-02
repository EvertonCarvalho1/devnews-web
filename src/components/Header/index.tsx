import React from 'react';

import { Container } from './styles';


export default function Header() {

  return (
    <Container>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2 className='header'>DevNews</h2>
        </div>
      </div>
    </Container>
  );

}

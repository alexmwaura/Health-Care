import React from 'react';
import {MNavBar, ListGroup, ListItems} from './NavBar.styles';

function NavBar() {
  return (
    <MNavBar>
        <ListGroup>
            <ListItems>
              Home
            </ListItems>
            <ListItems>
              About
            </ListItems>
        </ListGroup>
    </MNavBar>
  )
}

export default NavBar;

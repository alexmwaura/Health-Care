import React from 'react';
import {MNavBar, ListGroup, ListItems, ListSpan} from './NavBar.styles';

function NavBar() {
  return (
    <MNavBar>
      <ListGroup>
    <ListItems>
        home
    </ListItems>
    <ListItems>
        about
    </ListItems>
    <ListItems>
        projects
    </ListItems>
    <ListItems>
        contact
    </ListItems>
</ListGroup>
    </MNavBar>

 
  )
}

export default NavBar;

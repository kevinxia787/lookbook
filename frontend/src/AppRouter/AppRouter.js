import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Menu, Container} from 'semantic-ui-react';
import Root from '../Root/Root';
import Top from '../Top/Top';
import Hot from '../Hot/Hot';


class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu fixed='top' inverted borderless>
            <Container>
              <Menu.Item as={Link} to="/">
                lookbook
              </Menu.Item>
              <Menu.Item as={Link} to="/top">
                top
              </Menu.Item>
              <Menu.Item as={Link} to="/hot">
                hot
              </Menu.Item>
            </Container>
          </Menu>
          <Route path="/" exact component={Root}/>
          <Route path="/top" component={Top}/>
          <Route path="/hot" component={Hot}/>
        </div>
      </Router>
      
    )
  }
}

export default AppRouter;
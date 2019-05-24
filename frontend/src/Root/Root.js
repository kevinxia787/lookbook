import React, { Component } from 'react';
import { Dimmer, Loader, Card, Menu, Container, Button, Icon } from 'semantic-ui-react';
import './Root.css';
import { Carousel } from 'react-responsive-carousel';

class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {fitpics: [], pointer: 0};

    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/hot", {method: 'GET', dataType:'json'})
      .then(r => r.json())
      .then(r => {
        this.setState((state) => {
          return {fitpics: r}
        })
      })
      .catch(err => console.log(err))
  }

  leftClick() {
    const { pointer, fitpics } = this.state;
    console.log(fitpics.length)
    if (pointer === 0) {
      let newPointer = fitpics.length - 1;
      this.setState({pointer: newPointer})
      return;
    }
    this.setState({pointer: this.state.pointer - 1})
  }

  rightClick() {
    const { pointer, fitpics } = this.state;
    if (pointer === fitpics.length - 1) {
      console.log("xd")
      this.setState({pointer: 0})
      return;
    }
    this.setState({pointer: this.state.pointer + 1})
  }

  render() {
    const { fitpics, pointer } = this.state;
    const curr = fitpics[pointer];

    if (fitpics.length === 0) {
      return (
        <div>
          <Menu fixed='top' inverted borderless>
          <Container>
            <Menu.Item >
              lookbook
            </Menu.Item>
          </Container>
        </Menu>
          <Dimmer active>
            <Loader/>
          </Dimmer>
        </div>
      )
    }
    return (
      <div>
        <Menu fixed='top' inverted borderless>
          <Container>
            <Menu.Item >
              lookbook
            </Menu.Item>
          </Container>
        </Menu>
        <Carousel>
          <img src=""/>
        </Carousel>
      </div>
    )
  }
}

export default Root;
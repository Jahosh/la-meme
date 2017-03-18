import React, { Component } from 'react';
import { Well, Col, Image } from 'react-bootstrap';
import GameInput from './GameInput';

class GameDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }
  render() {
    return (
      <div>

        <Col xs={12} md={12}>
        <div id="photo">
          <Image className="photo" src= {this.props.memePhoto} />
          { this.props.connectionType === 'player' ?
          <GameInput handleMessage={this.props.handleMessage} />
        : '' }
          <GameInput> 
          {console.log("***mT", this.state.memeText, "v***", this.state.value)}
          </GameInput>

          </div>
        </Col>

        <Well className="meme-content" bsSize="large">
          <div id="display-meme" className="meme-display">
            <Col xs={6} md={4}>
              <Image className="meme" src={this.props.memePhoto} />
                <div className="caption">TEXTwekjrlwjerlkjwaelkrjawelkrjlakwejrlkawe
              </div>
            </Col>

            <Col xs={6} md={4}>
              <Image className="meme" src={this.props.memePhoto} />
              <div className="caption">hihi
              </div>
            </Col>
            {/* <ul id="messages" />*/}
          </div>
        </Well>
      </div>
    );
  }
}

export default GameDisplay;

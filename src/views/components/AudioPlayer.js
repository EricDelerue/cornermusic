import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ButtonLink } from './shared/ButtonLink';

export default class AudioPlayer extends Component {
	
  constructor(props) {
    super(props);

    this.state = { play: false };

    this.player = React.createRef();
  }
 
  componentDidMount = () =>
    this.player.current.addEventListener('ended', () =>
      this.setState({ play: false })
    );

  toggle = () => {
  	
    if (this.state.play) {
      this.setState({ play: false });
      this.player.current.pause();
    } else {
      this.setState({ play: true });
      this.player.current.play();
    }
    
  };

  previous = () => {
    this.setState({ play: false });
    return true;
    
  };

  next = () => {
    this.setState({ play: false });
    return true;
  };

  render() {
  	 // pause <i class="fa fa-pause"></i>, play <i class="fa fa-play"></i>, share-alt <i class="fa fa-share-alt"></i>
    return (
      <>
      <nav className="menu">
        <ul className="player">
        <li>
        {/*<ButtonLink LinkClassName={`link`} ButtonClassName={`button--backward`} ButtonClickFunction={this.previous} iconType={`backward`} to={`/play/${this.props.previous}`} />  */} 
        
        <NavLink to={`/play/${this.props.previous}`}>     
        <button
          className="button--backward"
          onClick={this.previous}
        >
            <i className="fa fa-backward"></i>

        </button>
        </NavLink> 
            
        </li>
        <li>   
        <button
          className={`button--play ${this.state.play ? 'played' : ''}`}
          onClick={this.toggle}
        >
          {this.state.play ? (
            <i className="fa fa-pause"></i>
          ) : (
            <i className="fa fa-play"></i>
          )}
        </button>
        </li>
        <li>  
        {/*<ButtonLink LinkClassName={`link`} ButtonClassName={`button--forward`} ButtonClickFunction={this.next} iconType={`forward`} to={`/play/${this.props.next}`} />*/}  
          
        <NavLink to={`/play/${this.props.next}`}>              
        <button
          className="button--forward"
          onClick={this.next}
        >
            <i className="fa fa-forward"></i>
        </button>
        </NavLink>
                
        </li>
        <li>  
        {/*<ButtonLink LinkClassName={`link`} ButtonClassName={`button--search`} ButtonClickFunction={null} iconType={`search`} to={`/`} />  */} 
        
        <NavLink to='/' exact={true}>                
        <button
          className="button--search"
        >
            <i className="fa fa-search"></i>        
        </button>
        </NavLink>
         
        </li>              
        </ul> 
        </nav>
                 
        <audio src={this.props.src} ref={this.player} />
      </>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  previous: PropTypes.number,
  next: PropTypes.number
};

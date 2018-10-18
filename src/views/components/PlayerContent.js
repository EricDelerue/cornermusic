import React from 'react';
import PropTypes from 'prop-types';

import { NoAudioPlayer } from './NoAudioPlayer';
import AudioPlayer from './AudioPlayer';

import { Title } from './Title';
import { Album } from './Album';
import { Artist } from './Artist';
//import Info from '../Info';

export const PlayerContent = ({ current, previous, next }) => (
  <>
    <div className="mb-3 col-md-6 mx-auto"> 
    
      <div className="panel panel--sm">
      
      <aside>
        { current.thumb100 && 
        <img
          className="artwork content__artwork animated fadeIn"
          src={current.thumb100.replace('100x100', '400x400')}
          alt=""
        />
        }
        
        {current.excerpt ? <AudioPlayer src={current.excerpt} previous={previous} next={next} /> : <NoAudioPlayer /> }
      </aside>
      
      </div>
      <div className="panel panel--sm">
	      
	      <div className="content__header">
	      
	        <Title title={current.title ? current.title : 'Untitled'} />
	        <Album value={current.album ? current.album : 'Untitled'} />
	        <Artist value={current.artist} />
	       {/*                
	        <Info value={current} />   
	        */ }   
	      </div>
	      
      </div>
      
    </div>
  </>
);

PlayerContent.propTypes = {
  current: PropTypes.shape({
    thumb100: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    title: PropTypes.string //.isRequired
  })
};

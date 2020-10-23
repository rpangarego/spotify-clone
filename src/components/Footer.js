import React from 'react'
import './Footer.css'

import { Grid, Slider } from '@material-ui/core'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
   return (
      <div className="footer">
         <div className="footer__left">
            <img src="images/song-cover.jpg" alt="" className="footer__albumImage"/>
            <div className="footer__songInfo">
               <h4>Kissing Stranger</h4>
               <p>DNCE</p>
            </div>
         </div>

         <div className="footer__center">
            <ShuffleIcon className="footer__icon footer__green"/>
            <SkipPreviousIcon className="footer__icon"/>
            <PlayCircleOutlineOutlinedIcon className="footer__icon footer__playButton"/>
            <SkipNextIcon className="footer__icon"/>
            <RepeatIcon className="footer__icon footer__green"/>

         </div>

         <div className="footer__right">
            <Grid container spacing={2}>
               <Grid item>
                  <PlaylistPlayIcon />
               </Grid>
               <Grid item>
                  <VolumeDownIcon />
               </Grid>
               <Grid item xs>
                  <Slider /> 
               </Grid>
            </Grid>
         </div>
      </div>
   )
}

export default Footer

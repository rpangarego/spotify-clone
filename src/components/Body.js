import React from 'react'
import './Body.css'
import Header from './Header'
import SongRow from './SongRow'
import { useDataLayerValue } from '../DataLayer'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Body({ spotify }) {

   const [{ song_list }, dispatch] = useDataLayerValue();

   return (
      <div className="body">
         <Header spotify={ spotify } />

         <div className="body__info">
            <img src={ song_list?.images[0].url } alt=""/>
            <div className="body__infoText">
               <strong>PLAYLIST</strong>
               <h2>{ song_list?.name}</h2>
               <p>{ song_list?.description }</p>
            </div>
         </div>

         <div className="body__songs">
         <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon fontSize="large"/>
            <MoreHorizIcon />
         </div>
            {/* List of songs */}
            {song_list?.tracks.items.map((item, index) => (
               <SongRow key={index} track={item.track} />
            ))}
         </div>
      </div>
   )
}

export default Body

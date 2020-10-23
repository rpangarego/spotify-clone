import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from "../DataLayer"

function Sidebar() {
   const [{ playlists }] = useDataLayerValue()

   return (
      <div className="sidebar">
         {/* Spotify Logo */}
         <img src="images/spotify-logo.jpg" alt="Spotify" className="sidebar__logo"/>

         <SidebarOption title="Home" Icon={HomeIcon}/>
         <SidebarOption title="Search" Icon={SearchIcon} />
         <SidebarOption title="Your Library" Icon={LibraryIcon} />

         <br/>
         <strong className="sidebar__title">Playlists</strong>
         <hr/>

         {
            playlists?.items?.map(playlist => (
               <SidebarOption key={playlist.id} title={playlist.name}/>
            ))
         }

      </div>
   )
}

export default Sidebar

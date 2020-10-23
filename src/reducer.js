export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null
}

const reducer = (state, action) => {
   console.log(action);

   // eslint-disable-next-line default-case
   switch (action.type){
      case 'SET_USER':
         return {
            ...state,
            user: action.user
         }

      case 'SET_TOKEN':
         return {
            ...state,
            token: action.token
         }

      case 'SET_PLAYLISTS':
         return {
            ...state,
            playlists: action.playlists
         }

      case 'SET_DISCOVER_WEEKLY':
         return {
            ...state,
            song_list: action.song_list
         }

      default:
         return state;
   }

}

export default reducer;
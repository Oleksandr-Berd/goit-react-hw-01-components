
import { FriendListItem } from './friendListItem';


export const FriendsList = (friends) => {
  
  const friendsArray = Object.values(friends)
  console.log(typeof friendsArray[0][0].id);
  return <ul>
    {friendsArray[0].map(friend => (
      <FriendListItem
        id = {friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline = {friend.isOnline}
      />
    )
    )}
  </ul>
}

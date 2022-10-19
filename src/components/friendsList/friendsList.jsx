
import PropTypes from 'prop-types';
import css from 'components/friendsList/friendsList.module.css';
import { avatarSize } from 'constant';
import { FriendListItem } from './friendListItem';




export const FriendsList = (friends) => {
  return <ul>
    {Object.keys(friends).map(friend => (
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

FriendsList.prototype = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}



// export const FriendsList = ({ items }) => {
//   return <ul>
//     {items.map(item => (
//       <li className={css.friendFriendsList} key={item.id} style={{
//         backgroundColor: item.isOnline ? 'greenyellow' : 'lightcoral'
//       }}>
//             <span className={`${css.statusFriendsList}`}>{item.isOnline ? ("OnLine") : ("OffLine")}</span>
//             <img className={css.avatarFriendsList} src={item.avatar} alt="User avatar" width={avatarSize.md} />
//             <p className={css.nameFriendsList}>{item.name}</p>
//       </li>
//     )
//     )}
//   </ul>
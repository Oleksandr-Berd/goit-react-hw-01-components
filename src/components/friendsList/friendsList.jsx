
import PropTypes from 'prop-types';

const FriendsList = ({items}) => {
  return <ul>
    {items.map(item => (
      <li className="friendFriendsList" key={item.id}>
            <span className="statusFriendsList">{item.isOnline ? ("OnLine") : ("OffLine")}</span>
            <img className="avatarFriendsList" src={item.avatar} alt="User avatar" width="48" />
            <p className="nameFriendsList">{item.name}</p>
    </li>
    ))}
      </ul>
}

FriendsList.prototype = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendsList
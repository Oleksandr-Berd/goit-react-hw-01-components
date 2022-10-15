

const FriendsList = ({friends}) => {
  return <ul>
    {friends.map(friend => (
      <li className="friend" key={friend.id}>
            <span className="status">{friend.status}</span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
    </li>
    ))}
      </ul>
}

export default FriendsList
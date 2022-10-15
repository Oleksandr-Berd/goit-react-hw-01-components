

const FriendsList = ({items}) => {
  return <ul>
    {items.map(item => (
      <li className="friend" key={item.id}>
            <span className="status">{item.isOnline ? ("OnLine") : ("OffLine")}</span>
            <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
            <p className="name">{item.name}</p>
    </li>
    ))}
      </ul>
}

export default FriendsList
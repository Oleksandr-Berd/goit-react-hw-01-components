import PropTypes from 'prop-types';
import defaultImage from '../../logo512.png';

export const Profile = (props) => {
    
    const {
        avatar = defaultImage,
        username = "Unknow",
        tag = "Unknow",
        location = "Not rusia",
        stats = "Unknow"} = props;
   
    return <div className="profile">
  <div className="description">
        <img
        src={avatar ?? defaultImage}
      alt="User avatar"
      className="avatar"
    />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
} 

Profile.prototype = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
}








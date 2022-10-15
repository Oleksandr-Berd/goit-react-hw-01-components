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
  <div className="descriptionProfile">
        <img
        src={avatar ?? defaultImage}
      alt="User avatar"
      className="avatarProfile"
    />
        <p className="nameProfile">{username}</p>
        <p className="tagProfile">{tag}</p>
    <p className="locationProfile">{location}</p>
  </div>

  <ul className="statsProfile">
    <li>
      <span className="labelProfile">Followers</span>
      <span className="quantityProfile">{stats.followers}</span>
    </li>
    <li>
      <span className="labelProfile">Views</span>
      <span className="quantityProfile">{stats.views}</span>
    </li>
    <li>
      <span className="labelProfile">Likes</span>
      <span className="quantityProfile">{stats.likes}</span>
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








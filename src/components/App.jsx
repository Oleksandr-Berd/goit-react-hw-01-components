import { Profile } from './profile/profile';
import user from './profile/user.json';
import StatisticsList from './statistic/statistics'
import data from '../components/statistic/data.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <StatisticsList
        items = {data}
      />
    </div>
  );
};



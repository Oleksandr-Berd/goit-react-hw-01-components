import { Profile } from './profile/profile';
import user from './profile/user.json';
import StatSection from './statistic/statSection';
import StatisticsList from './statistic/statistics';
import FriendsList from './friendsList/friendsList'
import data from '../components/statistic/data.json';
import friends from './friendsList/friends.json';
import TransactionHistory from './TransactionHistory/transactionHistory';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'normal',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 30,
        color: '#010101',
        paddingLeft: '15px',
      }}
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <StatSection title='Upload stats'/>
      <StatisticsList
        items = {data}
      />
      {<FriendsList
        items={friends} />}
      {<TransactionHistory
        items={transactions} />}
    </div>
  );
};



import {Profile} from 'components/profile/profile';
import user from 'components/profile/user.json';
import {StatSection} from 'components/statistic/statSection';
import {StatisticsList} from 'components/statistic/statistics';
import {FriendsList} from 'components/friendsList/friendsList'
import data from 'components/statistic/data.json';
import friends from 'components/friendsList/friends.json';
import {Transaction} from 'components/Transaction/transaction';
import transactions from 'components/Transaction/transactions.json';

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
        padding: '30px',
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
      {<Transaction
        items={transactions} />}
    </div>
  );
};



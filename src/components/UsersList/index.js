import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUsersRequestAction } from '../../actions/actionCreators';

const UsersList = props => {
  const { users, isFetching, error } = props;

  useEffect(() => {
    props.getUsersRequestAction({});
  }, []);

  const loadMore = () => {
    props.getUsersRequestAction({
      offset: users.length
    });
  };

  return (
    <div>
      {isFetching && <p>Loading....</p>}
      {error && <p>Some error</p>}
      <button onClick={loadMore}>Load More Users</button>
      {users
        ? users.map(u => {
            return <li key={u.id}>{JSON.stringify(u)}</li>;
          })
        : null}
    </div>
  );
};

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps, { getUsersRequestAction })(UsersList);

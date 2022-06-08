import { connect } from 'react-redux';

const UsersList = props => {
  const { users, isFetching, error } = props;

  return (
    <div>
      {isFetching && <p>Loading....</p>}
      {error && error}
      {users.map(u => {
        return <li key={u.id}>{JSON.stringify(u)}</li>;
      })}
    </div>
  );
};

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps)(UsersList);

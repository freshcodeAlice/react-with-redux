import { connect } from 'react-redux';

const UsersList = props => {
  const { users, isFetching, error } = props;
  console.log(props);
  return (
    <div>
      {isFetching && <p>Loading....</p>}
      {error && <p>Some error</p>}
      {users
        ? users.map(u => {
            return <li key={u.id}>{JSON.stringify(u)}</li>;
          })
        : null}
    </div>
  );
};

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps)(UsersList);

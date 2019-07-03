import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getUsers } from './users';
import { getUsersList, getLoadingStatus, getError } from './selectors';
import {
  Root,
  Header,
  Title,
  Content,
  LoadingPlaceholder,
  ErrorMessage,
  UsersList
} from './styled';
import { i18n } from './i18n';
import { UserItem } from './components/UserItem';

const Users = ({ users, loading, error }) => (
  <Root>
    <Header>
      <Title>{i18n.title}</Title>
    </Header>
    <Content>
      {loading && <LoadingPlaceholder>{i18n.loading}</LoadingPlaceholder>}
      {!loading && error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <UsersList>
          {users.map((el) => (
            <UserItem key={el.id} {...el} />
          ))}
        </UsersList>
      )}
    </Content>
  </Root>
);

const mapStateToProps = (state) => ({
  users: getUsersList(state),
  loading: getLoadingStatus(state),
  error: getError(state)
});

const mapDispatchToProps = { getUsers };

const withUsersData = lifecycle({
  componentDidMount() {
    this.props.getUsers();
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withUsersData
)(Users);

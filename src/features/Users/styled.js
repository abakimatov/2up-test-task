import styled, { css } from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.header`
  height: 240px;
  width: 100%;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: #fff;
`;

export const Content = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const placeholder = css`
  margin: 0;
  text-align: center;
`;

export const LoadingPlaceholder = styled.h2`
  color: #105aef;
  ${placeholder};
`;

export const ErrorMessage = styled.h2`
  color: #ef1044;
  ${placeholder};
`;

export const UsersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
`;

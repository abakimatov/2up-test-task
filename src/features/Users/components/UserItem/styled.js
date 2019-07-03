import styled from 'styled-components';

export const Root = styled.li`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #4d7284;
  padding: 15px 30px;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #363738;
`;

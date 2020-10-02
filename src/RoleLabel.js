import React from 'react';
import styled, {css} from 'styled-components';

const userRolesHelper = {
  ACCOUNT_MANAGER: {
    displayName: "Account manager",
    styles: css`
      background: #FEDDE6;
      color: #922B6C;
    `,
  },
  ADMIN: {
    displayName: "Admin",
    styles: css`
      background: #EFE2FE;
      color: #574195;
    `,
  },
  AGENT: {
    displayName: "Agent",
    styles: css`
      background: #C8E7F9;
      color: #2C5282;
    `,
  },
  EXTERNAL_REVIEWER: {
    displayName: "External reviewer",
    styles: css`
      background: #FEEBC8;
      color: #91472C;
    `,
  },
};

const Label = styled.div`
  position: absolute;
  left: 401px;
  top: 20px;
  
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  ${(props) => props.customStyles}
`;

function RoleLabel(props) {
  const {displayName, styles} = userRolesHelper[props.role] || {};

  if (displayName && styles) {
    return (
      <Label customStyles={styles}>
        {displayName}
      </Label>
    );
  }
}

export default RoleLabel;

import React from 'react';

import { AvatarGroup, Avatar, useTheme } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import { isNullOrEmpty } from '@/utils';

import { SingleAvatarI } from '@/types/shared/AvatarGroup';

const AppAvatarGroup = ({ data }: { data: SingleAvatarI[] }) => {
  const theme = useTheme();

  return (
    <AvatarGroup
      max={4}
      sx={{
        color: theme?.palette?.blue?.light,
        '&  .MuiAvatar-root': {
          color: theme?.palette?.blue?.light,
          background: theme?.palette?.primary?.lighter,
        },
        '& .MuiAvatar-root:not(:last-child)': {
          marginLeft: '-20px',
        },
        '& .MuiAvatar-root:first-child': {
          border: `1px solid ${theme?.palette?.common?.white}`,
          marginLeft: '-10px',
        },
        width: 'max-content',
      }}
    >
      {!isNullOrEmpty(data) &&
        data?.map((singleItem: SingleAvatarI) => (
          <Avatar
            key={uuidv4()}
            alt={singleItem?.name}
            src={singleItem?.img}
            sx={{
              background: theme?.palette?.primary?.lighter,
              color: theme?.palette?.blue?.light,
              borderRadius: '15px',
              border: `1px solid ${theme?.palette?.common?.white}`,
            }}
          />
        ))}
    </AvatarGroup>
  );
};

export default AppAvatarGroup;

export const styles = {
  BoxStyling: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F9FB',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '15px',
    flexWrap: 'wrap',
  },
  createBtn: {
    columnGap: '10px',
    '@media (max-width: 500px)': {
      marginTop: '20px',
      width: '100%',
    },
  },
  actionBtn: (theme: any) => {
    return {
      border: `1px solid ${theme?.palette?.custom.dark}`,
      borderRadius: '4px',
      color: `${theme?.palette?.custom.main}`,
      display: 'flex',
      alignItems: 'center',
      padding: '6px 15px',
      height: '36px',
      '@media (max-width: 500px)': {
        width: '100%',
      },
      '&:disabled': {
        color: theme?.palette?.grey[0],
      },
    };
  },
};

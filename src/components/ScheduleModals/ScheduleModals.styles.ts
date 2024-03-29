export const styles = {
  parentBox: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    background: 'white',
    borderRadius: '20px',
    maxWidth: '580px',
    width: '100%',
    border: '1px solid #E5E7EB',
    boxShadow: '0px 4px 24px -4px rgba(16, 24, 40, 0.02)',
    margin: 'auto',
    minHeight: '190px',
    padding: '24px',
    '@media (max-width:581px)': {
      maxWidth: '100%',
      margin: '0 12px',
    },
  },
  innerBoxOne: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  innerBoxTwo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
  },
  modalTypeText: {
    color: '#374151',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '30px',
    textTransform: 'capitalize',
  },
  messageText: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    color: '#4B5563',
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '16px',
  },
};

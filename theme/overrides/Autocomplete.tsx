const Autocomplete = (theme: any) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme?.customShadows?.dropdown,
        },
        listbox: {
          padding: theme.spacing(0, 1),
          '& .MuiAutocomplete-option': {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0),
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  };
};
export default Autocomplete;
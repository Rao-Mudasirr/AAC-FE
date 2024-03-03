import { useTheme } from '@mui/material';

const Pause = () => {
  const theme = useTheme();
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4707 2.57031C6.9507 2.57031 2.4707 7.05031 2.4707 12.5703C2.4707 18.0903 6.9507 22.5703 12.4707 22.5703C17.9907 22.5703 22.4707 18.0903 22.4707 12.5703C22.4707 7.05031 18.0007 2.57031 12.4707 2.57031ZM11.2207 15.6003C11.2207 16.0803 11.0207 16.2703 10.5107 16.2703H9.2107C8.7007 16.2703 8.5007 16.0803 8.5007 15.6003V9.54031C8.5007 9.06031 8.7007 8.87031 9.2107 8.87031H10.5007C11.0107 8.87031 11.2107 9.06031 11.2107 9.54031V15.6003H11.2207ZM16.5007 15.6003C16.5007 16.0803 16.3007 16.2703 15.7907 16.2703H14.5007C13.9907 16.2703 13.7907 16.0803 13.7907 15.6003V9.54031C13.7907 9.06031 13.9907 8.87031 14.5007 8.87031H15.7907C16.3007 8.87031 16.5007 9.06031 16.5007 9.54031V15.6003Z"
        fill={theme?.palette?.primary?.main}
      />
    </svg>
  );
};

export default Pause;

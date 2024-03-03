import { useTheme } from '@mui/material';

const Notes = () => {
  const theme = useTheme();
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2854 6.05427C14.7392 5.59507 13.9035 5.64977 13.4293 6.2152L13.1443 6.55234L15.1642 8.24714L15.4363 7.91122C15.9043 7.35458 15.8451 6.52325 15.2854 6.05427ZM9.58076 10.7688L9.43044 10.9466C9.29951 11.1036 9.20655 11.2886 9.1588 11.4874L8.75025 13.1971C8.73134 13.2765 8.73489 13.3595 8.76051 13.437C8.78613 13.5145 8.8328 13.5833 8.8953 13.6357C9.01934 13.74 9.19431 13.7702 9.35236 13.7027L10.9655 13.0031C11.1526 12.9216 11.3184 12.7981 11.45 12.6422L11.6009 12.4638L9.58076 10.7688ZM12.5773 7.22333L10.1479 10.0978L12.1679 11.7928L14.5971 8.91813L12.5773 7.22333ZM11.7676 2.44756L10.0982 0.861397C9.94041 0.711777 9.74626 0.623652 9.54162 0.566406V3.13592H12.1506C12.096 2.87488 11.963 2.63307 11.7676 2.44756Z"
        fill={theme?.palette?.blue?.main}
      />
      <path
        d="M8.30334 11.2839C8.38188 10.9552 8.53851 10.644 8.75565 10.384L12.1777 6.33474V4.01562H9.10156C8.85866 4.01562 8.66211 3.81907 8.66211 3.57617V0.5H2.07031C1.34334 0.5 0.751953 1.09139 0.751953 1.81836V14.1816C0.751953 14.9086 1.34334 15.5 2.07031 15.5H10.8594C11.5863 15.5 12.1777 14.9086 12.1777 14.1816V13.1428L12.1207 13.2103C11.9048 13.4674 11.6263 13.6747 11.316 13.8099L9.70153 14.5099C9.24649 14.7063 8.71977 14.6367 8.32997 14.3103C7.94501 13.9871 7.77808 13.4829 7.89479 12.9937L8.30334 11.2839ZM2.94922 3.13672H7.34375C7.58665 3.13672 7.7832 3.33327 7.7832 3.57617C7.7832 3.81907 7.58665 4.01562 7.34375 4.01562H2.94922C2.70632 4.01562 2.50977 3.81907 2.50977 3.57617C2.50977 3.33327 2.70632 3.13672 2.94922 3.13672ZM2.94922 5.80273H9.98047C10.2234 5.80273 10.4199 5.99929 10.4199 6.24219C10.4199 6.48509 10.2234 6.68164 9.98047 6.68164H2.94922C2.70632 6.68164 2.50977 6.48509 2.50977 6.24219C2.50977 5.99929 2.70632 5.80273 2.94922 5.80273ZM6.46484 11.9551H2.94922C2.70632 11.9551 2.50977 11.7585 2.50977 11.5156C2.50977 11.2727 2.70632 11.0762 2.94922 11.0762H6.46484C6.70774 11.0762 6.9043 11.2727 6.9043 11.5156C6.9043 11.7585 6.70774 11.9551 6.46484 11.9551ZM2.94922 9.31836C2.70632 9.31836 2.50977 9.12181 2.50977 8.87891C2.50977 8.63601 2.70632 8.43945 2.94922 8.43945H8.22266C8.46556 8.43945 8.66211 8.63601 8.66211 8.87891C8.66211 9.12181 8.46556 9.31836 8.22266 9.31836H2.94922Z"
        fill={theme?.palette?.blue?.main}
      />
    </svg>
  );
};

export default Notes;

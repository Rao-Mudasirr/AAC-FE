import { useState } from 'react';

import { useTheme } from '@mui/material';

const usePermissionAccordion = () => {
  const theme = useTheme();

  const [isAccordionExpanded, setIsAccordionExpanded] = useState<
    string | false
  >('plan-air-sales-accordion');

  const handleExpandAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setIsAccordionExpanded(newExpanded ? panel : false);
    };

  return {
    theme,
    isAccordionExpanded,
    setIsAccordionExpanded,
    handleExpandAccordionChange,
  };
};

export default usePermissionAccordion;

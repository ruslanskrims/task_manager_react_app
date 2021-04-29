import { useState, useCallback, useEffect } from "react";

export const useCheckboxToggle = () => {
  const [is, setCheckbox] = useState(false);

  const toggleCheckBox = useCallback(() => {
    setCheckbox(!is);
  }, [is, setCheckbox]);

  return {
    toggleCheckBox,
    box: is,
  };
};

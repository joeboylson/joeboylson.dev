import { useCallback, useState } from "react";

export const useToggle = (defaultIs) => {

  const [is, setIs] = useState(defaultIs || false);
  const toggle = useCallback(() => setIs(!is)) 

  return {is, setIs, toggle};
}
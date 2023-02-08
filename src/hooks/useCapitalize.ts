import { useCallback, useMemo } from 'react';

type UseCapitalizeType = () => (str?: string | undefined) => void;

const useCapitalize: UseCapitalizeType = () => {
  const capitalize = useCallback((str?: string) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  }, []);
  return useMemo(() => capitalize, [capitalize]);
};
export default useCapitalize;

import { useQuery } from "@tanstack/react-query";
import { getActiveGiftCards } from "../services";

const useActiveGiftGards = () => {
  const { isPending, error, data, isFetching, isFetched } = useQuery({
    queryKey: ["activeGiftCards"],
    queryFn: () => getActiveGiftCards(),
  });

  return { isPending, error, data, isFetching, isFetched };
};

export { useActiveGiftGards };

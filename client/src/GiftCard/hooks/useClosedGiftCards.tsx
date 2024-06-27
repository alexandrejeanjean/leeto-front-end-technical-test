import { useQuery } from "@tanstack/react-query";
import { getArchivedGiftCards } from "../services";

const useArchivedGiftGards = () => {
  const { isPending, error, data, isFetching, isFetched } = useQuery({
    queryKey: ["archivedGiftCards"],
    queryFn: () => getArchivedGiftCards(),
  });

  return { isPending, error, data, isFetching, isFetched };
};

export { useArchivedGiftGards };

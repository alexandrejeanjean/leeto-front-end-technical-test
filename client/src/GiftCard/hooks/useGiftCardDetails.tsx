import { useQuery } from "@tanstack/react-query";
import { getGiftCardDetails } from "../services";

const useGiftCardDetails = (giftCardId: number) => {
  const { isPending, error, data, isFetching, isFetched } = useQuery({
    queryKey: ["giftCardDetails"],
    queryFn: () => getGiftCardDetails(giftCardId),
  });

  return { isPending, error, data, isFetching, isFetched };
};

export { useGiftCardDetails };

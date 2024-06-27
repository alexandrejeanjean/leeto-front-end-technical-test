import { formatDistance, subDays } from "date-fns";
import { fr } from "date-fns/locale";

const formatDate = (endDate: string) => {
  const result = formatDistance(new Date(endDate), new Date(), { locale: fr });
  return result;
};

export { formatDate };

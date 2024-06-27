import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardEmptyStatePlaceholder,
  CardLabel,
  CardLogo,
  CardName,
  CardProgressBar,
} from "..";
import { useGiftCardDetails } from "../hooks/useGiftCardDetails";
import { SkeletonCard } from "./SkeletonCard";
import { formatDate } from "../utils";
import { fr } from "date-fns/locale";
import { format } from "date-fns/format";
import { ReactComponent as TimeLogo } from "../assets/icon-time.svg";
import { ReactComponent as CalendarLogo } from "../assets/icon-calendar.svg";
import { ReactComponent as TrendLogo } from "../assets/icon-trend.svg";
import { ReactComponent as PeopleLogo } from "../assets/icon-people.svg";
import { GiftCard } from "../types";

const EMOJIS_WITH_BACKGROUND_SIZE = 32;

const emojis = ["🙋‍♂️", "💙", "👶"];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const GoBackButton = () => {
  return (
    <Link
      to="/"
      className="flex justify-center items-center min-w-5 min-h-5 mb-4 border border-slate-300 rounded-lg font-medium text-sm lg:text-regular-blue lg:border-none"
    >
      &#8592;
      <span className="hidden lg:block lg:ml-1">
        retour vers les cartes cadeaux
      </span>
    </Link>
  );
};

const BeneficiariesSummary = ({ data }: { data: GiftCard }) => {
  const othersBeneficiaries = data.beneficiaries;

  return (
    <Card>
      <div className="mb-3">
        <PeopleLogo />
      </div>
      <p className="font-medium text-base mb-1">
        Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?
      </p>
      <div className="flex">
        <div
          className="relative"
          style={{
            width: EMOJIS_WITH_BACKGROUND_SIZE * othersBeneficiaries.length + 1,
          }}
        >
          {othersBeneficiaries.map((person, index) => (
            <div
              key={person.firstName}
              className="flex justify-center items-center w-5 h-5 bg-slate-200 rounded-full absolute top-1/2 left-1/2 transform -translate-y-1/2 border border-spacing-2 border-white"
              style={{ left: 25 * index + "px", zIndex: index }}
            >
              {emojis[index]}
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm font-normal text-slate-600 text-wrap">
            <span>Vous même, </span>
            {othersBeneficiaries.map((person) => (
              <span key={person.firstName}>{person.firstName}, </span>
            ))}
            {othersBeneficiaries.length > 1
              ? "sont éligibles."
              : "est éligible"}
          </p>
        </div>
      </div>
    </Card>
  );
};

const BeneficiariesTrend = ({ data }: { data: GiftCard }) => {
  const othersBeneficiaries = data.beneficiaries;

  return (
    <Card>
      <div className="mb-3">
        <TrendLogo />
      </div>
      <p className="font-medium text-base mb-1">Suivi de consommation</p>
      <div>
        <div className="flex mb-1">
          <div className="flex justify-center items-center min-w-5 min-h-5 bg-slate-200 rounded-full mr-3">
            {getRandomEmoji()}
          </div>

          <CardProgressBar value={data.consumedAmount}>
            <CardLabel>
              Vous même • {data.consumedAmount}€ / {data.allowedAmount}€
            </CardLabel>
          </CardProgressBar>
        </div>

        <div className="grid lg:grid-cols-2 gap-1">
          {othersBeneficiaries.map((person) => (
            <div key={person.firstName} className="flex col-span-1">
              <div className="flex justify-center items-center min-w-5 min-h-5 bg-slate-200 rounded-full mr-3">
                {getRandomEmoji()}
              </div>
              <CardProgressBar value={person.consumption.consumedAmount}>
                <CardLabel>
                  {person.firstName} • {person.consumption.consumedAmount}€ /{" "}
                  {person.consumption.allowedAmount}€
                </CardLabel>
              </CardProgressBar>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Details = ({ cardId }: { cardId: number }) => {
  const { isPending, error, data, isFetched } = useGiftCardDetails(cardId);

  if (isPending || !isFetched) return <SkeletonCard key={6} />;

  if (error)
    return (
      <CardEmptyStatePlaceholder>
        "Une erreur est survenue: " + error.message
      </CardEmptyStatePlaceholder>
    );

  return (
    <div className="flex flex-col items-start">
      <div className="mb-1">
        <CardLogo />
      </div>
      <div className="mb-1">
        <CardName>{data.name}</CardName>
      </div>
      <CardLabel>
        <div className="flex flex-row flex-wrap">
          <div className="flex mb-1 lg:mb-0">
            <span className="flex mr-1">
              <span className="mr-0.5">
                <CalendarLogo />
              </span>
              {format(new Date(data.openingDate), "dd MMM yyyy", {
                locale: fr,
              })}
            </span>
            -
            <span className="flex mx-1">
              {format(new Date(data.closingDate), "dd MMM yyyy", {
                locale: fr,
              })}
            </span>
          </div>
          <span className="flex">
            <span className="mr-0.5">
              <TimeLogo />
            </span>
            Se clôture dans {formatDate(data.closingDate)}
          </span>
        </div>
      </CardLabel>

      <div className="flex items-end my-4">
        <div className="flex flex-col items-start mr-4">
          <p className="text-xl lg:text-2xl font-semibold text-slate-800">
            {data.allowedAmount - data.consumedAmount}€
          </p>
          <p>disponibles</p>
        </div>
        <CardProgressBar value={data.consumedAmount}>
          <CardLabel>
            {data.consumedAmount}€ dépensés /{data.allowedAmount}€
          </CardLabel>
        </CardProgressBar>
      </div>

      <div className="p-3 mb-4 bg-slate-50 rounded-card-radius">
        <p className="text-left font-semibold text-sm text-slate-800">
          Description de la la carte-cadeau
        </p>
        <p className="text-left font-normal text-base text-slate-800">
          {data.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <BeneficiariesSummary data={data} />
        <BeneficiariesTrend data={data} />
      </div>
    </div>
  );
};

const CardDetailsView = () => {
  let { id } = useParams();

  if (!id) return <p>Error</p>;

  return (
    <div className="flex flex-col items-start">
      <GoBackButton />
      <Details cardId={parseInt(id)} />
    </div>
  );
};

export { CardDetailsView as CardDetails };

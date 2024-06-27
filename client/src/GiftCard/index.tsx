import { GiftCard } from "./types";
import { ReactComponent as CardLogo } from "./assets/icon-object.svg";
import { formatDate } from "./utils";
import { Tab, TabPanel, Tabs } from "./components/tab/TabContext";
import { useActiveGiftGards } from "./hooks/useActiveGiftCards";
import { useArchivedGiftGards } from "./hooks/useClosedGiftCards";
import { CardLabel } from "./components/CardLabel";
import { CardName } from "./components/CardName";
import { CardProgressBar } from "./components/CardProgressBar";
import { SkeletonCard } from "./components/SkeletonCard";
import { Card } from "./components/Card";
import { CardEmptyStatePlaceholder } from "./components/CardEmptyStatePlaceholder";

const ActiveGiftCards = () => {
  const { isPending, error, data, isFetched } = useActiveGiftGards();

  if (isPending || !isFetched)
    return [...Array(6)].map((_item, index) => <SkeletonCard key={index} />);

  if (error)
    return (
      <CardEmptyStatePlaceholder>
        "Une erreur est survenue: " + error.message
      </CardEmptyStatePlaceholder>
    );

  return data.map((card: GiftCard) => (
    <Card key={card.name} cardDetailsId={card.id}>
      <div className="mb-1">
        <div className="mb-3">
          <CardLogo />
        </div>
        <CardLabel>Se clôture dans {formatDate(card.closingDate)}</CardLabel>
        <CardName>{card.name}</CardName>
      </div>
      <CardProgressBar value={card.consumedAmount}>
        <CardLabel>
          {card.consumedAmount}€ dépensés /{card.allowedAmount}€
        </CardLabel>
      </CardProgressBar>
    </Card>
  ));
};
const ArchivedGiftCards = () => {
  const { isPending, error, data, isFetched } = useArchivedGiftGards();

  if (isPending || !isFetched)
    return [...Array(6)].map((_item, index) => <SkeletonCard key={index} />);

  if (error)
    return (
      <CardEmptyStatePlaceholder>
        "Une erreur est survenue: " + error.message
      </CardEmptyStatePlaceholder>
    );

  return data.map((card: GiftCard) => (
    <Card key={card.name} cardDetailsId={card.id}>
      <div className="mb-1">
        <div className="mb-3">
          <CardLogo />
        </div>
        <CardLabel>Se clôture dans {formatDate(card.closingDate)}</CardLabel>
        <CardName>{card.name}</CardName>
      </div>
      <CardProgressBar value={card.consumedAmount}>
        <CardLabel>
          {card.consumedAmount}€ dépensés /{card.allowedAmount}€
        </CardLabel>
      </CardProgressBar>
    </Card>
  ));
};

const GiftCardView = () => {
  return (
    <Tabs>
      <div className="flex">
        <Tab index={0}>Actives</Tab>
        <Tab index={1}>Clôturées</Tab>
      </div>
      <div className="w-full border-b border-b-slate-300 mb-3"></div>
      <TabPanel index={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ActiveGiftCards />
        </div>
      </TabPanel>
      <TabPanel index={1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ArchivedGiftCards />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export {
  GiftCardView as GiftCard,
  CardLabel,
  CardName,
  CardLogo,
  CardProgressBar,
  Card,
  CardEmptyStatePlaceholder,
};

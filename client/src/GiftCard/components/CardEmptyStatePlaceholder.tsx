import { Card } from "./Card";

const CardEmptyStatePlaceholder = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Card>{children}</Card>;
};

export { CardEmptyStatePlaceholder };

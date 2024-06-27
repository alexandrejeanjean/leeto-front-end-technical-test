import { Link } from "react-router-dom";

type Card = {
  cardDetailsId?: number;
  children: React.ReactNode;
};

const Card: React.FC<Card> = ({ cardDetailsId, children }) => {
  if (!cardDetailsId) {
    return (
      <div className="w-full min-w-fit max-h-72 bg-white rounded-card-radius p-4 border border-slate-300 text-left">
        {children}
      </div>
    );
  }

  return (
    <Link
      to={`/${cardDetailsId}`}
      className="w-full min-w-fit max-h-72 bg-white rounded-card-radius p-4 border border-slate-300 text-left"
    >
      {children}
    </Link>
  );
};

export { Card };

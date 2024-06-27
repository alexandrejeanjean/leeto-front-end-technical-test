import { GiftCard } from "../GiftCard";

type Main = {
  pageTitle: string;
  children: React.ReactNode;
};

const Main: React.FC<Main> = ({ pageTitle, children }) => (
  <div className="App p-5.5 max-w-screen-xl m-auto">
    <header className="mb-3">
      <h1 className="text-xl md:text-2xl text-left font-semibold">
        {pageTitle}
      </h1>
    </header>
    <body>{children}</body>
  </div>
);

export { Main };

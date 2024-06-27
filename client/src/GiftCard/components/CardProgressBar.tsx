type CardProgressBar = {
  value: number;
  children: React.ReactNode;
};

const CardProgressBar: React.FC<CardProgressBar> = ({ value, children }) => {
  return (
    <div className="text-left w-full">
      {children}
      <div className="flex flex-row items-center">
        <progress className="leeto-progress-bar" value={value} max={100} />{" "}
        <span className="text-xs font-medium leading-4 ml-1">{value}%</span>
      </div>
    </div>
  );
};

export { CardProgressBar };

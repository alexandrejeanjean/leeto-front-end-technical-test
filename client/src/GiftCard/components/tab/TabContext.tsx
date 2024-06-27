import { createContext, useState, useContext } from "react";
import { twMerge } from "tailwind-merge";

type TabState = {
  activeTab: number;
  changeTab: (activeTab: number) => void;
};

const TabsContext = createContext<TabState>({
  activeTab: 0,
  changeTab: () => null,
});
const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const changeTab = (tab: number) => setActiveTab(tab);
  return (
    <TabsContext.Provider value={{ activeTab, changeTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

const Tab = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { activeTab, changeTab } = useContext<TabState>(TabsContext);
  return (
    <div
      onClick={() => changeTab(index)}
      className={twMerge(
        "w-full md:w-fit px-3 py-1 text-center text-sm font-semibold text-slate-600",
        index === activeTab &&
          "text-regular-blue border-b border-b-regular-blue"
      )}
    >
      {children}
    </div>
  );
};

const TabPanel = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const { activeTab } = useContext<TabState>(TabsContext);
  return index === activeTab ? <div>{children}</div> : null;
};

export { Tabs, Tab, TabPanel };

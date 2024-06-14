import * as React from "react";

const tabContext = React.createContext({
  activeTabValue: null,
  setActiveTabValue: (_tab) => {}
});

function TabProvider({ children, defaultValue }) {
  const [activeTabValue, setActiveTabValue] = React.useState(defaultValue);

  return (
    <tabContext.Provider value={{ activeTabValue, setActiveTabValue }}>
      {children}
    </tabContext.Provider>
  )
}

function TabTrigger({ value, children }) {
  const { activeTabValue, setActiveTabValue } = React.useContext(tabContext);

  return (
    <button
      onClick={() => setActiveTabValue(value)}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

function TabContent({ value, children }) {
  const { activeTabValue } = React.useContext(tabContext);

  if (activeTabValue !== value) return null;

  return children;
}

export default function App() {
  return (
    <section>
      <h1>Tabs</h1>
      <TabProvider defaultValue="tab-1">
        <div className="tabs">
          <TabTrigger value="tab-1">Tab 1</TabTrigger>
          <TabTrigger value="tab-2">Tab 2</TabTrigger>
          <TabTrigger value="tab-3">Tab 3</TabTrigger>
        </div>
        <TabContent value="tab-1">Tab Content 1</TabContent>
        <TabContent value="tab-2">Tab Content 2</TabContent>
        <TabContent value="tab-3">Tab Content 3</TabContent>
      </TabProvider>
    </section>
  );
}

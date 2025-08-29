import React, { useState } from 'react';

interface Tab {
  label: string;
  items: string[];
}
interface Props {
  tabs: Tab[];
}

/**
 * Simple tab component used on the MyStable dashboard. Tabs are
 * controlled via local state; clicking a tab changes the active
 * content list. Each tab renders a list of items provided in
 * props.
 */
export default function TabbedSection({ tabs }: Props) {
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* Tab headers */}
      <div className="flex space-x-6 border-b border-gray-800 mb-6 overflow-x-auto">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={
              'pb-2 text-sm font-medium ' +
              (active === idx
                ? 'border-b-2 border-gold text-gold'
                : 'text-graytext hover:text-gold')
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <ul className="space-y-2 text-sm">
        {tabs[active].items.map(item => (
          <li key={item} className="text-graytext">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

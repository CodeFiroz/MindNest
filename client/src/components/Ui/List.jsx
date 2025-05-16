import React from 'react';

const List = ({ items, style }) => {
  if (style === 'checklist') {
    return (
      <div className="my-6 space-y-4">
        {items.map((item, index) => (
          <label
            key={index}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              item.meta?.checked
                ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700'
                : 'bg-zinc-100/40 dark:bg-zinc-800/40 border border-zinc-300 dark:border-zinc-600'
            }`}
          >
            <input
              type="checkbox"
              checked={item.meta?.checked}
              readOnly
              className="w-5 h-5 accent-indigo-500 rounded cursor-not-allowed"
            />
            <span
              className={`text-sm font-medium transition-colors ${
                item.meta?.checked
                  ? 'line-through text-indigo-700 dark:text-indigo-400'
                  : 'text-zinc-700 dark:text-slate-300'
              }`}
            >
              {item.content}
            </span>
          </label>
        ))}
      </div>
    );
  }

  // Fallback for ordered or unordered lists
  const Tag = style === 'unordered' ? 'ul' : 'ol';

  return (
    <Tag className="my-3 ml-4 list-disc text-zinc-700 dark:text-slate-300 text-sm">
      {items.map((list, index) => (
        <li key={index} className="mt-2">
          {list}
        </li>
      ))}
    </Tag>
  );
};

export default List;

import React, { useEffect, useRef } from "react";
import { PencilIcon, Trash, X } from "lucide-react";

const ManageHabits = ({ onClose, habits = [] }) => {
  const modalRef = useRef();

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl w-[90%] max-w-3xl p-6 relative"
      >
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-bold mb-4 text-gray-700 dark:text-white">
          Manage Habits
        </h2>

        <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
          {habits.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-300">
              No habits to manage.
            </p>
          ) : (
            habits.map((habit, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded flex justify-center items-center text-xl">
                    {habit.emoji || "🔥"}
                  </div>
                  <h4 className="text-md font-semibold text-zinc-700 dark:text-zinc-200">
                    {habit.title}
                  </h4>
                </div>

                <div className="flex gap-2">
                  <button className="text-sm w-8 h-8 flex justify-center items-center bg-amber-500 hover:bg-amber-600 text-white rounded">
                    <PencilIcon size={18} />
                  </button>
                  <button className="text-sm w-8 h-8 flex justify-center items-center bg-red-600 hover:bg-red-700 text-white rounded">
                    <Trash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageHabits;

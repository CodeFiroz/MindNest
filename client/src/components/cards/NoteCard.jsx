import { Pencil } from "lucide-react";
import React from "react";

const NoteCard = () => {
  return (
    <>
      <a
        href=""
        className="bg-yellow-50 w-full h-60 rounded-2xl border border-zinc-100 shadow-md p-4 flex flex-col justify-between duration-200 hover:scale-95 hover:shadow-sm hover:rounded-3xl hover:border-slate-200 dark:bg-neutral-900 dark:border-neutral-800"
      >
        <div>
          <div className="flex justify-end">
            <div className="mb-4 w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center text-zinc-600 border-2 border-orange-200 text-3xl">
              😊
            </div>
          </div>

          <h3 className="text-stone-800 font-semibold text-md line-clamp-2 dark:text-slate-100">
            Small Wins, Big Smiles
          </h3>
          <p className="line-clamp-3 text-xs text-gray-500 mt-3">
            Today was chill but productive. I didn’t crush everything on my
            to-do list, but I knocked out the hard stuff early and gave myself
            permission to rest.
          </p>
        </div>

        <div className="flex justify-between items-center text-xs text-zinc-600">
          <p>May 15, 2025</p>
          <p>9:42 PM</p>
        </div>
      </a>
    </>
  );
};

export default NoteCard;

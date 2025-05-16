import React from "react";
import cover from "/images/cover.jpg";
import demoEditorData from "./journal.js";
import RenderEditorContent from "../utils/renderBlock.jsx";
import Background from "/images/background.png";
import { Archive, Trash2 } from "lucide-react";

const ViewJournal = () => {
  return (
    <>
      <div
        className={`relative w-full  bg-cover bg-center flex flex-col justify-center items-end`}
        style={{ backgroundImage: `url(${Background})` }}
      >
  <div className="absolute inset-0 bg-white/70 dark:bg-black/85 z-10"></div>

        <div className="w-full h-60 flex justify-center items-center bg-zinc-200 rounded">
          <div className="w-full h-60 flex justify-center items-center bg-zinc-200 rounded overflow-hidden  z-10">
            <img
              src={cover}
              className="h-full object-cover object-center"
              alt="Cover Preview"
            />
          </div>
        </div>

        <div className=" z-10 lg:w-5/6 w-full px-5 pb-20 pt-10 gap-3">

          <div className="flex justify-end items-center gap-3 mb-10 lg:mb-0">

            <button className="px-3 py-1 rounded bg-stone-900 text-amber-500 flex items-center gap-2 text-sm duration-200 hover:scale-90">
              <Archive size={14} />
              <span>Archive</span>
            </button>

             <button className="px-3 py-1 rounded bg-red-300 text-red-700 flex items-center gap-2 text-sm duration-200 hover:scale-90 hover:bg-red-600 hover:text-red-200">
              <Trash2 size={14} />
              <span>Move To Trash</span>
            </button>

          </div>

          <div className="flex flex-col sm:flex-row sm:items-center items-start gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-amber-100 flex justify-center items-center rounded-full border-4 border-orange-200 text-4xl">
              😾
            </div>
            <div>
              <p className="text-sm text-zinc-400">12 May 2025 - 02:33 PM</p>

              <h1 className="text-2xl lg:text-4xl font-semibold mt-2 text-gray-600 dark:text-zinc-300">
                Finding Stillness in the Chaos
              </h1>
            </div>
          </div>

            <div className="w-full border-t border-dashed border-zinc-200 mt-4"></div>

          <div className="pt-10">
            <RenderEditorContent blocks={demoEditorData.blocks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJournal;

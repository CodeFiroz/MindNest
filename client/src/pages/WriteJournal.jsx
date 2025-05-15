import { Sticker, Image, Calendar } from "lucide-react";
import Editor from "../utils/Editor";
import React, { useState, useRef } from "react";
import autoResize from "../utils/autoResize";
import EmojiPicker from "emoji-picker-react";
import MoodSelector from "../components/modals/MoodSelector";

const WriteJournal = () => {
  const [data, setData] = useState(null);
  const [mood, setMood] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const titleRef = useRef();

  return (
    <div className="w-full flex justify-center  items-end">
      <div className="w-5/6 mt-10">
        <div className="flex mb-5 justify-between items-center">
          <div className="flex my-4 gap-3">
            <button
              onClick={() => setShowEmoji(true)}
              className="bg-zinc-100 border border-zinc-200 cursor-pointer text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 rounded flex items-center gap-2 dark:bg-stone-700 dark:border-stone-800 dark:text-zinc-300"
            >
              {mood !== null ? (
                <span>{mood}</span>
              ) : (
                <>
                  <span className="text-indigo-500">
                    <Sticker size={14} />
                  </span>
                  Add Mood
                </>
              )}
            </button>
            {showEmoji && (
              <MoodSelector
                onClose={() => setShowEmoji(false)}
                onEmojiSelect={(emoji) => setMood(emoji)}
              />
            )}
            <button className="bg-zinc-100 border border-zinc-200 cursor-pointer text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 rounded flex items-center gap-2 dark:bg-stone-700 dark:border-stone-800 dark:text-zinc-300">
              <span className="text-teal-500">
                <Image size={14} />
              </span>
              Add Cover
            </button>
          </div>

          <div className="flex my-4 gap-3">
            <button className="bg-zinc-100 border border-zinc-200 cursor-pointer text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 rounded flex items-center gap-2 dark:bg-stone-700 dark:border-stone-800 dark:text-zinc-300">
              <span className="text-orange-500">
                <Calendar size={14} />
              </span>
              Today
            </button>
          </div>
        </div>

        <textarea
          className="text-2xl lg:text-4xl bg-transparent outline-none border-none w-full font-semibold text-slate-600 dark:text-stone-500 resize-none overflow-hidden"
          placeholder="Today felt like sunshine and emails ☀️💻"
          rows={1}
          ref={titleRef}
          onInput={() => autoResize(titleRef)}
        />

        <Editor
          data={data}
          onChange={setData}
          editorBlock="editorjs-container"
        />
      </div>
    </div>
  );
};

export default WriteJournal;

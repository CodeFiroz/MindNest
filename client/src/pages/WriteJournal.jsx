import { Sticker, Image, NotebookPen } from "lucide-react";
import Editor from "../utils/Editor";
import React, { useState, useRef, useCallback } from "react";
import autoResize from "../utils/autoResize";
import MoodSelector from "../components/modals/MoodSelector";
import CoverBlock from "../components/Ui/CoverBlock";

const WriteJournal = () => {
  const [data, setData] = useState(null);
  const [cover, setCover] = useState(null);
  const [mood, setMood] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const titleRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      titleRef.current.blur();
    }
  };

  const handleCover = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setCover(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
        {cover && <CoverBlock cover={cover} handleCoverPhoto={setCover} />}
      <div className="lg:w-5/6 w-full p-5">

        <div className="flex mb-5 justify-between items-center gap-2">
          <div className="flex my-4 gap-3">
            <button
              onClick={() => setShowEmoji(true)}
              className="bg-zinc-100 border border-zinc-200 cursor-pointer text-[10px] lg:text-sm px-1 lg:px-3 py-1 lg:py-2 rounded flex items-center gap-2 dark:bg-stone-700 dark:border-stone-800 dark:text-zinc-300"
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

            <input
              type="file"
              id="cover"
              accept="image/*"
              onChange={(e) => handleCover(e)}
              hidden
            />
            <label
              htmlFor="cover"
              className="bg-zinc-100 border border-zinc-200 cursor-pointer text-[10px] lg:text-sm px-2 lg:px-3 py-1 lg:py-2 rounded flex items-center gap-2 dark:bg-stone-700 dark:border-stone-800 dark:text-zinc-300"
            >
              <span className="text-teal-500">
                <Image size={14} />
              </span>
              Add Cover
            </label>
          </div>

          <div className="flex my-4 gap-3">
            <button
            onClick={()=> console.log(data)}
              className="bg-amber-400 border border-orange-200 cursor-pointer text-[10px] lg:text-sm px-2 lg:px-3 py-1 lg:py-2 rounded flex items-center gap-2"
            >
              <span className="text-stone-800">
                <NotebookPen size={14} />
              </span>
              Save Journal
            </button>
          </div>
        </div>

        <textarea
          className="text-2xl lg:text-4xl bg-transparent outline-none border-none w-full font-semibold text-slate-600 dark:text-stone-500 resize-none overflow-hidden"
          placeholder="Today I felt..."
          rows={1}
          ref={titleRef}
          onInput={() => autoResize(titleRef)}
          onKeyDown={handleKeyDown}
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

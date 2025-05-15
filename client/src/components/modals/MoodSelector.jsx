import React from "react";
import EmojiPicker from "emoji-picker-react";
import { X } from "lucide-react";

const MoodSelector = ({ onClose, onEmojiSelect }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-lg p-4 relative w-[90%] max-w-sm">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <X size={18} />
        </button>

        {/* Emoji Picker */}
        <EmojiPicker
          theme="dark"
          onEmojiClick={(emojiData) => {
            onEmojiSelect(emojiData.emoji);
            onClose(); // Auto-close on select (optional)
          }}
          width="100%"
          height={400}
        />
      </div>
    </div>
  );
};

export default MoodSelector;

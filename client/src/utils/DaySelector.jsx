import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";

const DaySelector = () => {
  const today = new Date();
  const [dateOffset, setDateOffset] = useState(0); // 0 = today, -1 = yesterday, etc.
  const [dateText, setDateText] = useState("Today");

  const getTargetDate = (offset) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d;
  };

  useEffect(() => {
    const targetDate = getTargetDate(dateOffset);
    const diff = Math.floor(
      (today.setHours(0, 0, 0, 0) - targetDate.setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24)
    );

    if (diff === 0) setDateText("Today");
    else if (diff === 1) setDateText("Yesterday");
    else setDateText(targetDate.toLocaleDateString("en-NZ", { month: "short", day: "numeric" }));
  }, [dateOffset]);

  const handlePrevDate = () => {
    if (dateOffset <= -6) {
        toast.error("Can't go further back than 6 days.")
      return;
    }
    setDateOffset((prev) => prev - 1);
  };

  const handleNextDate = () => {
    if (dateOffset >= 0) {
        toast.error("You're already on today.")
      return;
    }
    setDateOffset((prev) => prev + 1);
  };

  return (
    
    <div className="flex gap-2 items-center">

        <Toaster />

      <button
        onClick={handlePrevDate}
        className="w-8 h-8 bg-gray-900 text-white flex justify-center items-center rounded dark:bg-gray-800"
      >
        <ChevronLeft size={18} />
      </button>

      <button className="flex items-center px-3 py-2 rounded-xl cursor-auto bg-orange-500 text-white gap-2 text-sm ">
        <CalendarIcon size={18} />
        <span>{dateText}</span>
      </button>

      <button
        onClick={handleNextDate}
        className="w-8 h-8 bg-gray-900 text-white flex justify-center items-center rounded dark:bg-gray-800"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default DaySelector;

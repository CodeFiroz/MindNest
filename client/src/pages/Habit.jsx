import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Settings2,
} from "lucide-react";
import HabitCard from "../components/cards/HabitCard";
import DaySelector from "../utils/DaySelector";
import FabIcon from "../components/Ui/FabIcon";
import { useState } from "react";
import ManageHabits from "../components/modals/ManageHabits";
import NewHabit from "../components/modals/NewHabit";

const Habit = () => {

  const [showManage, setShowmanage] = useState(false);
  const [shoeHabitForm, setHabitForm] = useState(false);
const habits = [
  { emoji: "🏃‍♂️", title: "Walk 10Km Daily" },
  { emoji: "💧", title: "Drink 4L Water" },
  { emoji: "📚", title: "Read 20 Pages" },
];

  return (
    <>
    <FabIcon onClick={()=> setHabitForm(true)}/>
    {
      showManage && (
        <ManageHabits onClose={() => setShowmanage(false)} habits={habits} />
        
      )
    }
    {
      shoeHabitForm && (
        <NewHabit onClose={() => setHabitForm(false)} />
      )
    }
      <div className="p-5 ">
       <div className="flex justify-between lg:justify-end items-center gap-8">
             <DaySelector />
      
                <button onClick={()=> setShowmanage(true)} className="flex items-center px-3 py-2 rounded-xl bg-neutral-900 text-white gap-2 text-sm dark:bg-slate-700">
                  <Settings2 size={18} />
                  <span>Manage Habits</span>
                </button>
              </div>


        <div className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <HabitCard
            emoji="💧"
            title="Drink 4L Water"
            streak={0}
            theme="indigo"
          />

          <HabitCard emoji="💪" title="Get Muscular" streak={5} theme="amber" />

          <HabitCard emoji="🏃‍♂️" title="10k Step Walk" streak={2} theme="teal" />

          <HabitCard emoji="🌐" title="Work on Project" streak={15} />
        </div>
      </div>
    </>
  );
};

export default Habit;

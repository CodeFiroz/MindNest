import React from "react";
import UserAvatar from "../Ui/UserAvatar";
import NavItems from "./NavItems";
import {
  Archive,
  BookHeart,
  Bot,
  CircleUserRound,
  Cog,
  DoorClosedLocked,
  Lightbulb,
  MessageCircleDashed,
  Moon,
  Notebook,
  Pin,
  Trash,
} from "lucide-react";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="w-full h-screen bg-white border-r border-zinc-100 p-3 dark:bg-stone-900 dark:border-neutral-800">
      <UserAvatar />

      <nav className="my-5 space-y-3" onClick={closeSidebar}>
        <NavItems icon={<Notebook size={20} />} label={"Journal"} />

        <NavItems
          icon={<Pin size={20} />}
          label={"Memories"}
          iconStyles={"group-hover:text-red-400"}
        />

        <NavItems
          icon={<BookHeart size={20} />}
          label={"My Habits"}
          iconStyles={"group-hover:text-indigo-400"}
        />
       
      </nav>

      <nav
        className="my-5 space-y-3 border-t pt-5 border-zinc-100 dark:border-stone-800"
        onClick={closeSidebar}
      >
        <NavItems
          icon={<Trash size={20} />}
          label={"Trash"}
          iconStyles={"group-hover:text-red-300"}
        />
        <NavItems
          icon={<Archive size={20} />}
          label={"Archives"}
          iconStyles={"group-hover:text-slate-600"}
        />

        <NavItems
          icon={<CircleUserRound size={20} />}
          label={"Profile"}
          iconStyles={"group-hover:text-teal-400"}
        />

        <NavItems
          icon={<Cog size={20} />}
          label={"Settings"}
          iconStyles={"group-hover:text-indigo-500"}
        />
      </nav>

      <nav
        className="my-5 space-y-3 border-t pt-5 border-zinc-100 dark:border-stone-800"
        onClick={closeSidebar}
      >
        <NavItems
          icon={<Bot size={20} />}
          label={"Chat With AI"}
          iconStyles={"group-hover:text-emerald-500"}
        />
        <NavItems
          icon={<MessageCircleDashed size={20} />}
          label={"Unsend Messages"}
          iconStyles={"group-hover:text-rose-500"}
        />
      </nav>

      <nav
        className="my-5 space-y-3 border-t pt-5 border-zinc-100 dark:border-stone-800"
        onClick={closeSidebar}
      >
         <NavItems
          icon={<Moon size={20} />}
          label={"DarkMode"}
          styles={"hover:bg-stone-800 dark:hover:bg-red-600"}
          iconStyles={"group-hover:text-zinc-300 dark:group-hover:text-zinc-300"}
          labelStyles={"group-hover:text-white"}
        />

        <NavItems
          icon={<DoorClosedLocked size={20} />}
          label={"Log Out"}
          styles={"hover:bg-red-200 dark:hover:bg-red-600"}
          iconStyles={"group-hover:text-red-500 dark:group-hover:text-zinc-300"}
          labelStyles={"group-hover:text-red-600"}
        />
      </nav>
    </div>
  );
};

export default Sidebar;

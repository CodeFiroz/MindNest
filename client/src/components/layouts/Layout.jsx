import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NoNotes from "../screens/NoNotes";
import NewNote from "../cards/NewNote";
import NoteCard from "../cards/NoteCard";
import WriteJournal from "../../pages/WriteJournal";
import ViewJournal from "../../pages/ViewJournal";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="w-full bg-slate-50 flex dark:bg-neutral-900">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full z-50 bg-white shadow-md lg:shadow-none transition-transform duration-300
          lg:relative lg:translate-x-0 lg:w-1/5 
          w-4/5 sm:w-3/5 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }
        `}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      <div className="w-full flex flex-col h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-100 bg-slate-50 lg:ml-0 ml-0 dark:bg-stone-900">
        <div className="sticky top-0 z-40">
          <Header SidebarOpen={isSidebarOpen} setSidebar={setIsSidebarOpen} />
        </div>

        <ViewJournal />
        {/* <WriteJournal /> */}
        
        {/* <div className="grid grid-cols-2 lg:grid-cols-5  gap-3 p-3 lg:p-10">
          <NewNote />
          <NoteCard />
        </div> */}

        {/* <NoNotes /> */}
        
      </div>
    </div>
  );
};

export default Layout;

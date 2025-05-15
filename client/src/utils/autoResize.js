const autoResize = (titleRef) => {
  const el = titleRef.current;
  if (el) {
    el.style.height = "auto"; // reset
    el.style.height = el.scrollHeight + "px"; // set to scroll height
  }
};

export default autoResize;

(() => {
  document.body.getElementsByTagName("main")[0].parentElement.style.width = "100%";
  const rightColumn = document.body.getElementsByClassName("team-left-column")[1];
  const elements = rightColumn.getElementsByClassName("Truncate-text");

  Array.from(elements).forEach((el) => {
    el.style.minWidth = "initial";
    el.style.overflow = "visible";
  });
})();
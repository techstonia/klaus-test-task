export default (oldConfig, columnToBePressed) => {
  const toggleCurrentColumn = oldConfig.column === columnToBePressed;

  if (toggleCurrentColumn) {
    return {
      column: columnToBePressed,
      direction: oldConfig.direction === "asc" ? "desc" : "asc",
    };
  }

  return {
    column: columnToBePressed,
    direction: "asc",
  };
};
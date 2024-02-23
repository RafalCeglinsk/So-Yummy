export const getViewMode = () => {
  const width = window.innerWidth;
  if (width >= 1280) {
    return "desktop";
  } else if (width >= 768) {
    return "tablet";
  } else {
    return "mobile";
  }
};

export const getRecipesLimit = (viewMode, categoryRecipes) => {
  switch (viewMode) {
    case "mobile":
      return 1;
    case "tablet":
      return 2;
    case "desktop":
      return categoryRecipes.length;
    default:
      return 1;
  }
};

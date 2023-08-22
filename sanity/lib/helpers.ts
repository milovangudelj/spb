export const getTypeTitles = (
  types: ("freeform" | "accordions" | "productCard")[],
) => {
  const typeNames = types.map((type) => {
    switch (type) {
      case "freeform":
        return "Freeform";
      case "accordions":
        return "Accordions";
      case "productCard":
        return "Product Card";
      default:
        return null;
    }
  });

  return typeNames.join(" + ");
};

export const getModuleName = (type: "hero" | "marquee") => {
  switch (type) {
    case "hero":
      return "Hero";
    case "marquee":
      return "Marquee";
    default:
      return undefined;
  }
};

export const kebabCaseToCompCase = (string: string): string => {
  return string.split("-").map(word => word[0].toUpperCase() + word.substring(1)).join("")
}

export const createIconKey = (iconName: string, iconProvider: string): string => {
  return `${iconProvider}-${
    iconName.includes("-") ? iconName.split("-")[1] : iconName
  }`;
};
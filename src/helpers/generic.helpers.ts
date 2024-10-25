export const propsToArray = (props: { [key: string]: any }): string[] =>
  Object.keys(props);

export const camelToDashCase = (text: string): string =>
  text.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

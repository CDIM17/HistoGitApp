export const DestructurePath: (path: string) => string = (
  path: string,
): string => {
  const splitPath: string[] = path.split('/');
  if (splitPath.length < 3) return;
  let [, , controller]: string[] = splitPath;
  controller = controller.toUpperCase();
  return controller;
};

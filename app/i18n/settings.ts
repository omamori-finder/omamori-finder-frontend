export const fallbackLng = "en";
export const languages = [fallbackLng, "jp"];
export const defaultNamespace = "translation";
export const cookieName = "i18next";

export function getOptions(
  lng = fallbackLng,
  namespaces: string | string[] = defaultNamespace
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNamespace,
    defaultNamespace,
    namespaces,
  };
}

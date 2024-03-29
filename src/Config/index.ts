const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  i18n: {
    debbug: JSON.parse(
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
      // Converts 'true' to true and 'false' to false
    ),
  },
  api: {
    baseUrl: import.meta.env.VITE_POKEAPI_BASE_URL,
    spritesBaseUrl: import.meta.env.VITE_POKEAPI_SPRITES_BASE_URL ?? '',
  },
};

export default Config;

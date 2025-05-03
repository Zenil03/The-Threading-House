
export default {
  basePath: 'https://zenil03.github.io/The-Threading-House',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

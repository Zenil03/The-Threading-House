
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: 'https://zenil03.github.io/The-Threading-House/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/The-Threading-House"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1019, hash: '393b2ff28ab94c29ad60db93269507d6cd148b809de9b6e3423be8fd25a4dc14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1559, hash: 'bac7fdd6bb11e3ab325141b5c83663f31b3483c6a61e219dcfc45040a31e8af0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68879, hash: '9e7038996343f8bc3934be9e4a9264841469966594e940b088b11307cb8afaf7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};

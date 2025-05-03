
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
    'index.csr.html': {size: 7163, hash: '850fb39fbfe9c5e136402a4ad6055ac94c1f28a482dd63115287ffcff9d6f5f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6799, hash: 'b9010682a3a8fef99bf90a4d798166fa95cad14ace0035a951470e6e0d4baa06', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74205, hash: '5263c0596771aa7ceae5e01da8d50a41920b472814638876bf9457949f3068b4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SCM3HP62.css': {size: 1759, hash: '8qy9dDxXx3I', text: () => import('./assets-chunks/styles-SCM3HP62_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 7163, hash: '78af1be014b15a9dc8bfb8709e37cc65e6f248cae33f64baddfbeafe85fecba7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6799, hash: 'd9ba124945d5779799af92a2e1c3ed7c3a28cced60a998e63e27d4fa052dae7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 74462, hash: '822b65a5ab5f59f103d816aa65a1a40dd34382f60de4851d5c61e52080ee9fa4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SCM3HP62.css': {size: 1759, hash: '8qy9dDxXx3I', text: () => import('./assets-chunks/styles-SCM3HP62_css.mjs').then(m => m.default)}
  },
};

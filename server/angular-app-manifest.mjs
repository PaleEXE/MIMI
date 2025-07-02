
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 0,
    "route": "/topic/*"
  },
  {
    "renderMode": 0,
    "route": "/topic/*/logic-evaluator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16708, hash: 'ea1d4fb7697030a0fa0dbde47f93f02d718a75d05090a24bcac7697658ac9d63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 940, hash: '21f4e79b383d2c3f03ed2e2e8b919d2b749e3758a9eb1bbd2a3665ef8adb7602', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24982, hash: 'c5d47f017c75daa65ad73b1d922ec90922fabbc7ea1e0bf8544281916dbedd48', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 24982, hash: 'c5d47f017c75daa65ad73b1d922ec90922fabbc7ea1e0bf8544281916dbedd48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XIWYEXUN.css': {size: 89127, hash: 'XT3zEvppqRc', text: () => import('./assets-chunks/styles-XIWYEXUN_css.mjs').then(m => m.default)}
  },
};

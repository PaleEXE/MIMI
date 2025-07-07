
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
  },
  {
    "renderMode": 0,
    "route": "/topic/*/plot"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16996, hash: '4eb36f5e2e506fbcfadde1d85a677eaf2956e3714a78c879da65abb7e2994bbc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 912, hash: 'b4b7aec690c208d4928e3a66e52e9989b204e1518cd22e99a97545376cb7a883', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 25212, hash: '3ec8eddf6712db8dcdd9ced4d86d2e2cab03a61f33785ff21a29106ca15fcc4e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25212, hash: '3ec8eddf6712db8dcdd9ced4d86d2e2cab03a61f33785ff21a29106ca15fcc4e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YXYE4245.css': {size: 90602, hash: 'B8YozH50Q/Q', text: () => import('./assets-chunks/styles-YXYE4245_css.mjs').then(m => m.default)}
  },
};

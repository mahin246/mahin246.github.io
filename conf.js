jsproxy_config({
  ver: '110',

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
    'mysite': {
      label: 'Go',
      lines: {
        [location.host]: 1,
      }
    },
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
      }
    }
  },
  node_default: 'mysite',

  node_acc: 'cfworker',

  assets_cdn: 'assets/',

  index_path: 'index_v3.html',

  direct_host_list: 'cors_v1.txt',

  inject_html: '<!-- custom html -->',

  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pastehub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})

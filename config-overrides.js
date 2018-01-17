const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
      modifyVars: { "@primary-color": "rgb(16, 142, 233)" },  // 主题色蓝色
    })(config, env);
    return config;
  };
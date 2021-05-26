// next.config.js
// const withTM = require('next-transpile-modules')(['next-images'])

// module.exports = withTM( {
//     future: {
//         webpack5: true
//     },
//     webpack: function (config, options) {
//         console.log(options.webpack.version); // 5.18.0
//         config.experiments = {};
//         return config;
//     }
// });

const withImages = require('next-images')
// sassOptions: { includePaths: [path.join(__dirname, 'styles')] },

module.exports = withImages({
  esModule: true,
  webpack(config, options) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    return config
  },
})

const presets = [
  [
    "@babel/preset-env",
    {
      corejs: 3,
      useBuiltIns: "entry",
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      debug: false
    },
  ]
]

const plugins = [];

module.exports = { presets, plugins };
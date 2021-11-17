module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  babel: {
    presets: [
      require('@babel/preset-react'),
    ],
    plugins: [
      require('@babel/plugin-syntax-jsx'),
    ],
  },
  jest: {
    babel: {
      addPresets: true, /* (default value) */
      addPlugins: true,  /* (default value) */
    },
    configure: {
      "snapshotSerializers": [
        "enzyme-to-json/serializer"
      ]
    },
  },
}

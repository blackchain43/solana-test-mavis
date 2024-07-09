module.exports = {
  plugins: {
    // Ensures the default variables are available
    'postcss-custom-properties-fallback': {
      importFrom: require.resolve('./default.json'),
    },
  },
};

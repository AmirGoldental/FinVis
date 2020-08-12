module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/FinVis/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://bimbingan-ta.herokuapp.com'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://bimbingan-proposal.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
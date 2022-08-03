export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f8441674f5f149573ba1b516b75e146d'),
  },
});

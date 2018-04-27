module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/rap_posts_db",
    seeds: {
      directory: "./seeds/development"
    }
  }
};
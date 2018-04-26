module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/rap_posts_database",
    seeds: {
      directory: "./seeds/development"
    }
  }
};
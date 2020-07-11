module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'src/database/twitter_news_bot'
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  production: {
    dialect: 'sqlite',
    use_env_variable: 'src/database/twitter_news_bot'
  }
};


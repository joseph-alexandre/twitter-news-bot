module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
      description: DataTypes.STRING,
      url: DataTypes.STRING,
    });
  
    return News;
  }
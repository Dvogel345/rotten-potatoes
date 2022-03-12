const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Movie }) {
      // user
      Rating.belongsTo(User, {
        foreignKey: "user_id",
        as: "users"
      })
      Rating.belongsTo(Movie, {
        foreignKey: "movie_id",
        as: "movies"
      })
    }
  }
  Rating.init({
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    rating: { 
      type: DataTypes.STRING 
    }
  }, {
    sequelize,
    modelName: 'Rating',
    tableName: 'ratings'
  });
  return Rating;
};
// @param {import("sequelize").Sequelize} Sequelize : sequelize 라이브러리에서 Sequelize 클래스를 가져와서 명시
/**
 * Player 모델을 정의하는 함수
 * @param {import("sequelize").Sequelize} Sequelize
 * @param {import("sequelize").DataTypes} DataTypes
 */

const PlayerModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
module.exports = PlayerModel;

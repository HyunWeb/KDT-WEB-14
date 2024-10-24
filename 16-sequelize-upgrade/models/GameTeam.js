// @param {import("sequelize").Sequelize} Sequelize : sequelize 라이브러리에서 Sequelize 클래스를 가져와서 명시
/**
 * game과 team 연결 모델을 정의하는 함수
 * @param {import("sequelize").Sequelize} Sequelize
 * @param {import("sequelize").DataTypes} DataTypes
 */

const GameTeamModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "GameTeam",
    {
      score: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
module.exports = GameTeamModel;

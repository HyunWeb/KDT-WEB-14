const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); //sequelize 객체 선언시 매개변수로 다음 정보들을 받음: 데이터베이스명, 사용자, 비밀번호, 정보 전체

// TODO: 모델 모듈 불러오기
const Player = require("./Player")(sequelize, Sequelize.DataTypes);
const Profile = require("./Profile")(sequelize, Sequelize.DataTypes);
const Team = require("./Team")(sequelize, Sequelize.DataTypes);
const Game = require("./Game")(sequelize, Sequelize.DataTypes);
const GameTeam = require("./GameTeam")(sequelize, Sequelize.DataTypes);

//TODO: 관계 형성

// 1) player : Profile = 1 : 1
Player.hasOne(Profile, {
  foreignKey: "player_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Profile.belongsTo(Player, { foreignKey: "player_id" });

// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
Team.hasMany(Player, { foreignKey: "team_id" });
Player.belongsTo(Team, { foreignKey: "team_id" });

// 3. N : M 관계의 경우 새로운 모델이 생성된다.
Game.belongsToMany(Team, {
  // 뭘 통해서 다 대 다 연결을 해줄꺼냐
  through: "GameTeam",
  foreignKey: "team_id",
});
Team.belongsToMany(Game, { through: "GameTeam", foreignKey: "game_id" });

//TODO: 관계를 정리한 모델들을 db 객체에 저장
db.Player = Player;
db.Profile = Profile;
db.Team = Team;
db.Game = Game;
db.GameTeam = GameTeam;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// db라는 객체를 내보냄
// sequelize에서 객체를 만들고 modeule로서 내보내면 "다른 파일에서 모두 같은 객체를 사용할 수 있게 됨 "
// 만약에 다른 파일에서 sequelize를 쓰고 싶으면 각각의 파일에서 다시 만들어야 함
// 그렇다면 각각의 파일에서 서로다른 객체를 사용하고 있게 되는 것

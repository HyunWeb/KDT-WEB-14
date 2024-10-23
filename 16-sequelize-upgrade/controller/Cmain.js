//index 연결해서 index.Player/.Profile ... 으로 해도 상관없음
const { Player, Profile, Team } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const players = await Player.findOne({
      where: { player_id: req.params.player_id },
    });
    res.send(players);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name,
      age,
      team_id,
    });
    res.send(newPlayer);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      {
        team_id,
      },
      {
        where: { player_id },
      }
    );
    res.send(updatedPlayer);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({
      where: { player_id },
    });
    if (isDeleted) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

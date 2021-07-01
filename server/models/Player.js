const pool = require('../modules/pool');

class Player {
  /**
   * Get all Players
   */
  getAll() {
    const getAllString = `SELECT * FROM player;`;
  }

  /**
   * Get Player by {id}
   * @param {int} id - The player's user_id.
   */
  get(id) {
    const getString = `SELECT * FROM player WHERE 
              user_id = $1;`;
  }

  /**
   * Add new Player
   * @param {string} obj - The player object.
   */
  add(obj) {
    const addString = `INSERT INTO "player"
              (username, user_id)
              VALUES
              ($1, $2);`;
  }

  /**
   * Update Player Info
   * @param {string} obj - The player object.
   */
  update(obj) {
    const updateString = `UPDATE "player" SET
              username = $2,
              last_login = now(), 
              user_id = $1;`;
  }
}

module.exports = Player;

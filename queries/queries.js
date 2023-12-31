// ------- GETS ---------
const listUsers = `SELECT * FROM users`;
const listRooms = `SELECT * FROM rooms`;
const listReservations = `SELECT reservation_id, room_id, user_id, TO_CHAR(time_start, 'YYYY-MM-DD HH24:MI') AS time_start, TO_CHAR(time_end, 'YYYY-MM-DD HH24:MI') AS time_end FROM reservations`;
const getUserId = `SELECT * FROM users WHERE user_id = $1`;
const getRoomId = `SELECT * FROM rooms WHERE room_id = $1`;
const getReservationId = `SELECT * FROM reservations WHERE reservation_id = $1`;
const getReservationEmail = `SELECT * FROM reservations
INNER JOIN users ON reservations.user_id = users.user_id
WHERE users.user_id = $1`;
const getUserEmail = `SELECT user_id FROM users WHERE name = $1`;

// ------------- POST ---------------------------
const createRoom = `INSERT INTO rooms (name, tv, air_conditioning) VALUES ($1, $2, $3)`;
const createUser = `INSERT INTO users (name) VALUES ($1)`;
const createReservation = `INSERT INTO reservations (user_id, room_id, time_start, time_end) VALUES ($1, $2, TO_TIMESTAMP($3, 'YYYY-MM-DD HH24:MI'), TO_TIMESTAMP($4, 'YYYY-MM-DD HH24:MI')) RETURNING *`;

// -------------- PATCH -------------------------------------
const updateRoom = `UPDATE rooms SET name = $1, tv = $2, air_conditioning = $3 WHERE room_id = $4`;
const updateUser = `UPDATE users SET name = $1 WHERE user_id = $2`;
const updateReservation = `UPDATE reservations SET user_id = $1, room_id = $2, time_start = $3::timestamp, time_end = $4::timestamp WHERE reservation_id = $5`;

// ---------------- DELETE ----------------------------------
const deleteReservation = `DELETE FROM reservations WHERE reservation_id = $1`;
const deleteUser = `DELETE FROM users WHERE user_id = $1`;
const deleteReservationWithIdUser = `DELETE FROM reservations WHERE user_id = $1`;
const deleteRoom = `DELETE FROM rooms WHERE room_id = $1`;

module.exports = {
  listUsers,
  listRooms,
  listReservations,
  getRoomId,
  getReservationId,
  getUserId,
  createRoom,
  createUser,
  updateRoom,
  updateUser,
  createReservation,
  deleteReservation,
  deleteUser,
  deleteReservationWithIdUser,
  deleteRoom,
  updateReservation,
  getUserEmail,
  getReservationEmail
};

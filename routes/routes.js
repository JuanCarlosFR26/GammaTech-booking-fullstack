const express = require('express');
const { getUsers, getUserById, createNewUser, updateUserById, deleteUserById } = require('../controllers/dbUsersControllers');
const { getRooms, getRoomById, createNewRoom, updateRoomById, deleteRoomById } = require('../controllers/dbRoomsControllers');
const { getReservations, getReservationById, createNewReservation, deleteReservationById, updateReservationById } = require('../controllers/dbReservationsControllers');
const { checkCreateRoom, checkCreateUser, checkCreateReservation } = require('../middlewares/middlewaresCheck');
const router = express.Router();

// --------------- Users -------------
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user/create', checkCreateUser, createNewUser);
router.patch('/user/update/:id', checkCreateUser, updateUserById);
router.delete('/user/delete/:id', deleteUserById);

// ---------------- Rooms ---------------
router.get('/rooms', getRooms);
router.get('/room/:id', getRoomById);
router.post('/room/create', checkCreateRoom, createNewRoom);
router.patch('/room/update/:id', checkCreateRoom, updateRoomById);
router.delete('/room/delete/:id', deleteRoomById);

// --------------- Reservations -------------
router.get('/reservations', getReservations);
router.get('/reservation/:id', getReservationById);
router.post('/reservation/create', checkCreateReservation, createNewReservation);
router.patch('/reservation/update/:id', checkCreateReservation, updateReservationById)
router.delete('/reservation/delete/:id', deleteReservationById);


module.exports = router;
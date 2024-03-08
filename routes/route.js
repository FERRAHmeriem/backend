// routes.js
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Define multer storage

const router = express.Router();

// Import all controllers
const register = require('../controllers/register');
const login = require('../controllers/login');
const getUser = require('../controllers/getUser');
const UpdateEvent = require('../controllers/updateEvent');
const generateOTP = require('../controllers/generateOTP');
const verifyOTP = require('../controllers/verifyOTP');
const createResetSession = require('../controllers/createResetSession');
const resetPassword = require('../controllers/resetPassword');
const Mailer = require('../controllers/mailer');
const posting = require('../controllers/addPost');
const users = require('../controllers/users');
const posts = require('../controllers/getAllposts');
const getPost = require('../controllers/getPost');
const Feed = require('../controllers/feedUser');
const userPosts = require('../controllers/getUserPosts');
const Approuve = require('../controllers/approuveEventByAdmin');
const deletEvent = require('../controllers/deleteEvent');
const AddPhoneNumber = require('../controllers/addPhoneNumber');
const WaitingPost = require('../controllers/waitingPostsAdmin');
const LikeEvent = require('../controllers/likeEvent');
const DisLikeEvent = require('../controllers/dislikeEvent');
const FollowUser = require('../controllers/follow');
const LikedEvents = require('../controllers/showLikedEvents');
const Follows = require('../controllers/showFollows');
const Followers = require('../controllers/showFollowers');
const Unfollow = require('../controllers/unfollow');
const FeedBack = require('../controllers/feedback');
const Clear = require('../controllers/clearNotif');
const RefuseEventByAdmin = require('../controllers/refuseEvent');
const Interested = require('../controllers/interested');

//IMPORTING MIDDLEWARE
const verifyUser = require('../middleware/verifyUser');
const Auth = require('../middleware/auth');
const Locals = require('../middleware/locals');

//POST ROUTES
router.post('/register', register);
router.post('/registerMail', Mailer);
router.post('/login', login);
router.post('/addPost', Auth, upload.single('file'), posting);
router.post('/AddYourPhoneNumber', Auth, AddPhoneNumber);
router.post('/AddFeedBack/:id', Auth, FeedBack);

//GET METHODS
router.get('/users/:id', getUser);
router.get('/generateOTP', verifyUser, Locals, generateOTP);
router.get('/verifyOTP', verifyUser, verifyOTP);
router.get('/createResetSession', createResetSession);
router.get('/gettingUsers', users);
router.get('/gettingPosts', posts);
router.get('/feed', Auth, Feed);
router.get('/posts/:postId', getPost);
router.get('/yourPosts', Auth, userPosts);
router.get('/waitingPosts', WaitingPost);
router.get('/likedEvents', Auth, LikedEvents);
router.get('/yourFollows', Auth, Follows);
router.get('/yourFollowers', Auth, Followers);

//PUT METHODS
router.put('/resetPassword', verifyUser, resetPassword);
router.put('/approuveEvent/:id', Approuve);
router.put('/likeEvent/:id', Auth, LikeEvent);
router.put('/dislike/:id', Auth, DisLikeEvent);
router.put('/followuser/:id', Auth, FollowUser);
router.put('/unfollowuser/:id', Auth, Unfollow);
router.put('/clearNotif', Auth, Clear);
router.put('/Interested/:id', Auth, Interested);
router.put('/UpdateEvent/:id', Auth, UpdateEvent);

//DELETE METHODS
router.delete('/deletEvent/:id', Auth, deletEvent);
router.delete('/refuseEvent/:id', RefuseEventByAdmin);

module.exports = router;
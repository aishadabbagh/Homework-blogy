const express = require('express');
// Instantiate a router (mini app that only handle routes)
const router = express.Router();
//to import the object from user and specify one thing i write .theThing
const User = require('../models/user').User
const Tweet = require('../models/user').Tweet

	
router.use(express.json())
///5de7dc4992c30e2f197c12c7

//Routes
/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /api/users/:userId/tweets
 * Description: Create new User
*/
router.post('/api/users', (req, res) => {
  User.create(req.body, (error, newUser) => {
    res.json(newUser);
  })
});

/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /api/users/:userId/tweets
 * Description: Create new tweet
*///5de7db8995531b2eed219019
router.post('/api/users/:userId/tweets', (req, res) => {
    const newTweet = new Tweet({ text: req.body });
    User.findById(req.params.userId, (error, user) => {
        user.tweets.push(newTweet);
        user.save((error, savedUser) =>{
            res.json(savedUser)
        })
    });
});

/** 
 * Action:          INDEX
 * Method:         GET
 * URI:            /tweets
 * Description: Get all tweets
*/
router.get('/tweets/:userId', (req, res) =>{
    User.find({}, (error, tweets) => {
        // return all tweets
        if(!error) {
            res.status(200).json({fruits: tweets})
        } else {
            res.status(500).json ({error: error})
        }
    })
})

/** 
 * Action:         UPDATE
 * Method:         PATCH
 * URI:            /api/users/:userId/tweets/:id
 * Description:    get one tweet by id
*/
//new tweet 5de7b47d18abff232ac787cd
//id : 5de7b11d5950aa1dba42b274
//tweet: 5de7b47d18abff232ac787cd
// update tweet embedded in user
router.put('/api/users/:userId/tweets/:id', (req, res) => {
    // set the value of the user and tweet ids
    const userId = req.params.userId;
    const tweetId = req.params.id;
  
    // find user in db by id
    User.findById(userId, (err, foundUser) => {
      // find tweet embedded in user
      const foundTweet = foundUser.tweets.id(tweetId);
      // update tweet text and completed with data from request body
      foundTweet.tweetText = req.body.tweetText;
      //save is a callback optional 
      foundUser.save((err, savedUser) => {
        res.json(foundTweet);
      });
    });
  });

  /////////


  router.get('/api/userstweets/:userId/:id', (req, res) => {
    // set the value of the user and tweet ids
    const userId = req.params.userId;
    const tweetId = req.params.id;
  
    // find user in db by id
    User.findById(userId, (err, foundUser) => {
      // find tweet embedded in user
      const foundTweet = foundUser.tweets.id(tweetId);
      // update tweet text and completed with data from request body 
      console.log(foundTweet.text) ;
    
    });
  });
// export module
module.exports = router;



/////////////////////////////////////////////



router.post('/api/articles/:ArticleId/comments', (req, res) => {
  // set the variables of inputs 
 const ArticleId = req.params.ArticleId;
 const newComment = new Comment({ text: req.body.text });
 Article.findById(ArticleId)
 .then((article) => {
     article.comments.push(newComment);
     article.save((savedComment)=>{
         res.json(savedComment)
     })
 })
 .catch((error) =>{
     res.status(500).json({error: error});
 });
});

router.get('/tweets/:userId', (req, res) =>{
  User.find({}, (error, tweets) => {
      // return all tweets
      if(!error) {
          res.status(200).json({fruits: tweets})
      } else {
          res.status(500).json ({error: error})
      }
  })
})
const express = require("express");
const router = express.Router();
const client = require("../database/DB");
const bcrypt = require("bcryptjs");
const validateForm = require("../controllers/validateForm");

client.connect((err) => {
  if (err){
    console.log(err.message)
    return ;
  }
  console.log("Database connected!")
}) ;

router
  .route("/login")
  .get(async (req, res) => {
    if (req.session.user && req.session.user.email 
      && req.session.user.firstname && req.session.user.lastname) {
      res.json({ 
        loggedIn: true, 
        email: req.session.user.email, 
        firstname: req.session.user.firstname, 
        lastname: req.session.user.lastname, 
        topic: req.session.user.topic
      });
    } else {
      res.json({ loggedIn: false });
    }
  })
  .post(async (req, res) => {
    validateForm(req, res);

    const potentialLogin = await client.query(
      "SELECT id, firstname, lastname, email, passhash FROM accounts u WHERE u.email = $1",
      [req.body.email]
    );
    
    if (potentialLogin.rowCount > 0) {
      const isSamePass = await bcrypt.compare(
        req.body.password,
        potentialLogin.rows[0].passhash 
      );
      if (isSamePass) {
        req.session.user = {
          email: req.body.email,
          id: potentialLogin.rows[0].id,
          firstname: potentialLogin.rows[0].firstname,
          lastname: potentialLogin.rows[0].lastname,
          topic: null
        };
        res.json({ 
          loggedIn: true, 
          email: req.body.email, 
          firstname: potentialLogin.rows[0].firstname,
          lastname: potentialLogin.rows[0].lastname,
          topic: null
        }) ;
      } else {
        res.json({ loggedIn: false, status: "Wrong email or password" });
        console.log("Unsuccessful Login Attempt");
      }
    } else {
      res.json({ loggedIn: false, status: "Wrong email or password" });
      console.log("Unsuccessful Login Attempt");
    }
});

router.post("/register", async (req, res) => {
  validateForm(req, res);

  const existingUser = await client.query(
    "SELECT email FROM accounts WHERE email=$1",
    [req.body.email]
  );

  if (existingUser.rowCount === 0) {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUserQuery = await client.query(
      "INSERT INTO accounts(firstname, lastname, email, passhash) values($1,$2,$3,$4) RETURNING id, email, firstname",
      [req.body.firstname, req.body.lastname, req.body.email, hashedPass]
    );
    req.session.user = {
      email: req.body.email,
      id: newUserQuery.rows[0].id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      topic: req.body.topic
    }
    res.json({ loggedIn: true, email: req.body.email });
  } else {
    res.json({ loggedIn: false, status: "Email is already taken" });
  }
});

router
  .route('/signout')
  .get(async (req, res) => {
    res.json({ 
      loggedIn: true, 
      email: req.session.user.email, 
      firstname: req.session.user.firstname, 
      lastname: req.session.user.lastname,
      topic: req.session.user.topic
    });
  })
  .post(async (req, res) => {
    req.session.destroy() ;
    res.json({
      loggedIn: false,
      status: "Successfully logged out!"
    })
})


router
  .route('/Questions')
  .post(async (req, res) => {
    const availableQuestions = await client.query(
      "SELECT * FROM questions WHERE id NOT IN (SELECT questionid FROM answerhistory WHERE email=$1) AND questiontype=$2;", 
      [req.body.user.email, req.body.user.topic]
    )

    if(availableQuestions.rowCount === 0){
      res.json({
        ident: 0,
        desc: 'You have completed all of the questions for this topic!',
        a: 'None',
        b: 'None', 
        c: 'None',
        d: 'None',
      })
    }
    else{
      res.json({
        ident: availableQuestions.rows[0].id,
        desc: availableQuestions.rows[0].questiontext,
        a: availableQuestions.rows[0].choiceone,
        b: availableQuestions.rows[0].choicetwo,
        c: availableQuestions.rows[0].choicethree,
        d: availableQuestions.rows[0].choicefour,
        answer: availableQuestions.rows[0].correctchoice
      }) ;
    }
})

router
  .route('/getMissed')
  .post(async (req, res) => {
    const availableQuestions = await client.query(
      "SELECT questionid FROM answerhistory WHERE email=$1 AND correct=0;", 
      [req.body.user.email]
    )

    if(availableQuestions.rowCount === 0){
      res.json({
        ident: 0,
        desc: 'You have completed all of the question that you\'ve missed!',
        a: 'None',
        b: 'None', 
        c: 'None',
        d: 'None',
      })
    }
    else{
      const question = availableQuestions.rows[0].questionid
      const resultsQuery = await client.query(
      "SELECT * FROM questions WHERE id=$1 ;", 
      [question]
    )
    
    if(resultsQuery.rowCount === 0){
      res.json({
        ident: 0,
        desc: 'You have completed all of the question that you\'ve missed!',
        a: 'None',
        b: 'None', 
        c: 'None',
        d: 'None',
      })
    }
    else{
      res.json({
        ident: resultsQuery.rows[0].id,
        desc: resultsQuery.rows[0].questiontext,
        a: resultsQuery.rows[0].choiceone,
        b: resultsQuery.rows[0].choicetwo,
        c: resultsQuery.rows[0].choicethree,
        d: resultsQuery.rows[0].choicefour,
        answer: resultsQuery.rows[0].correctchoice
      }) ;
    }
  }
    }
)

router
  .route('/classTopic')
  .post(async (req, res) => {
      req.session.user = {
      loggedIn: true, 
      email: req.body.user.email, 
      firstname: req.body.user.firstname, 
      lastname: req.body.user.lastname,
      topic: req.body.topic
    }
    res.send(req.session.user)
})


router
  .route('/missedResults')
  .post(async (req, res) => {
    await client.query("UPDATE answerhistory SET correct=$1, submissionDate=$4 WHERE (email=$2 AND questionid=$3)",
    [req.body.correct, req.body.email, req.body.questionid, req.body.submissionDate]
    )
    res.json('Sucessful Result Sent.') ;
  }
)

router  
  .route('/CommunityNotes')
  .post(async (req, res) => {
    const results = await client.query("SELECT * FROM community_notes ORDER BY created_at DESC LIMIT 10")
    res.send(results.rows)
  })

router
  .route('/Results')
  .post(async (req, res) => {
    await client.query("INSERT INTO answerhistory(email, questiontype, questionid, submissionDate, correct) values($1,$2,$3,$4,$5)",
    [req.body.email, req.body.questiontype, req.body.questionid, req.body.submissionDate, req.body.correct]
    )
    res.json('Sucessful Result Sent.') ;
  }
)

router
  .route('/getResults')
  .post(async (req, res) => {
    const resultsQuery = await client.query("SELECT questiontype,correct FROM answerhistory WHERE email=$1 AND questiontype=$2;",
    [req.body.user.email, req.body.questiontype]
    )
    res.json(resultsQuery.rows) ;
})

router
  .route('/getRecs')
  .post(async (req, res) => {
    const resultsQuery = await client.query("SELECT questiontype, SUM(CASE WHEN correct = 0 THEN 1 ELSE 0 END) as num_incorrect, SUM(CASE WHEN correct = 1 THEN 1 ELSE 0 END) as num_correct FROM answerhistory GROUP BY questiontype;")

    res.json(resultsQuery.rows) ;
})


router
  .route('/getTimes')
  .post(async (req, res) => {
    const resultsQuery = await client.query("SELECT submissiondate FROM answerhistory WHERE email=$1",
    [req.body.user.email]
    )
    res.json(resultsQuery.rows) ;
})

router
  .route('/resetFirstName')
  .post(async (req, res) => {

    const resultQuery =  await client.query("UPDATE accounts SET firstname=$1 WHERE email=$2 ;",
    [req.body.firstName, req.body.email]
    )

    res.json('Name successfully changed!')
})

router
  .route('/resetLastName')
  .post(async(req, res) => {
    await client.query("UPDATE accounts SET lastname=$1 WHERE email=$2 ;",
    [req.body.lastName, req.body.email]
    )
    res.json('Name sucessfully changed!') ;
})

router
  .route('/resetEmail')
  .post(async(req, res) => {

    const existingUser = await client.query(
      "SELECT email FROM accounts WHERE email=$1",
      [req.body.newEmail]
    );
  
    if (existingUser.rowCount === 0) {
      await client.query("UPDATE accounts SET email=$1 WHERE email=$2 ;",
      [req.body.newEmail, req.body.email]
      )
      await client.query("UPDATE answerhistory SET email=$1 WHERE email=$2 ;",
      [req.body.newEmail, req.body.email]
      )
      res.json("Email changed successfully!");
    } else {
      res.json("Email is already taken");
    }
})

router
  .route('/resetPassword')
  .post(async(req, res) => {

    const potentialLogin = await client.query(
      "SELECT id, firstname, lastname, email, passhash FROM accounts u WHERE u.email = $1",
      [req.body.email]
    );

    if(potentialLogin.rowCount > 0){
      const isSamePass = await bcrypt.compare(
        req.body.oldPass,
        potentialLogin.rows[0].passhash 
      )
        if(isSamePass){
          const newHashedPass = await bcrypt.hash(req.body.newPass,10) ;
    
          await client.query("UPDATE accounts SET passhash=$1 WHERE email=$2 ;",
          [newHashedPass, req.body.email]
          )
          res.json('Password sucessfully changed!') ;
        }
        else{
          res.json('Password change unsuccessful') ;
        }
    }
})

module.exports = router;
CREATE TABLE accounts(
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(30),
        lastname VARCHAR(45),
        email VARCHAR(70) NOT NULL UNIQUE,
        passhash VARCHAR NOT NULL
);

CREATE TABLE questions(
        id INT NOT NULL,
        questiontype VARCHAR(30),
        questionText VARCHAR(2000),
        choiceOne VARCHAR(2000),
        choiceTwo VARCHAR(2000),
        choiceThree VARCHAR(2000),
        choiceFour VARCHAR(2000),
        correctChoice INT 
);


CREATE TABLE answerhistory(
        email VARCHAR(70),
        questiontype VARCHAR(30),
        questionid INT,
        submissionDate DATE,
        correct INT
);

CREATE TABLE community_notes (
    note_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);


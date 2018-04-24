
DROP TABLE IF EXISTS howto CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- table for the web
CREATE TABLE howto(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description TEXT,
    direction TEXT);

-- table for user authentication
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    uname VARCHAR NOT NULL,
    email   VARCHAR NOT NULL,
    password VARCHAR 
);

INSERT INTO howto
(name, description, direction)
VALUES
('Survived lung cancer', 'Willy Boss', 'I was diangosed with cancer about 4 years ago. I was down and depressed. I didnt want to get outta bed but I realized the sadder I got the worse I got. I decided to get up, cheerup and here I am father of 2 and happy. There is hope, hang in there mate'),
('Hip and back problem at 20', 'Kim B. Hiamasu', 'I was in pain everyday of my life, I had this when I was just 20 so I was really down. My gf left me and my dog too. I had nobody but I realized a lot of the healing first takes up in the mind. I decided to start exercising and I started thinking positive. Now, I am 23, STRONG and with the Hottest girl ever'),
('Blood cancer', 'Niamasu Katagiri', 'I had blood cancer and I was ready to die, but someone one day told me about staying positive and I gave that a chance, Now I am healthy. You might be going through dark tunnel in life, what I want you to know is that there is an exit, the tunnel might be a little dark and long but stay strong, you will eventually get out of it'),
('Scoloisis', 'A kelly', 'Had scolosis my body was bent like a banana but I decided to stay strong and exercise. I am good today.'),
('Depression', 'Alume Alala', 'I thought of dying every single day, I just didnt want to live. All of the things that happened to me in my life were painful. Raised in an orphange, I didnt expereince a lot of love. I came to realize we have to change the way we think and today I am living.#staystrong'),
('sciatica', 'KP Malhotra', 'I couldnt move, everything was painfull, the doctors werent helpful. So I decided to help myself and today I am great');

INSERT INTO users
(uname,email,password)
VALUES
('shalom', 'ichigeki.ccCsc@hotmail.com', 'shalom21');

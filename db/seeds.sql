\c tutorials
DROP TABLE IF EXISTs howto CASCADE;

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
('HOW TO DOTA', 'BLJLJLJ', 'JKJJUHGY GUGUYGYG UYGUYGUYG GUG'),
('HOw to slack', 'slack', 'slackkk'),
('HOW TO DOTA', 'BLJLJLJ', 'JKJJUHGY GUGUYGYG UYGUYGUYG GUG');


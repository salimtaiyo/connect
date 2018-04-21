\c tutorials
DROP TABLE IF EXISTs howto CASCADE;

-- add create tables here 

CREATE TABLE howto(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description TEXT,
    direction TEXT);

INSERT INTO howto
(name, description, direction)
VALUES
('HOW TO DOTA', 'BLJLJLJ', 'JKJJUHGY GUGUYGYG UYGUYGUYG GUG'),
('HOw to slack', 'slack', 'slackkk'),
('HOW TO DOTA', 'BLJLJLJ', 'JKJJUHGY GUGUYGYG UYGUYGUYG GUG');
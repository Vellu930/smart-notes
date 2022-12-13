drop table if exists noteday;

create table noteday(
    id            SERIAL PRIMARY KEY,
    date          DATE NOT NULL,
    cycle_day     INTEGER,
    moon_day      INTEGER,
    mood          VARCHAR(150),
    note          VARCHAR(5000)
);

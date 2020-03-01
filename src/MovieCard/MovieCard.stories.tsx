import React from 'react';
import MovieCard from './MovieCard';

import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from '@storybook/react';

const data = { "cinema": "Phenomena Experience", "details": "Greta Gerwig 2019 USA VOSE  4K 135'", "title": "Mujercitas (4K)", "movie_date": "25/01/2020", "movie_time": "12:25h" }

storiesOf('MovieCard', module)
    .addDecorator(withKnobs)
    .add("with knobs", () => <MovieCard
        cinema={data.cinema} title={data.title} details={data.details} movie_date={data.movie_date}  movie_time={data.movie_time}/>)

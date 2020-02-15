import React from 'react';
import HelloPerson from './HelloPerson';
import { withKnobs, text} from "@storybook/addon-knobs";
import { storiesOf } from '@storybook/react';

storiesOf('HelloPerson', module)
    .addDecorator(withKnobs)
    .add("with knobs", () => <HelloPerson name={text("name", "Ruben")}/>)

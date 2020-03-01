Minimal template for Storybook based on Create React App with TypeScript

## Install

Begin by creating the React App using the typescript template

`npx create-react-app ui-components --template typescript`

Configure Storybook

`npx -p @storybook/cli sb init`

Install the following dev dependencies

`npm i -D @types/node @types/react`

And this is personal preference, but I like the knobs addon

`npm i -D @storybook/addon-knobs`

Run Storybook with `npm run storybook`

Check `package.json` for the rest of commands that you might need. 

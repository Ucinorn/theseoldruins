
# thisoldruin

An incremental game inspired by a random reddit post:
https://www.reddit.com/r/incremental_games/comments/rk9suu/these_old_ruins/

This is a looping game, where the player must maintain a city that is periodically razed by the enemy/sun
similar to idle loops, you have a fixed time frame before progress is lost
progress is made through keeping things between loops, improving skills and upgrades
ultimate goal is to reach increasinlgy complex systems in the city
prestige in the form of moving cities, with different more difficult conditions but better opportunities for growth
meta prestige in returning to previous cities to uncover other things

The player starts as a powered tower in a grid of barren / hidden land
only the surrounding adjacent squares are interactable
surrounding orthoganal squares are explored but not interactable
the player can build and improve structures on interactable squares
structures produce resources over time, including in rare cases energy
all actions take an amount of time and resources
every 100 days, the sun rises and destroys your city, and the loop is over
there is no way to prevent this or increase the time: it always happens
damage is applied to all buildings, largely destroying them
damage is slightly randomised, so there is a possibility that all progress is not lost

building a structure takes time and resources
squares further out from the tower take more of each
most squares outside the immediate vicinity will take longer than your 100 days to build
you must get upgrades to progress to push out from your tower
performing actions builds skills that provide multipliers to said skills
the player can also gain incremental knowledge of specific squares, increasing their performance there
squares also improve their resistance to ruin over time based on the total amount destroyed: rewards focus on one squares
squares with this feature can approach 100% resistance to damage, with cost approaching infinity
squares can be 'stacked' by building the same building again
stacked buildings are particularly susceptible to the sun so will be razed, but increase the impervious cap faster
stacking  improves building effects exponentially, not lineraly 

all structures have effects
players have a choice as to what to build
players can build anything on any squares
bonuses apply for buildings that are alone, and adjacent, 
ie. buildings have different effects depening on whether they are grouped with similar 

the player starts having to manually perform actions
they must gather enough energy to unlock automation
a selected action is automatically repeated each day until another is chosen
the player shortly unlocks a queue where actions can be chained so the player does not have to move jobs manually
successive upgrades increase the length of the queue
advanced upgrades enable multiple qeueus, loadout storage and more

the gameplay loop can be active or idle/incremental
idle players can leave themselves on one set of actions, grinding skills and exp to perform said action faster
progress is naturally capped in the form of diminishing returns: exp for low level actions approaches 0. 
active players can attempt to find advantageous queue setups and supplement their qeue with manual actions
some manual actions/buildings have small build times but large payoffs
the limited queue size means these can only realistically be used in active gameplay
advanced upgrades may make these actions accessible to idle players

some squares contain permanent structures that, once built, cannot be razed
these represent permanent upgrades
these are spread on the map and represent a goal for the player to explore to
some of them are shown, some are hidden

players may progress to the point where they can survive through the worst of every sunrise
at that point they have the choice to move to a new city and start again ( prestige )
this is an important cap on complexity to prevent queue times getting too long
city progress is kept in previous cities: they may choose to return and use their new skills and abilities to progress even further in that city
there will be intentially

### player decisions points
which direction to explore in
what destination to aim for
which actions to attempt to complete
what queue to leave on idle when moving on from game
what skills to focus on
what squares to focus on
what squares to grind and stack


### differences
game differs from other looping games in the following: 
the loop timing is always fixed: 100 days
progression is not 100% reset every loop
prestige represented by levels, not resets
meta progression on player, squares AND buildings




# Snowpack Tailwind

> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```

✨ Optional: [Enable autopublish](#q-how-do-i-enable-auto-publish-to-github-pages) to get your site deployed on GitHub Pages on every commit you push.

#### Optional install using Yarn:

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind --use-yarn

# Enable Prettier on git-commit
cd my-app
yarn install:husky
```

## Features

- Snowpack, of course.
- Tailwind.
- Prettier.
- Force prettier on git-commit.
- Autopublish on Github Pages.

### Q: How do I enable auto publish to GitHub Pages?

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
1. Push your changes into a new GitHub repository.
1. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
1. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
1. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`
1. Enjoy :)

### Q: How do I disable auto publish to GitHub Pages?

Remove the `.github/workflows/publish.yml` file.

### Q: How do I check my code syntax (Prettier) on git-commit?

Run `npm run install:husky`.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

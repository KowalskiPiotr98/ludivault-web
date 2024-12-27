# Ludivault

An application for easy management of gaming libraries, for people that spend too much time micro-managing their games.

> [!NOTE]
> For backend repository, go [here](https://github.com/KowalskiPiotr98/ludivault-api), and for deployment repository, go [here](https://github.com/KowalskiPiotr98/ludivault-deploy)

> [!CAUTION]
> This application does not yet support user accounts, meaning that you **MUST NOT** deploy it in a public network.
> If you do, everyone with network access will be able to do whatever they want in your instance.
>
> User accounts will be supported in a later version.

### Why would I need that?
For the longest time I've been somewhat obsesed with properly documenting and noting all video games I've owned, played, completed, backlogged, or am waiting for a release.
This app aims to make all of this easier, allowing users to properly catalogue all of their games, whether they've played them 500 times already, or are eagerly awaiting a release in the future.

It has (or will have) the following features:
- gaming library for storing all owned or planned video games;
- playthrough (with time) tracking, allowing you to cry when you see you've completed a game 10 times with a total of 1500 hours played;
- release date reminders ensuring you never miss that special day;
- easy storage of files for games, allowing you to keep all mods/walkthroughs/skins/fanfics?/guides in one place;
- ever wanted to do your own game awards? No, me neither, really, but now you can mark your favourite games anyway;
- marking related games, such as being able to note that that game you own for PS4, PS5, XBOX, XBONE, PC, Android, iOS, Alexa, Fridge, C64, and Nintendo Switch is actually all the same game;
- game session tracking, allowing you to proudly remember that you've played a video game for 18 hours straight that one day;
- and other features to come!

### Deployment
There are currently no configuration options at the frontend level.

If you want a ready-to-go deployment, you should go to the [deployment repo](https://github.com/KowalskiPiotr98/ludivault-deploy).
Otherwise feel free to hack away using your own methods.

To help you with that, here is a list of useful tips:
- backend must be visible on the same host:port as the frontend, as there's no way to point the front to send requests someplace else, unless you do some funky request rewrites;
- even if you do manage to do that, CSP and CORS will not be happy and you'll need to set them as well;
- if you *really* want to do that, all backend requests are sent to a path beginning with `/api/`; all other paths should be sent to frontend;
- front is just a static JS file and can be freerily cached for a *looooooooooong* time, as long as you don't cache the single `index.html` file.

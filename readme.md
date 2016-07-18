# TypeScript and React template in VS Code #

Based on the template by Tom Duncalf's [Setting up a new Typescript 1.9 and React project](http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/)

Going through the guide I ran into a number of issues wich I have solved in this template.

To use this template:
1. Run `npm install -g typescript@next`
2. run `npm install`
3. Update the VS Code settings file in `.vscode/settings.json`

   `"typescript.tsdk": "<path to TypeScript libs>"` 

4. You're all set! Run `npm start` and open a browser `http://localhost:3000` 
5. Start developing your React project ([React Cheatsheet](http://ricostacruz.com/cheatsheets/react.html))

It might take a minute or two before the server replies the first time.

## Enable client-side debugging in Chrome and Edge ##

Via the [Chrome/Edge Debugger for VS Code](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code) it is simple to debug the React solution.
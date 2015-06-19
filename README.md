# wallaby-typescript-modules
Demonstrating my problems with TypeScript modules and wallaby.js 1.0.20

## Why?
It seems wallaby.js currently doesn't honour TypeScript's reference comments when executing tests:

![Output in intelliJ](output.png?raw=true)

But tsc compiles it just fine (in the correct order): [compiled.js](compiled.js)

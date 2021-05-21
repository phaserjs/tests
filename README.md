# Phaser 4 Unit Tests

Install dependecies: 
```
> npm i
```

- Unit test folder: ``tests``   
- Snapshot tests: ``e2e`` (this folder name could be changed in a future)

### Run tests

Unit tests: 
```
> npm run test
```

Unit tests with coverage: 
```
> npm run test:coverage
```

Tests e2e (visual)
```
> npm run test:e2e
```

### Coverage page

You can run local page coverage with:

```
> npm run server:coverage
```
or go to live page [HERE](https://phaserjs.github.io/tests/coverage/)


### Run single folder test

To run a single folder test, you need to have installed Jest in your computer: 

```
> npm i -g jest
```

Run folder test

```
> jest -- folder/route
```
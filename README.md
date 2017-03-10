# Angular2 TDD (on development)

## Testing with CLI

```bash
# test
ng test
ng test --watch=false or --single-run # run one time
ng test --lint # run one time
# end to end (e2e) test
ng e2e
```

## Jasmine Matchers

```ts
expect(fn).toThrow(e);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(string).toContain(substring);
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
```

## Custom Matchers
```ts
let John = 17, Mary = 16;

it("should allow John to drive", () => {
  expect(John).toBeAllowedToDrive();
  // replaces 
  expect(John).toBeGreaterThan(16);
});

it("should not allow Mary to drive", () => {
  expect(Mary).not.toBeAllowedToDrive();
  // replaces 
  expect(Mary).not.toBeGreaterThan(16);
});
```


## Better tests

### Cleaner console test messages
```bash
# nice test reports at terminal
npm install --save-dev karma-spec-reporter
```

At `karma.conf.js`:

```js
// Angular 2 CLI Karma configuration
// https://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function (config) {
  config.set({
    //...
    plugins: [
      // ...
      require('karma-spec-reporter'),
      // ...
    ],

    // ...
    
    reporters: config.angularCli && config.angularCli.codeCoverage
    //          ? ['progress', 'karma-remap-istanbul']
    //          : ['progress'],
              ? ['spec', 'karma-remap-istanbul']
              : ['spec'],                            
    // ...
  });
};
```

### Headless test with PhantomJS

```bash
npm install --save-dev phantomjs-prebuilt karma-phantomjs-launcher
```

At `karma.conf.js`:
```js
// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    //...
    plugins: [
      //...
      //require('karma-chrome-launcher'),
      require('phantomjs-prebuilt'),
      require('karma-phantomjs-launcher'),
      //...
    ],

    //...
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    //...
  });
};

```

## Test over real service with http

### Service 

```ts
// TODO: Copy final version
```

### Test

```ts
// TODO: Copy final version
```


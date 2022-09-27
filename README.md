# Using Vitest Snapshots with React components

> NOTE: vitest's snapshot feature is almost fully compatible with jest's snapshot feature.
> Read the docs [here](https://vitest.dev/guide/snapshot.html).

## Setup

- Install the dependencies:
```bash
yarn install
```

## Usage

- Run the app:
```bash
yarn dev
```

- Run the tests:
```bash
yarn test
```

- After running the tests you should see this in the `src/__snapshots__/App.spec.jsx.snap` file:
```javascript
// Vitest Snapshot v1

exports[`renders <App> properly 1`] = `
<div
  className="App"
>
  <button
    onClick={[Function]}
  >
    count is 
    0
  </button>
</div>
`;
```

- Update the snapshots:
```bash
yarn vitest -u
```

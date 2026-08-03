# Publishing My First Packages to npm

Posted: July 5, 2026

Time is the true test of quality, and only time will tell and whether or not a segment of code is worth maintence, features, or if it should be scrapped altogether. In the age of generated code, the human cost to produce code has greatly declined, but developers still encounter the same questions: Is it worth it? What value does this bring me, my team, or the open source community?

Over the years, I've created and maintained a sleu of UI components and framework agnostic helpers that have withstood the test of time in my own ecosystem. The next step is to open it up to greater scruity in an even larger ecosystem and contribute to the open source community that I love.

These components were intially created out of requirements from my own workplace for various, disjointed projects. Existing libraries were either too opinionated, too heavy, or just not maintained such that it did not pass the standards my workplace has for 3rd party libraries. So I've built them from the ground up with limited dependencies following [W3 ARIA's accessible design patterns](https://www.w3.org/WAI/ARIA/apg/patterns/). Both live in the [`megbailey-core`](https://github.com/megbailey/megbailey-core) monorepo.

- [`@megbailey/ui`](https://www.npmjs.com/package/@megbailey/ui)
- [`@megbailey/utils`](https://www.npmjs.com/package/@megbailey/utils)

## `@megbailey/ui`

`@megbailey/ui` is a React component library. It includes accessible UI primitives, form elements, GraphQL-aware selects, and a few hooks that show up constantly in interactive interfaces.

Highlights include:

- components shaped around W3 accessibility patterns, such as `DisclosureTree` and `ExpansionControls`
- form-friendly pieces like `InformedSelect`, `ButtonSelect`, `Dropzone`, and `ToggleSwitch`
- GraphQL integration through `GraphQLSelect` for Apollo-powered async options
- hooks such as `useOnClickOutside`, `useAbortController`, `useDelay`, and `usePromises`

Install it with:

```bash
npm install @megbailey/ui
```

`@megbailey/utils` comes along as a runtime dependency. You will also want React peers:

```bash
npm install react react-dom
```

Some components need optional peers only when you use them:

| Peer | Used by |
| --- | --- |
| `informed` | `InformedSelect`, `ButtonSelect`, `Dropzone`, `ToggleSwitch` |
| `react-select` | `InformedSelect`, `GraphQLSelect` |
| `@apollo/client` | `GraphQLSelect` |

The package ships with Storybook for interactive docs and Vitest for unit tests. If you want to poke around locally:

```bash
npm run storybook --workspace=@megbailey/ui
```

## `@megbailey/utils`

`@megbailey/utils` is a small, framework-agnostic set of helpers for nested object and array updates. No React. No peer dependencies. Just path-based utilities that I kept rewriting for form state and nested data structures.

Core ideas:

- dot-notation paths for nested fields
- in-place mutation that matches common state-update patterns
- array helpers for append, indexed updates, and remove-by-id
- zero dependencies and a small surface area

Install it on its own when you do not need the UI package:

```bash
npm install @megbailey/utils
```

`@megbailey/ui` depends on these helpers internally, but publishing them separately means other projects can use the same utilities without pulling in React components.

## One monorepo, two packages

Both packages are developed in [`megbailey-core`](https://github.com/megbailey/megbailey-core) with npm workspaces. That keeps shared versioning, builds, and publishing in one place while still letting consumers install only what they need.

```bash
git clone https://github.com/megbailey/megbailey-core.git
cd megbailey-core
npm install
npm run build
```

The build order matters: utils first, then ui.

## What's next

Publishing v1.0.0 is a starting line, not a finish line. I plan to keep iterating on accessibility, form patterns, and the GraphQL helpers as I use these packages in real projects. If you try them and find rough edges, open an issue or PR on the monorepo.

Links:

- npm: [`@megbailey/ui`](https://www.npmjs.com/package/@megbailey/ui), [`@megbailey/utils`](https://www.npmjs.com/package/@megbailey/utils)
- source: [megbailey-core](https://github.com/megbailey/megbailey-core)

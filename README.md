# jest.spyOn pattern example for SWC + TypeScript

- An example of a Jest spyOn pattern
  - default export
    - ```ts
      foo = () => {}; // <- spyOn this function
      export default foo;
      ```
  - named export
    - ```ts
      export foo = () => {}; // <- spyOn this function
      ```
  - inside namespace
    - ```ts
      export namespace Foo {
        export const foo = () => {}; // <- spyOn this function
      }
      ```
  - inside named module(object)
    - ```ts
      export const Foo {
        foo: () => {}; // <- spyOn this function
      }
      ```

## Required

- Node.js 14+

## How to using

- Lunch commands
  - `npm start`
    - run cli
  - `npm run dev`
    - run force debug cli
  - `npm run type-check`
    - run type-check
  - `npm run build`
    - run swc
      - this only development, not production
  - `npm run test`
    - launches test runner by watch mode
  - `npm run coverage`
    - ~~get coverage report~~

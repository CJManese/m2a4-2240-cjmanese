# Module 2 - Activity 4 - Effects, Lifting State, and Forms

> **A step up.** Effects and form validation are the meatier ideas here, so work
> through the files one at a time. You are **done when `npm test` is all green**.

This activity covers three things real apps lean on constantly: **side effects**
(`useEffect`), **lifting state up** so parts of the UI share one source of
truth, and **controlled forms with validation**.

## Read first

The concepts for this activity live in your **course workspace repo**:

- `content/m2-react/README.md` -> **Activity 4** section
- `content/react-theory/04-hooks-mental-model.md` (`useEffect`, dependencies)
- `content/react-theory/05-component-architecture.md` (lifting state, controlled inputs)

## What to do

### 1. Fill in your details

Open [`student.json`](student.json) and fill in every field (keep it identical
to your other activities).

### 2. Implement the components

| File | Builds | Concept |
| --- | --- | --- |
| [`SignupForm.jsx`](src/components/SignupForm.jsx) | a validated sign-up form | controlled inputs + validation |
| [`TitleSetter.jsx`](src/components/TitleSetter.jsx) | sets the browser tab title | `useEffect` |
| [`LiftedSearch.jsx`](src/components/LiftedSearch.jsx) | an input and a live display | lifting state up |

Each file states the exact requirement. Replace each `// TODO` (and the
`return null`) so the tests pass. Do not change file names or the
`export default`s.

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m2a4-<classcode>-yourname`, **Private**.
3. Clone your copy and `npm install`.

## Running the app and the tests

```bash
npm run dev          # http://localhost:5173
npm test             # each passing test is a point
npm run test:watch
```

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded.

## Submit

```bash
git add -A
git commit -m "✨ Activity 4 complete"
git push
```

Then check the **Actions** tab for the green check, the "N / N tests passed"
summary, and the linked app screenshot.

// ───────────────────────────────────────────────────────────────────────────
// LiftedSearch - lifting state up
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: lifting state up so two parts of the UI share one source of truth.
// Read: content/m2-react Activity 4, and
//       content/react-theory/05-component-architecture.md
//
// Requirement:
//   Keep the search text in state HERE, in this parent component. Render:
//     - a text <input> whose value is that state (a controlled input), and
//     - a separate <p> that shows exactly:  You searched for: TEXT
//   Typing in the input must update the displayed text (both read the same
//   state).
//
// Bonus practice: split it into a child input component and a child display
// component, passing the value down and the change handler down. The tests only
// check the behavior.

import { useState } from 'react'

export default function LiftedSearch() {
  // TODO: keep the query in state, then return the controlled input and the <p>.
  return null
}

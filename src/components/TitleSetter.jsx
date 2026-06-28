// ───────────────────────────────────────────────────────────────────────────
// TitleSetter - side effects with useEffect
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: the useEffect hook and synchronizing with something outside React
// (here, the browser tab's title).
// Read: content/m2-react Activity 4, and
//       content/react-theory/04-hooks-mental-model.md
//
// Requirement:
//   Given a `text` prop:
//     - use useEffect to set document.title to `text` whenever `text` changes
//       (set the dependency array so it re-runs when text changes)
//     - also render a <p> with exactly:  Current title: TEXT
//
// Tip: document.title is plain browser API; set it inside the effect, not during
// render.

import { useEffect } from 'react'

export default function TitleSetter({ text }) {
  useEffect(() => {
    document.title = text
  }, [text])

  return (
    <p>Current title: {text}</p>
  )
}

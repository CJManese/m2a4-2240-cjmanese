// ───────────────────────────────────────────────────────────────────────────
// SignupForm - controlled inputs, forms, and validation
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: controlled inputs, form submit, and validation.
// Read: content/m2-react Activity 4, and
//       content/react-theory/05-component-architecture.md (controlled inputs)
//
// Requirement:
//   Build a <form> with two CONTROLLED inputs (their values come from state):
//     - an email input with placeholder exactly "Email"
//     - a password input (type="password") with placeholder exactly "Password"
//     - a submit <button> labeled exactly "Sign up"
//
//   On submit (handle onSubmit and call event.preventDefault()), validate:
//     1. if the email does not contain "@", show the text:  Invalid email
//     2. otherwise, if the password is shorter than 6 characters, show:  Password too short
//     3. otherwise, show the text:  Account created
//   Show only the relevant message at a time.
//
// Tip: keep email, password, and the message in state.

import { useState } from 'react'

export default function SignupForm() {
  // TODO: build the controlled form described above.
  return null
}

'use client'

import { createBook } from '@/app/actions/create'
import { useState } from "react"

export default function Create() {
  const [error, setError] = useState('')

  async function handleSubmit(formData) {
    const result = await createBook(formData)

    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <main>
      <form action={handleSubmit}>
        <h2>Add a New Book</h2>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
        <input type="number" name="rating" max={10} min={1} placeholder="rating" />
        <textarea name="blurb" placeholder="blurb..."></textarea>
        <button type="submit" className="btn">Add Book</button>
        {error && <div className="error">{error}</div>}
      </form>
    </main>
  )
}
'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBook(formData) {
  const {title, rating, author, blurb} = Object.fromEntries(formData)

  // create a book id
  const id = Math.floor(Math.random() * 100000)

  // add the book to the sorted set
  const unique = await client.zAdd('books', {
    value: title,
    score: id
  }, { NX: true })

  if (!unique) {
    return {error: 'That book has already been added.'}
  }
  
  // save new hash for the book
  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb
  })

  redirect('/')
}
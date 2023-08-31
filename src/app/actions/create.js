'use server'

import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBook(formData) {
  const {title, rating, author, blurb} = Object.fromEntries(formData)

  // create a book id
  const id = Math.floor(Math.random() * 100000)
  
  // save new hash for the book
  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb
  })

  redirect('/')
}
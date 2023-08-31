'use server'

// import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBook(formData) {
  const {title, rating, author, blurb} = Object.fromEntries(formData)

  
}
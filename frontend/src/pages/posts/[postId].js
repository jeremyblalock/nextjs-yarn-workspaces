import React from 'react'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { postId } = router.query

  return (
    <h1>Post: {postId}</h1>
  )
}

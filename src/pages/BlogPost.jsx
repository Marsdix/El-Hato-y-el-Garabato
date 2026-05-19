import { useParams, Navigate } from 'react-router-dom'
import BlogPostSection from '../components/sections/BlogPostSection'
import { BLOG_POSTS } from '../data/blog'

export default function BlogPost() {
  const { id } = useParams()
  const post = BLOG_POSTS.find(p => p.id === id && p.content)

  if (!post) return <Navigate to="/blog" replace />

  return <BlogPostSection post={post} />
}

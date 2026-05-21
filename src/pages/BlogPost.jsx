import { useParams, Navigate } from 'react-router-dom'
import BlogPostSection from '../components/sections/BlogPostSection'
import { BLOG_POSTS } from '../data/blog'
import { useSanityFetch } from '../hooks/useSanityFetch'
import { QUERY_BLOG } from '../lib/queries'

export default function BlogPost() {
  const { id } = useParams()
  // Sanity fetch con fallback a datos estáticos.
  const { data: posts, loading } = useSanityFetch(QUERY_BLOG, BLOG_POSTS)
  const post = posts.find(p => p.id === id && p.content)

  if (loading) return null
  if (!post) return <Navigate to="/blog" replace />

  return <BlogPostSection post={post} />
}

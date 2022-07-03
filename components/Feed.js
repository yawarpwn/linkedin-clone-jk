import Input from 'components/Input'
import Post from './Post'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { handlePostState, useSRRPostsState } from 'atoms/postAtom'

export default function Feed({ posts }) {
  const [realTimePosts, setRealTimePosts] = useState([])
  const [handlePost, setHandlePost] = useRecoilState(handlePostState)
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSRRPostsState)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const responseData = await response.json()
      setRealTimePosts(responseData)
      setHandlePost(false)
      setUseSSRPosts(false)
    }

    fetchPosts()
  }, [handlePost])
  return (
    <div className='max-w-lg space-y-6 pb-24'>
      <Input />
      {/* Posts */}
      {!useSSRPosts
        ? realTimePosts.map((post) => <Post post={post} key={post._id} />)
        : posts.map((post) => <Post post={post} key={post._id} />)}
    </div>
  )
}

import Markdown from 'markdown-to-jsx'
import React from 'react'
import getPostMetadata from '@/utils/getPostMetadata'
import fs from 'fs'
import matter from 'gray-matter'

function getPostContent(slug) {
  const folder = 'recipes'
  const file = folder + `/${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matter(content)
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('recipes')
  return posts.map((post) => ({slug: post.slug}))
    }
  
export async function generateMetadata ({ params, searchParams }) {
  const id = params?.slug ? " . " + params?.slug : ''

  return {
    title: `Janella Vanilla ${id.replaceAll('-', ' ')}`,
    description: `Recipe ${id}`,
  }
}

export default function page(props) {
  const slug = props.params.slug
  const post = getPostContent(slug)
  console.log(post)
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  )
}

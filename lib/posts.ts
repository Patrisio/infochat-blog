import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  slug: string,
  content: string | null,
  title: string,
  date: number,
  image: string,
  excerpt: string,
}

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string): PostData {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '');

  const { title, date, image, excerpt } = data;
  const postData: PostData = {
    slug: postSlug,
    title,
    date,
    image,
    excerpt,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts: PostData[] = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA: PostData, postB: PostData) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}
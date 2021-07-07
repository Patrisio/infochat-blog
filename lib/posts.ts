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
  author: string,
  category: string,
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier: string): PostData {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const { title, date, image, excerpt, category, author } = data;
  const postData: PostData = {
    slug: postSlug,
    title,
    date,
    image,
    excerpt,
    category,
    author,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts: PostData[] = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA: PostData, postB: PostData) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

export function getPostsByCategory(category: string) {
  const allPosts = getAllPosts();
  const filteredPostsByCategory = allPosts.filter(post => post.category === category);

  return filteredPostsByCategory;
}

export function getPostsByAuthor(authorName: string) {
  const allPosts = getAllPosts();
  const filteredPostsByCategory = allPosts.filter(post => post.author === authorName);

  return filteredPostsByCategory;
}
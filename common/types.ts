interface Author {
  name: string;
  title: string;
  picture: Picture;
}

interface Picture {
  width: number;
  height: number;
  url: string;
}

export interface MailData {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export interface Post {
  createdAt: string;
  title: string;
  excerpt: string;
  slug: string;
  postContent: string;
  author: Author;
  coverImage?: any;
}

export interface PostCollection {
  posts: Post[];
}

export interface SinglePost {
  post: Post;
}

import { PostCollection } from "@/common/types";
import { BlogCard } from "@/components/BlogCard";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import Head from "next/head";
<<<<<<< Updated upstream
import { fetchPosts } from "utils/contentfulPosts";
=======
import { fetchPosts } from "@/utils/posts";
>>>>>>> Stashed changes

const blog = ({ posts }: PostCollection) => {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
        <meta
          name="description"
          content="Personal posts about technology and life"
        />
      </Head>

<<<<<<< Updated upstream
      <h1 className="sm:text-5xl text-4xl mb-10 sm:text-left text-center">
=======
      <h1 className="sm:text-5xl text-3xl mb-10 sm:text-left text-center">
>>>>>>> Stashed changes
        Blog Posts {`(${posts.length})`}
      </h1>
      {posts.map((post) => (
        <BlogCard post={post} key={post.slug} />
      ))}
    </Layout>
  );
};

export default blog;

export const getStaticProps: GetStaticProps<PostCollection> = async () => {
  const { posts } = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
};

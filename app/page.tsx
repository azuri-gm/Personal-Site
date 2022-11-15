import CTA from '@/components/CTA';
import Intro from '@/components/Intro';
import matter from 'gray-matter';

// https://cdn.contentful.com/spaces/b66dlrudqsdj/environments/master/entries?access_token=iud3f5hh9WDnFpxRuAfjsRzk-Om8HrZ1VEzr4Pumhnk
const spaceId = 'b66dlrudqsdj';
const environmentId = 'master';
const accessToken = 'iud3f5hh9WDnFpxRuAfjsRzk-Om8HrZ1VEzr4Pumhnk';

type PostsResponse = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: {
    metadata: { tags: string[] };
    sys: {
      space: { sys: { type: string; linkType: string; id: string } };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: { sys: { id: string; type: string; linkType: string } };
      revision: number;
      contentType: { sys: { type: string; linkType: string; id: string } };
      locale: string;
    };
    fields: {
      title: string;
      subtitle: string;
      slug: string;
      content: string;
      date: string;
    };
  }[];
};

async function getPosts() {
  const posts: PostsResponse = await (
    await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`
    )
  ).json();
  return posts;
}

function formatPosts(posts: PostsResponse) {
  return posts.items.map((post) => {
    const { content } = matter(post.fields.content);
    console.log(content);
    return {
      ...post,
      content,
    };
  });
}

export default async function Page() {
  const posts = await getPosts();
  const formattedPosts = formatPosts(posts);
  // console.log(formattedPosts);

  return (
    <div className='flex flex-col h-70v'>
      <div className='flex-grow'>
        <Intro />
        {formattedPosts.map((item) => (
          <div key={item.sys.id}>
            <h3>{item.fields.title}</h3>
            <p>{item.fields.subtitle}</p>
            <p>{item.content}</p>
          </div>
        ))}
        {/* <pre>{recentPosts}</pre> */}
        {/* {posts && <LatestArticles posts={posts} />} */}
      </div>
      <div className='h-1/3'>
        <CTA />
      </div>
    </div>
  );
}

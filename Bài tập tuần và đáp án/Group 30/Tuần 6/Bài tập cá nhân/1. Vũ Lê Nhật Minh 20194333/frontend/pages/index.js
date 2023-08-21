import Layout from "../components/Layout";
import Container from "../components/Container";
import { getBlogMetadata } from "../utils/blogs/blogs";
import ArticlesList from "../components/Blogs/articlesList";

const Mainpage = (data) => {
  return (
    <>
      <div className="all-blogs">
        <ArticlesList blogs={data.data} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await getBlogMetadata();
  return {
    props: {
      data,
    },
  };
}

function BlogPage({ data }) {
  return (
    <Container>
      <Layout pageTitle="Blogs">
        {Mainpage(data)}
      </Layout>
    </Container>
  );
}

export default BlogPage;

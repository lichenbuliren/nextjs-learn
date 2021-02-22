import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import dayjs from "dayjs";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {dayjs(postData.date).format("MMMM d, YYYY")}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;

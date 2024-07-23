import Image from "next/image";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import Head from "next/head";

const posts = [
  {title: "Next Js 15", excert : "This is an excert of the post"},
  {title: "Learn Next Js", excert : "This is another excert of the post"},
]

export default function Home() {
  return (
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>SnapScribe</title>
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => <PostCard post = {post} key={post.title}/> )}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
        
      </div>
  );
}

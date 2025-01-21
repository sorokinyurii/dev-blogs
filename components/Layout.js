import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ 
  title = "Welcome to Dev Blogs", 
  keywords = "development, coding, programming", 
  description = "The best info and news in development", 
  posts,
  children 
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Search posts={posts} />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

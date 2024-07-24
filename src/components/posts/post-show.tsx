import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({ where: { id: postId } });
  if (!post) {
    notFound();
  }
  return (
    <div className="m-4">
      <h1 className="my-2 text-2xl font-bold">{post.title}</h1>
      <p className="rounded border p-4">{post.content}</p>
    </div>
  );
}

/*
<meta name="ahrefs-site-verification" content="95f85c2cd56abc6ed9646f9718adf80bc626b61473cabfe820d547570adfe4cc">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<meta name="google-site-verification" content="eC-aQpUQHnHkzU3YPGO9IKm8-6sVHW45vrfItq3n25I" />

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4PQ0HK6L7Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4PQ0HK6L7Z');
</script>

*/

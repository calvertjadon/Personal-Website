<script>
  // import the list of posts
  import { posts } from "../posts";
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>My Blog</h1>

<!-- iterate through each post -->
{#each posts as post}
  <article id="posts">
    <!-- link article to /posts/$permalink -->
    <a rel:prefetched href={`/posts/${post.permalink}`}>
      <h2>{post.title}</h2>
    </a>
  </article>
{/each}

<script>
	export let data;
	const posts = data.posts;
</script>

<h1>Posts</h1>
{#if posts && posts?.length > 0}
	<ul>
		{#each posts as post}
			<li><a href="./posts/{post.replace('.json', '')}">{post}</a></li>
		{/each}
	</ul>
{/if}

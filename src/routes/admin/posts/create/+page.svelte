<script>
	let md = '## Hello world!';
</script>

<h1>Create Post</h1>

<form method="POST">
	<input id="title" name="title" type="text" placeholder="input here" />
	<textarea name="content" bind:value={md} />
	<button type="submit">Submit</button>
</form>

<hr />

<style>
	input,
	button,
	textarea,
	select {
		display: block;
	}
</style>

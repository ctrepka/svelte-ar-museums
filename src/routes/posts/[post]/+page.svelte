<script>
	export let data;
</script>

<h1>{data.test}</h1>
{#if data}
	{data.test}
{/if}
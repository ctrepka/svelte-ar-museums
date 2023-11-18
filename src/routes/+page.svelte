<div class="ar-scene">
	<a-scene embedded arjs>
        <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
		<a-entity camera></a-entity>
	</a-scene>
</div>

<style lang="scss">
	:global(.a-canvas, #arjs-video) {
		display: block;
		width: 100% !important;
		height: 100% !important;
		margin: 0 !important;
		object-fit: contain !important;
	}
</style>

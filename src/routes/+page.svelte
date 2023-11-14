<div class="ar-scene">
	<a-scene embedded arjs>
		<a-marker preset="hiro">
			<!-- we use cors proxy to avoid cross-origin problems ATTENTION! you need to set up your server -->
			<a-box position="0 0.5 0" material="opacity: 0.5; side: double;color:blue;">
				<a-torus-knot
					radius="0.26"
					radius-tubular="0.05"
					animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
				/>
			</a-box>
		</a-marker>
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

<script lang="ts">
	const viewBox = "0 0 60 80";

	export let height: string = "15em";
	export let color: string = "#e9abb1";
	export let float: "none" | "left" | "right" = "none";
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {height} style:float>
	<g fill={color}>
		<path
			d="m23.4 29a10 10 0 0 0-3.42 7.53 10 10 0 0 0 10 10
		10 10 0 0 0 10-10 10 10 0 0 0-3.38-7.49 8 8 0 0 1 1.38 4.49
		8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 1.42-4.53z"
		/>
		<polygon
			transform="matrix(.5 0 0 .5 25.5 25)"
			points="3 18 18 7 0 7 15 18 9 0"
		/>
	</g>
	<g fill="none" stroke={color} stroke-width="3">
		<polygon points="30 70 10 40 30 10 50 40" />
		<line x1="30" x2="30" y1="45" y2="58" />
		<line x1="25" x2="35" y1="52" y2="52" />
	</g>
</svg>

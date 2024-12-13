<script>
	export let currentPath; // This will receive the path from layout

	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { links } from "$lib/utils/links";
	
	import ActionLink from "./actionLink.svelte";
	import MenuButton from "./menuButton.svelte";
	
	let hasBlur = false;
	const handleScroll = () => {
		window.scrollY > 10 ? hasBlur = true : hasBlur = false;
	};
	
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	
	let isModalOpen = false;
	const toggleModal = () => {
		isModalOpen = !isModalOpen;
		document.body.classList.toggle('-no-scroll', isModalOpen);
	};
	
</script>

<div class:-has-blur={hasBlur} class="navigation_bar -top">
	<div class="container">
		
		<a href="./" aria-label="Homepage">
			<picture>
				<source media="(min-width:650px)" srcset="logotype_w.webp">
				<source media="(min-width:320px)" srcset="logo.webp">
				<img src="logotype_w.webp" alt="Mistaek">
			</picture>
		</a>
		
		<nav>
			<ul class="navigation-links">
				{#each links as link}
				<li>
					<a href={link.url} target={link.isExternal ? "_blank" : ""} rel={link.isExternal ? "noopener noreferrer" : ""} aria-label={link.label} class:active={currentPath === link.url}>
						<p class="body_text -large -subtle navigation_item">{link.label}</p>
					</a>
				</li>
				{/each}
			</ul>
			
			<ActionLink url="https://cal.com/mistaek/15min" customClass="action -outline" label="Book a call" icon="arrow-out" />
			
			{#if !isModalOpen}
			<MenuButton customClass="-outline -compressed" icon="menu" on:toggle={toggleModal} />
			{:else}
			<MenuButton customClass="-outline -compressed" icon="close" on:toggle={toggleModal} />
			{/if}
		</nav>
		
	</div>
</div>

{#if isModalOpen}
<!-- Render your modal with links here -->
<div class="modal -navigation" transition:fade>
	<ul class="navigation-links">
		{#each links as link}
		<li>
			<a href={link.url} target={link.isExternal ? "_blank" : ""} rel={link.isExternal ? "noopener noreferrer" : ""} aria-label={link.label} class:active={currentPath === link.url} on:click={toggleModal}>
				<p class="body_text -large -subtle navigation_item">{link.label}</p>
			</a>
		</li>
		{/each}
	</ul>
</div>
{/if}

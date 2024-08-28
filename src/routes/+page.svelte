<script>
	// import ContactForm from '$lib/components/ContactForm.svelte';
	import '$lib/styles/main.scss';
	import ActionBarTop from '$lib/components/actionBarTop.svelte';
	import Hero from '../lib/sections/hero.svelte';
    import ProblemSolution from '../lib/sections/problem-solution.svelte';
	import ActionBarBottom from '../lib/components/actionBarBottom.svelte';
	import ProjectCase from '$lib/components/projectCase.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<ActionBarTop />

<main class="container">
	
	<!-- Hero Section -->
	<Hero />
	
	<!-- Sections for content -->
	 <ProblemSolution />
	
	<section class="section process">
		<div class="content">
			
			<div class="row">
				
				<!-- Transform into a component probably -->
				<div class="identifier">
					<span class="number">C</span><p class="body_text -nano">My 3-Step Process to Success</p>
				</div>
				
				<div class="col">
					<div class="heading_group">
						<p class="body_text -large">Struggling to turn your vision into a clear, impactful brand?</p>
						<h4>I believe in making things simple and straightforward, ensuring we’re always on the same page.</h4>
					</div>
				</div>
				<div class="col">
					
					<div class="grid">
						
						<div class="grid_item">
							<p class="body_text -nano">01. Discovery & Strategy</p>	
							<p class="body_text -medium">Understanding your vision</p>
							<p class="body_text -small">We start by diving deep into your goals, audience, and brand values to create a tailored design strategy.</p>
						</div>
						
						<div class="grid_item">
							<p class="body_text -nano">02. Design & Iterate</p>	
							<p class="body_text -medium">Crafting your unique identity</p>
							<p class="body_text -small">We design and refine your brand elements, ensuring they align with your vision and resonate with your audience.</p>
						</div>
						
						<div class="grid_item">
							<p class="body_text -nano">03. Launch & Grow</p>	
							<p class="body_text -medium">Bringing your brand to life</p>
							<p class="body_text -small">With everything in place, we help you launch your new look, including a responsive, engaging website, and continue to support your growth with ongoing improvements.</p>
						</div>
						
					</div>
				</div>
				
				
			</div>
			
			
		</div>
	</section>
	
	<section class="section why_choose">
		<div class="content">
			<div class="row">
				
				<!-- Transform into a component probably -->
				<div class="identifier">
					<span class="number">D</span><p class="body_text -nano">Why Choose Me?</p>
				</div>
				
				<div class="content_group">
					
					<div class="heading_group">
						<p class="body_text -large">Detail-oriented, approachable, and solution-driven</p>
						<h4>I’m committed to delivering results that matter. With a focus on accessibility and usability, I create designs that not only look good but also work flawlessly.</h4>
					</div>
					
					<div class="text_group">
						<p class="body_text -medium">My background in design systems means I know how to keep things organised and scalable, ensuring your brand grows consistently.</p>
						<p class="body_text -medium">Plus, I’m easy to talk to and love making the process as smooth and enjoyable as possible.</p>
					</div>
					
				</div>
				
				<div class="content_group">
					
					<div class="heading_group">
						<h5>Hear from those who’ve worked with me</h5>
					</div>
					
					<div class="grid -testimonials">
						<div class="grid_item">
							<picture>
								<img src="img_orange_flowers.avif" alt="Flowers" style="width:100px;">
							</picture>
							<p class="body_text -small">Name</p>
							<p class="body_text -medium">"This platform makes booking a stay so easy and secure. I found the perfect place to stay for my vacation, and the experience was unforgettable."</p>
						</div>
						
						<div class="grid_item">
							<picture>
								<img src="img_orange_flowers.avif" alt="Flowers" style="width:100px;">
							</picture>
							<p class="body_text -small">Name</p>
							<p class="body_text -medium">"As an adventure guide, this platform allows me to reach a wider audience and share the beauty of our islands with enthusiastic visitors."</p>
						</div>
						
						<div class="grid_item">
							<picture>
								<img src="img_orange_flowers.avif" alt="Flowers" style="width:100px;">
							</picture>
							<p class="body_text -small">Name</p>
							<p class="body_text -medium">"Hosting on this platform has been a game-changer for me. I love sharing my home with travelers and meeting people from all over the world."</p>
						</div>
						
						<div class="grid_item">
							<picture>
								<img src="img_orange_flowers.avif" alt="Flowers" style="width:100px;">
							</picture>
							<p class="body_text -small">Name</p>
							<p class="body_text -medium"> "The support team is incredibly helpful. They guided me through the entire process of becoming a host, making it simple and stress-free."</p>
						</div>
					</div>
					
				</div>
				
			</div>
		</div>
	</section>
	
	<section class="section services">
		<div class="content">
			<div class="row">
				
				<!-- Transform into a component probably -->
				<div class="identifier">
					<span class="number">E</span><p class="body_text -nano">Services tailored to your needs</p>
				</div>
				
				<div class="col">
					<div class="heading_group">
						<h4>Whether you’re starting from scratch or looking to refresh your brand, I offer a range of services designed to help you succeed:</h4>
					</div>
				</div>
				<div class="col">
					
					<div class="grid">
						
						<div class="grid_item">
							<p class="body_text -nano">01.</p>	
							<p class="body_text -medium">UDesign Systems & DesignOps</p>
							<p class="body_text -small">Scalable, efficient systems that ensure consistency across your brand.</p>
						</div>
						
						<div class="grid_item">
							<p class="body_text -nano">02.</p>	
							<p class="body_text -medium">UX/UI & Product design</p>
							<p class="body_text -small">User-centered designs that enhance usability and create seamless experiences.</p>
						</div>
						
						<div class="grid_item">
							<p class="body_text -nano">03.</p>	
							<p class="body_text -medium">Web Design</p>
							<p class="body_text -small">Crafting responsive, visually engaging websites that connect with users across all devices.</p>
						</div>
						
						<div class="grid_item">
							<p class="body_text -nano">04.</p>	
							<p class="body_text -medium">Branding</p>
							<p class="body_text -small">Building a cohesive brand identity that resonates with your audience.</p>
						</div>
						
					</div>
				</div>
				
				
			</div>
		</div>
	</section>
	
	<section class="section trusted_by">
		<div class="content">
			
			<div class="row">
				
				<!-- Transform into a component probably -->
				<div class="identifier">
					<span class="number">F</span><p class="body_text -nano">Trusted by forward-thinking companies</p>
				</div>
				
				<div class="content_group">
					
					<div class="heading_group">
						<h4>My clients love the clarity, creativity, and results I bring to the table.</h4>
					</div>
					
					<div class="text_group">
						<h5>Fidelidade, OK! Teleseguros, BiG, Pedigree, Whiskas, BBDO, Smart, Mercedes-Benz, C.Santos VP, Young Lions PT, ComOn, Redbull, Solinca, Jerónimo Martins, Esporão, Troia Resort, Fox, FC. Porto, CUF, FFMS, Santander, Interaction Design Foundation (IxDF)</h5>
						<p class="body_text -small">+ and more</p>
					</div>
					
				</div>
				
				<div class="content_group">
					
					<ProjectCase />
					
				</div>
				
			</div>
			
			
		</div>
	</section>
	
	<section class="section mistaek">
		<div class="content">
			<div class="row">
				
				<!-- Transform into a component probably -->
				<div class="identifier">
					<span class="number">G</span><p class="body_text -nano">Creative Process</p>
				</div>
				
				<div class="content_group">
					
					<div class="heading_group">
						<h4>Embracing mistaeks, fostering innovation</h4>
						<div class="text_group">
							<p class="body_text -medium">I believe that the best ideas often come from the unexpected. That’s why I embrace mistakes as part of the creative process, using them as opportunities to push boundaries and find innovative solutions.</p>
							<p class="body_text -medium">This approach not only leads to unique, effective designs but also ensures we’re always learning and evolving.</p>
						</div>
					</div>
					
					<picture>
						<img src="img_orange_flowers.avif" alt="Flowers" style="width:100px;">
					</picture>
					
				</div>
				
			</div>
		</div>
	</section>
	
</main>

<ActionBarBottom />

<!-- Footer -->
<Footer />

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
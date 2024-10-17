<div class="badge">
	<p class="body_text -nano">Best Option</p>
</div>

<style lang="scss">
	.badge {
		display: inline-block;
		border-radius: $border-radius-md;
		background-color: rgba($color-brand-accent, 0.16);
		padding: $space-50 $space-100;
		
		p {
			color: $color-brand-accent;
			
			&::before {
				content: '';
				display: inline-block;
				width: 8px;
				height: 8px;
				-moz-border-radius: $border-radius-md;;
				-webkit-border-radius: $border-radius-md;;
				border-radius: $border-radius-md;
				background-color: $color-brand-accent;
				margin-right: $space-100;
			}
		}
	}
</style>
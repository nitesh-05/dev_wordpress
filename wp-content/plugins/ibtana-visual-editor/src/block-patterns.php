<?php
/**
 * VW Life Coach Theme: Block Patterns
 *
 * @package VW Life Coach
 * @since   1.0.0
 */

/**
 * Register Block Pattern Category.
 */
if ( function_exists( 'register_block_pattern_category' ) ) {

	register_block_pattern_category(
		'ive-life-coach',
		array( 'label' => __( 'VW Life Coach', 'ive-life-coach' ) )
	);
}

/**
 * Register Block Patterns.
 */
if ( function_exists( 'register_block_pattern' ) ) {
	register_block_pattern(
		'ibtana-visual-editor/banner-section',
		array(
			'title'      => __( 'VW Life Coach Banner Section', 'ive-life-coach' ),
			'categories' => array( 'ive-life-coach' ),
			'content'    => "<!-- wp:cover {\"url\":\"" . plugins_url() . "/ibtana-visual-editor/dist/images/block_pattern/slider.png\",\"id\":2922,\"dimRatio\":60,\"customGradient\":\"linear-gradient(90deg,rgb(238,238,238) 48%,rgba(168,183,194,0) 74%)\",\"align\":\"full\",\"className\":\"slider-pattern\"} -->\n<div class=\"wp-block-cover alignfull has-background-dim-60 has-background-dim has-background-gradient slider-pattern\" style=\"background-image:url(" . plugins_url() . "/ibtana-visual-editor/dist/images/block_pattern/slider.png)\"><span aria-hidden=\"true\" class=\"wp-block-cover__gradient-background\" style=\"background:linear-gradient(90deg,rgb(238,238,238) 48%,rgba(168,183,194,0) 74%)\"></span><div class=\"wp-block-cover__inner-container\"><!-- wp:columns {\"align\":\"full\"} -->\n<div class=\"wp-block-columns alignfull\"><!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\"><!-- wp:heading {\"level\":5,\"align\":\"full\"} -->\n<h5 class=\"alignfull\">Lorem Ipsum has been</h5>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"align\":\"full\"} -->\n<h2 class=\"alignfull\">Lorem Ipsum has been the industry's </h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons {\"align\":\"left\"} -->\n<div class=\"wp-block-buttons alignleft\"><!-- wp:button {\"textColor\":\"white\",\"gradient\":\"luminous-vivid-amber-to-luminous-vivid-orange\"} -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link has-white-color has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background has-text-color has-background\">GET STARTED</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div></div>\n<!-- /wp:cover -->",
		)
	);

	register_block_pattern(
		'ibtana-visual-editor/article-section',
		array(
			'title'      => __( 'VW Life Coach Article Section', 'ive-life-coach' ),
			'categories' => array( 'ive-life-coach' ),
			'content'    => "<!-- wp:cover {\"customOverlayColor\":\"#edf0f5\",\"align\":\"full\",\"className\":\"article-outer-box\"} -->\n<div class=\"wp-block-cover alignfull has-background-dim article-outer-box\" style=\"background-color:#edf0f5\"><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":5} -->\n<h5 class=\"has-text-align-center\">Our Exclusive Blog</h5>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"level\":3} -->\n<h3 class=\"has-text-align-center\">Our Article &amp; News</h3>\n<!-- /wp:heading -->\n\n<!-- wp:columns {\"align\":\"full\",\"className\":\"article-container\"} -->\n<div class=\"wp-block-columns alignfull article-container\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:image {\"id\":2949,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"" . plugins_url() . "/ibtana-visual-editor/dist/images/block_pattern/article1.png\" alt=\"\" class=\"wp-image-2949\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:cover {\"overlayColor\":\"white\",\"minHeight\":0,\"className\":\"article-section\"} -->\n<div class=\"wp-block-cover has-white-background-color has-background-dim article-section\"><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":4} -->\n<h4 class=\"has-text-align-center\">Article Title Number 1</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:cover --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:image {\"id\":2950,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"" . plugins_url() . "/ibtana-visual-editor/dist/images/block_pattern/article2.png\" alt=\"\" class=\"wp-image-2950\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:cover {\"overlayColor\":\"white\",\"minHeight\":0,\"className\":\"article-section\"} -->\n<div class=\"wp-block-cover has-white-background-color has-background-dim article-section\"><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":4} -->\n<h4 class=\"has-text-align-center\">Article Title Number 2</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:cover --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:image {\"id\":2951,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"" . plugins_url() . "/ibtana-visual-editor/dist/images/block_pattern/article3.png\" alt=\"\" class=\"wp-image-2951\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:cover {\"overlayColor\":\"white\",\"minHeight\":0,\"className\":\"article-section\"} -->\n<div class=\"wp-block-cover has-white-background-color has-background-dim article-section\"><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":4} -->\n<h4 class=\"has-text-align-center\">Article Title Number 3</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:cover --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:image {\"id\":2952,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} -->\n<figure class=\"wp-block-image size-large is-style-default\"><img src=\"" . plugins_url() . "/ibtana-visual-editor/dist/images/block_pattern/article4.png\" alt=\"\" class=\"wp-image-2952\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:cover {\"overlayColor\":\"white\",\"minHeight\":0,\"className\":\"article-section\"} -->\n<div class=\"wp-block-cover has-white-background-color has-background-dim article-section\"><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":4} -->\n<h4 class=\"has-text-align-center\">Article Title Number 4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:cover --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n</div></div>\n<!-- /wp:cover -->",
		)
	);
}

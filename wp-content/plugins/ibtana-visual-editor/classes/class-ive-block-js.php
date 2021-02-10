<?php
/**
 * IVE Block Helper.
 *
 * @package IVE
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'IVE_Block_JS' ) ) {

	/**
	 * Class IVE_Block_JS.
	 */
	class IVE_Block_JS {

        public static function get_button_gfonts( $attr ) {

            $load_google_font = isset( $attr['googleFont'] ) ? $attr['googleFont'] : '';
			$font_family      = isset( $attr['typography'] ) ? $attr['typography'] : '';
			$font_weight      = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset      = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';

            IVE_Helper::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
		}
		
		public static function get_progress_bar_gfonts( $attr ) {

            $load_google_font = isset( $attr['googleFont'] ) ? $attr['googleFont'] : '';
			$font_family      = isset( $attr['typography'] ) ? $attr['typography'] : '';
			$font_weight      = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset      = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';

			$load_google_font_cont = isset( $attr['googleFont_cont'] ) ? $attr['googleFont_cont'] : '';
			$font_family_cont      = isset( $attr['typography_cont'] ) ? $attr['typography_cont'] : '';
			$font_weight_cont      = isset( $attr['fontWeight_cont'] ) ? $attr['fontWeight_cont'] : '';
			$font_subset_cont      = isset( $attr['fontSubset_cont'] ) ? $attr['fontSubset_cont'] : '';

			IVE_Helper::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
			
			IVE_Helper::blocks_google_font( $load_google_font_cont, $font_family_cont, $font_weight_cont, $font_subset_cont );
        }
	}
}

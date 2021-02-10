<?php
/**
 * UAGB Block Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'IVE_Block_Helper' ) ) {

	/**
	 * Class IVE_Block_Helper.
	 */
	class IVE_Block_Helper {

		/**
		 * Get block CSS
		 *
		 * @since 1.19.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_button_css( $attr, $id ) {

			$defaults = IVE_Helper::$block_list['ive/ibtana-visual-editorbtn']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$unit = 'px';
			$index = 0;
			$typography = isset($attr['typography']) ? ($attr['typography']) : '';
			$fonttypography = str_replace(' ','+',$typography);
			$fontfamilyname = ($typography !== '') ? $fonttypography : 'Open+Sans';
			$iconGrad = $attr['iconGrad'];
			$background = isset($attr['btns'][$index]['background']) ? ($attr['btns'][$index]['background']) : 'transparent';
			$backgroundHov = isset($attr['btns'][$index]['backgroundHover']) ? ($attr['btns'][$index]['backgroundHover']) : 'transparent';
			$mobpaddingBT =  isset($attr['btns'][$index]['mobpaddingBT']) ? $attr['btns'][$index]['mobpaddingBT'] : 10;
			$mobpaddingLR =  isset($attr['btns'][$index]['mobpaddingLR']) ? $attr['btns'][$index]['mobpaddingLR'] : 10;
			$tabpaddingBT =  isset($attr['btns'][$index]['tabpaddingBT']) ? $attr['btns'][$index]['tabpaddingBT'] : 10;
			$tabpaddingLR =  isset($attr['btns'][$index]['tabpaddingLR']) ? $attr['btns'][$index]['tabpaddingLR'] : 10;
			$deskpaddingBT =  isset($attr['btns'][$index]['deskpaddingBT']) ? $attr['btns'][$index]['deskpaddingBT'] : 10;
			$deskpaddingLR =  isset($attr['btns'][$index]['deskpaddingLR']) ? $attr['btns'][$index]['deskpaddingLR'] : 10;
			$vBgImgPosition = isset($attr['vBgImgPosition']) ? $attr['vBgImgPosition'] : 'center center';
			$bgfirstcolorr = isset($attr['bgfirstcolorr']) ? $attr['bgfirstcolorr'] : '';
			$hovGradFirstColor = isset($attr['hovGradFirstColor']) ? $attr['hovGradFirstColor'] : '';
			$bgGradLoc = isset($attr['bgGradLoc']) ? $attr['bgGradLoc'] : 0;
			$bgSecondColr = isset($attr['bgSecondColr']) ? $attr['bgSecondColr'] : '';
			$hovGradSecondColor = isset($attr['hovGradSecondColor']) ? $attr['hovGradSecondColor'] : '';
			$bgGradLocSecond = isset($attr['bgGradLocSecond']) ? $attr['bgGradLocSecond'] : 100;
			$bgGradAngle = isset($attr['bgGradAngle']) ? $attr['bgGradAngle'] : 180;

			if('radial' === $attr['bgGradType']){
				$backgroundImage = 'radial-gradient(at '.$vBgImgPosition.','.$bgfirstcolorr.' '.$bgGradLoc.'%, '.$bgSecondColr.' '.$bgGradLocSecond.'%)';
			}else{
				$backgroundImage = 'linear-gradient('.$bgGradAngle.'deg, '.$bgfirstcolorr.' '.$bgGradLoc.'%, '.$bgSecondColr.'  '.$bgGradLocSecond.'%)';
			}

			if('radial' === $attr['bgGradType']){
				$backgroundImageHov = 'radial-gradient(at '.$vBgImgPosition.','.$hovGradFirstColor.' '.$bgGradLoc.'%, '.$hovGradSecondColor.' '.$bgGradLocSecond.'%)';
			}else{
				$backgroundImageHov = 'linear-gradient('.$bgGradAngle.'deg, '.$hovGradFirstColor.' '.$bgGradLoc.'%, '.$hovGradSecondColor.'  '.$bgGradLocSecond.'%)';
			}

			$selectors = array(
				' .anchrstyle' => array(
					'opacity' 				=> isset($attr['bgOpacity']) ? $attr['bgOpacity'] : 1,
					'text-decoration' 		=> 'none',
					'border-radius' 		=> isset($attr['btns'][$index]['borderRadius']) ? ($attr['btns'][$index]['borderRadius']).$unit : '0' . $unit,
					'border-width' 			=> isset($attr['btns'][$index]['borderWidth']) ? ($attr['btns'][$index]['borderWidth']).$unit : '0' . $unit,
					'border-color' 			=> isset($attr['btns'][$index]['border']) ? ($attr['btns'][$index]['border']) : '',
					'border-style' 			=> 'solid',
					'color' 				=> isset($attr['btns'][$index]['color']) ? $attr['btns'][$index]['color'] : '#555555',
					'letter-spacing' 		=> isset($attr['letterSpacing']) ? ($attr['letterSpacing']).$unit : '0' . $unit,
					'font-family' 			=> $typography,
					'font-style' 			=> isset($attr['fontStyle']) ? ($attr['fontStyle']) : 'normal',
					'font-weight' 			=> isset($attr['fontWeight']) ? ($attr['fontWeight']) : 'normal',
					'background-image' 		=> $iconGrad ? $backgroundImage : 'unset',
					'background-color' 		=> !$iconGrad ? $background : 'unset',
					'font-size'				=> isset($attr['btns'][$index]['desksize']) ? $attr['btns'][$index]['desksize'] . $unit : '18'.$unit,
					'padding'				=> $deskpaddingBT.$unit .' '. $deskpaddingLR . $unit,
					'box-shadow'			=> isset($attr['boxshadowcolor']) ? $attr['boxshadowpos'].' '. $attr['boxshadowx'] .$unit.' '. $attr['boxshadowY'].$unit.' '. $attr['boxshadowblur'].$unit.' '. $attr['boxshadowspread'].$unit.' '. $attr['boxshadowcolor'] : '' ,
				),
				' .anchrstyle:hover' => array(
					'background-color' 		=> !$iconGrad ? $backgroundHov : 'unset',
					'color' 				=> isset($attr['btns'][$index]['colorHover']) ? $attr['btns'][$index]['colorHover'] : '#555555',
					'border-color' 			=> isset($attr['btns'][$index]['borderHover']) ? ($attr['btns'][$index]['borderHover']) : 'transparent',
					'background-image' 		=> $iconGrad ? $backgroundImageHov : 'unset',
					'box-shadow'			=> isset($attr['hoverboxshadowcolor']) ? $attr['hoverboxshadowpos'].' '. $attr['hoverboxshadowx'] .$unit.' '. $attr['hoverboxshadowY'].$unit.' '. $attr['hoverboxshadowblur'].$unit.' '. $attr['hoverboxshadowspread'].$unit.' '. $attr['hoverboxshadowcolor'] : '' ,
				),
				' .anchrstyle .ive-left-icon-parent' => array(
					'display' 				=> 'inline'
				),
				' .anchrstyle .ive-right-icon-parent' => array(
					'display' 				=> 'inline'
				),
				'.btn-inner-wrap' => array(
					'display'				=> $attr['deskvisible'] ? 'block' : 'none',
					'margin-top'			=> isset($attr['btns'][$index]['deskMarginTop']) ? $attr['btns'][$index]['deskMarginTop'] . $unit : '20'.$unit,
				),
				' .anchrstyle .ive-button-icon-padding'.$index.' i' => array(
					'font-size'				=> isset($attr['iconsize'][0]) ? $attr['iconsize'][0]. $unit : '12'. $unit
				),
				' .anchrstyle .ive-button-icon-padding'.$index => array(
					'padding-left'			=> isset($attr['btns'][$index]['iconpaddingleft']) ? $attr['btns'][$index]['iconpaddingleft'].$unit: '5'.$unit,
					'padding-right'			=> isset($attr['btns'][$index]['iconpaddingright']) ? $attr['btns'][$index]['iconpaddingright'].$unit : '5'.$unit,
					'color'							=> isset($attr['iconColor']) ? $attr['iconColor'] : '',
					'background-color'	=> isset($attr['iconBGColor']) ? $attr['iconBGColor'] : '',
				),
				' .anchrstyle .ive-button-icon-padding'.$index.':hover' => array(
					'color'							=> isset($attr['iconhoverColor']) ? $attr['iconhoverColor'] : '',
					'background-color'	=> isset($attr['iconhoverBGColor']) ? $attr['iconhoverBGColor'] : '',
				)
			);

			$t_selectors = array(
				' .anchrstyle' => array(
					'font-size'				=> isset($attr['btns'][$index]['tabsize']) ? $attr['btns'][$index]['tabsize'] . $unit : '16'.$unit,
					'padding'				=> $tabpaddingBT.$unit .' '. $tabpaddingLR . $unit,
				),
				'.btn-inner-wrap' => array(
					'display'				=> $attr['tabvisible'] ? 'block' : 'none',
					'margin-top'			=> isset($attr['btns'][$index]['tabMarginTop']) ? $attr['btns'][$index]['tabMarginTop'] . $unit : '20'.$unit,
				),
				' .anchrstyle .ive-button-icon-padding'.$index.' i' => array(
					'font-size'				=> isset($attr['iconsize'][1]) ? $attr['iconsize'][1]. $unit : '12'. $unit
				)
            );

            $m_selectors = array(
				' .anchrstyle' => array(
					'font-size'				=> isset($attr['btns'][$index]['mobsize']) ? $attr['btns'][$index]['mobsize'] . $unit : '14'.$unit,
					'padding'				=> $mobpaddingBT.$unit .' '. $mobpaddingLR . $unit,
				),
				'.btn-inner-wrap' => array(
					'display'				=> $attr['mobvisible'] ? 'block' : 'none',
					'margin-top'			=> isset($attr['btns'][$index]['mobMarginTop']) ? $attr['btns'][$index]['mobMarginTop'] . $unit : '20'.$unit,
				),
				' .anchrstyle .ive-button-icon-padding'.$index.' i' => array(
					'font-size'				=> isset($attr['iconsize'][2]) ? $attr['iconsize'][2]. $unit : '12'. $unit
				)
            );

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
            );

			return IVE_Helper::generate_all_css( $combined_selectors, ' .ive-btn-main-parent' . $attr['uniqueID'] );

		}

		public static function get_page_title_css( $attr, $id ) {

			$defaults = IVE_Helper::$block_list['ive/page-title']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				'.vw-page-title' => array(
					'display'				=> isset($attr['page_title']) && $attr['page_title'] ? 'none' : 'block'
				),
				'.vw-page-pagination' => array(
					'display'				=> isset($attr['pagination_title']) && $attr['pagination_title'] ? 'none' : 'block'
				)
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
            );

			return IVE_Helper::generate_all_css( $combined_selectors, '' );
		}

		public static function get_google_map_css( $attr, $id ) {

			$defaults = IVE_Helper::$block_list['ive/google-map']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$unit = 'px';

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				' .ive-google-map__wrap' => array(
					'background-color'		=> isset($attr['bgColor']) ? $attr['bgColor'] : '',
					'margin-top'			=> isset($attr['margin_top']) ? $attr['margin_top'].$unit : '35'.$unit,
					'margin-bottom'			=> isset($attr['margin_bottom']) ? $attr['margin_bottom'].$unit : '35'.$unit,
				),
				' .ive-google-map__iframe' => array(
					'height'				=> isset($attr['height']) ? $attr['height'].$unit : '300'.$unit,
					'opacity'				=> isset($attr['bgOpacity']) ? $attr['bgOpacity'] : 1
				)
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
            );

			return IVE_Helper::generate_all_css( $combined_selectors, '.ive_google_map' . $attr['uniqueID'] );
		}

		public static function get_image_gallery_css( $attr, $id ) {

			$defaults = IVE_Helper::$block_list['ive/gallery']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				' .ibtana-blocks-gallery-item' => array(
					'cursor'				=> 'pointer',
				),
				' .gallery-overlay' => array(
					'background'			=> isset($attr['overlayacolor']) ? $attr['overlayacolor'] : '#F5353561',
					'opacity'				=> isset($attr['imgopacity']) ? $attr['imgopacity'] : 1
				)
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
			);

			return IVE_Helper::generate_all_css( $combined_selectors, '.ive-gallery-wrap-id-' . $attr['uniqueID'] );
		}

		public static function get_icon_css( $attr, $id ) {
			$defaults = IVE_Helper::$block_list['ive/icon']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$unit = 'px';
			$margintb = isset($attr['margintb']) ? $attr['margintb'].$unit : '5'.$unit;
			$marginlr = isset($attr['marginlr']) ? $attr['marginlr'].$unit : '5'.$unit;

			$iconCount = $attr['iconCount'];

			$iconarrdesk = []; $iconarrtab = []; $iconarrmob = [];

			for ($i=0; $i < $iconCount; $i++) {
				$icon = $attr['icons'][$i];
				//classes
				$paddingClass = ' .ive_icon_parent_icon_padding'.$i;
				$sizeClass = ' .ive_icon_parent_icon_size'.$i;
				$hoverClass = ' .ive-svg-item-'.$i.':hover .ive_icon_parent_icon_padding'.$i;
				$defaultval = '0'.$unit;

				//desktop icon css
				$stylecon = ($icon['style'] == 'default');
				$background = isset($icon['background']) ? $icon['background'] : '#ffffff';
				$backgroundColor = $stylecon ? 'unset' : $background;
				$border = isset($icon['border']) ? $icon['border'] : '#444444';
      			$borderColor = $stylecon ? 'unset' : $border;
				$bordWidth = isset($icon['borderWidth']) ? $icon['borderWidth'] : 2;
				$borderWidth = $stylecon ? $defaultval : $bordWidth.$unit;
				$bordRadius = isset($icon['borderRadius']) ? $icon['borderRadius'] : 0;
				$borderRadius = $stylecon ? $defaultval : $bordRadius.$unit;

				$deskpadding = isset($icon['deskpadding']) ? $icon['deskpadding'].$unit : '20'.$unit;
				$deskpadding2 = isset($icon['deskpadding2']) ? $icon['deskpadding2'].$unit : '20'.$unit;
				$paddingdesk = !$stylecon ? $deskpadding.' '.$deskpadding2 : 'unset' ;

				$tabpadding = isset($icon['tabpadding']) ? $icon['tabpadding'].$unit : '16'.$unit;
				$tabpadding2 = isset($icon['tabpadding2']) ? $icon['tabpadding2'].$unit : '16'.$unit;
				$paddingtab = !$stylecon ? $tabpadding.' '.$tabpadding2 : 'unset' ;

				$mobpadding = isset($icon['mobpadding']) ? $icon['mobpadding'].$unit : '12'.$unit;
				$mobpadding2 = isset($icon['mobpadding2']) ? $icon['mobpadding2'].$unit : '12'.$unit;
				$paddingmob = !$stylecon ? $mobpadding.' '.$mobpadding2 : 'unset' ;

				$iconarrdesk[$paddingClass]['border-style'] = isset($icon['borderStyle']) ? $icon['borderStyle'] : 'none';
				$iconarrdesk[$paddingClass]['color'] = isset($icon['color']) ? $icon['color'] : '#444444';
				$iconarrdesk[$paddingClass]['background-color'] = $backgroundColor;
				$iconarrdesk[$paddingClass]['border-color'] = $borderColor;
				$iconarrdesk[$paddingClass]['border-width'] = $borderWidth;
				$iconarrdesk[$paddingClass]['border-radius'] = $borderRadius;
				$iconarrdesk[$paddingClass]['line-height'] = 0;

				//hover css
				$iconarrdesk[$hoverClass]['background'] = ( !$stylecon && isset($icon['hoverBackground'])) ? $icon['hoverBackground'] : 'undefined';
				$iconarrdesk[$hoverClass]['border-color'] = ( !$stylecon && isset($icon['hoverBorder'])) ? $icon['hoverBorder'] : 'undefined';
				$iconarrdesk[$hoverClass]['color'] = isset($icon['hoverColor']) ? $icon['hoverColor'] : '#eeeeee';

				$iconarrdesk[$sizeClass]['font-size'] = isset($icon['desksize']) ? $icon['desksize'].$unit : '50'.$unit;
				$iconarrdesk[$paddingClass]['padding'] = $paddingdesk;
				$iconarrdesk[$paddingClass]['width'] = (isset($icon['deskwidth']) && $icon['deskwidth'] != 0 ) ? $icon['deskwidth'].$unit : 'auto';
				$iconarrdesk[$paddingClass]['height'] = (isset($icon['deskheight']) && $icon['deskheight'] != 0 ) ? $icon['deskheight'].$unit : 'auto';

				//tablet icon css
				$iconarrtab[$sizeClass]['font-size'] = isset($icon['tabsize']) ? $icon['tabsize'].$unit : '35'.$unit;
				$iconarrtab[$paddingClass]['padding'] = $paddingtab;
				$iconarrtab[$paddingClass]['width'] = (isset($icon['tabwidth']) && $icon['tabwidth'] != 0 ) ? $icon['tabwidth'].$unit : 'auto';
				$iconarrtab[$paddingClass]['height'] = (isset($icon['tabheight']) && $icon['tabheight'] != 0 ) ? $icon['tabheight'].$unit : 'auto';

				//mobile icon css
				$iconarrmob[$sizeClass]['font-size'] = isset($icon['mobsize']) ? $icon['mobsize'].$unit : '20'.$unit;
				$iconarrmob[$paddingClass]['padding'] = $paddingmob;
				$iconarrmob[$paddingClass]['width'] = (isset($icon['mobwidth']) && $icon['mobwidth'] != 0 ) ? $icon['mobwidth'].$unit : 'auto';
				$iconarrmob[$paddingClass]['height'] = (isset($icon['mobheight']) && $icon['mobheight'] != 0 ) ? $icon['mobheight'].$unit : 'auto';
			}
			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				'.ive-icon-xl-left' => array(
					'text-align'			=> 'left !important'
				),
				'.ive-icon-xl-center' => array(
					'text-align'			=> 'center !important'
				),
				'.ive-icon-xl-right' => array(
					'text-align'			=> 'right !important'
				),
				' .ive-svg-icon-margin' => array(
					'margin'				=> $margintb.' '.$marginlr
				)
			);

			$deskcss = array_merge($selectors,$iconarrdesk);
			$tabcss = array_merge($t_selectors,$iconarrtab);
			$mobcss = array_merge($m_selectors,$iconarrmob);

			$combined_selectors = array(
				'desktop' => $deskcss,
				'tablet'  => $tabcss,
				'mobile'  => $mobcss,
			);

			return IVE_Helper::generate_all_css( $combined_selectors, '.ive-svg-icons' . $attr['uniqueID'] );
		}

		public static function get_separator_css( $attr, $id ) {
			$defaults = IVE_Helper::$block_list['ive/separator']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$unit = 'px';

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				' .ive-separator' => array(
					'height'				=> isset($attr['spacerHeight']) ? $attr['spacerHeight'].$unit : '6'.$unit
				),
				' .ive-separator-hr' => array(
					'border-color'			=> isset($attr['dividerColor']) ? $attr['dividerColor'] : '#eeeeee',
					'width'					=> isset($attr['dividerWidth']) ? $attr['dividerWidth'].'%' : '80%',
					'border-top-width'		=> isset($attr['dividerHeight']) ? $attr['dividerHeight'].$unit : '1'.$unit,
					'border-style'			=> isset($attr['dividerStyle']) ? $attr['dividerStyle'] : 'solid',
					'margin'				=> '0 auto',
					'opacity'				=> isset($attr['dividerOpacity']) ? $attr['dividerOpacity']/100 : 1
				)
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
			);

			return IVE_Helper::generate_all_css( $combined_selectors, '.ive-separator-' . $attr['uniqueID'] );
		}

		public static function get_progress_bar_css( $attr, $id ) {
			$defaults = IVE_Helper::$block_list['ive/separator']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$unit = 'px';
			$size = 150;
			$barType = isset($attr['barType']) ? $attr['barType'] : 'linear';
			$percentage = isset($attr['percentage']) ? $attr['percentage'] : 25;
			$counter = isset($attr['counter']) ? $attr['counter'] : false;
			$barThickness = isset($attr['barThickness']) ? $attr['barThickness'] : 1;
			$circleRadius = 50 - ($barThickness + 3) / 2;
			$circlePathLength = $circleRadius * pi() * 2;
			$strokeArcLength = ($circlePathLength * $percentage) / 100;
			$strokeArcLengthVal = number_format((float)$strokeArcLength, 3, '.', '');
			$strokeDasharray = number_format((float)$circlePathLength, 3, '.', '');
			if($counter){
				$circular_pg = '301.430px, 301.593px';
			}else{
				$circular_pg = $strokeArcLengthVal.$unit.', '.$strokeDasharray.$unit;
			}

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				'.ibtana_progress-bar' => array(
					'margin-top'			=> isset($attr['margin_top']) ? $attr['margin_top'].$unit : '10'.$unit,
					'margin-bottom'			=> isset($attr['margin_bottom']) ? $attr['margin_bottom'].$unit : '10'.$unit
				),
				' .circular-progressbar-right' => array(
					'margin-left'			=> 'auto'
				),
				' .circular-progressbar-center' => array(
					'margin'				=> 'auto'
				),
				' .ibtana_progress_title' => array(
					'font-size'				=> isset($attr['deskfontSize']) ? $attr['deskfontSize'].$unit : '24'.$unit,
					'color'					=> isset($attr['titleColor']) ? $attr['titleColor'] : '#111111',
					'background'			=> isset($attr['titlebgColor']) ? $attr['titlebgColor'] : '',
					'font-family'			=> isset($attr['typography']) ? $attr['typography'] : '',
					'letter-spacing'		=> isset($attr['letterSpacing']) ? $attr['letterSpacing'].$unit : 0,
					'font-weight'			=> isset($attr['fontWeight']) ? $attr['fontWeight'] : 'normal',
					'font-style'			=> isset($attr['fontStyle']) ? $attr['fontStyle'] : 'normal',
					'white-space'			=> 'pre-wrap'
				),
				' .ibtana_progress-bar-container.row' => array(
					'border-color'			=> isset($attr['progress_border']) ? $attr['progress_border'] : '#fff',
					'border-style'			=> 'solid',
					'border-width'			=> isset($attr['progress_borderWidth']) ? $attr['progress_borderWidth'].$unit : '2'.$unit,
					'border-radius'			=> isset($attr['progress_borderRadius']) ? $attr['progress_borderRadius'].$unit : 0,
					'padding'				=> isset($attr['progress_padding']) ? $attr['progress_padding'].$unit : '20'.$unit
				),
				' .ibtana_progress-bar-container.row .ibtana_progress-bar-line-path' => array(
					'stroke-dashoffset'		=> $counter ? '100'.$unit : (100 - $percentage).$unit
				),
				' .ibtana_progress-bar-container.circular' => array(
					'height'				=> isset($size) ? $size.$unit : '150'.$unit,
					'width'					=> isset($size) ? $size.$unit : '150'.$unit,
					'position'				=> 'relative'
				),
				' .ibtana_progress-bar-label' => array(
					'font-size'				=> isset($attr['deskfontSize_cont']) ? $attr['deskfontSize_cont'].$unit : '24'.$unit,
					'visibility'			=> 'visible',
					'text-align'			=> 'right',
					'min-width'				=> '24px',
					'color'					=> isset($attr['contentColor']) ? $attr['contentColor'] : '#111111',
					'font-family'			=> isset($attr['typography_cont']) ? $attr['typography_cont'] : '',
					'letter-spacing'		=> isset($attr['letterSpacing_cont']) ? $attr['letterSpacing_cont'].$unit : 0,
					'font-weight'			=> isset($attr['fontWeight_cont']) ? $attr['fontWeight_cont'] : 'normal',
					'font-style'			=> isset($attr['fontStyle_cont']) ? $attr['fontStyle_cont'] : 'normal',
				),
				' .ibtana_progress-bar-container.circular .ibtana_progress-bar-circle' => array(
					'position' 				=> 'absolute'
				),
				' .ibtana_progress-bar-container.circular .ibtana_progress-bar-circle-trail' => array(
					'stroke-dasharray'		=> $strokeDasharray.$unit.', '.$strokeDasharray.$unit
				),
				' .ibtana_progress-bar-container.circular .ibtana_progress-bar-circle-path' => array(
					'stroke-dasharray'		=> $circular_pg,
					'stroke-dashoffset'		=> ($counter ? '310' : '0').$unit
				)
			);

			if($barType === 'circular') {
				$selectors[' .ibtana_progress-bar-label'] = array(
					'font-size'				=> isset($attr['deskfontSize_cont']) ? $attr['deskfontSize_cont'].$unit : '24'.$unit,
					'position' 				=> 'absolute',
					'visibility'			=> 'visible',
					'top'					=> '50%',
					'transform'				=> 'translateY(-50%)',
					'margin'				=> 'auto',
					'text-align'			=> 'center',
					'left'					=> 0,
					'right'					=> 0,
					'color'					=> isset($attr['contentColor']) ? $attr['contentColor'] : '#111111',
					'font-family'			=> isset($attr['typography_cont']) ? $attr['typography_cont'] : '',
					'letter-spacing'		=> isset($attr['letterSpacing_cont']) ? $attr['letterSpacing_cont'].$unit : 0,
					'font-weight'			=> isset($attr['fontWeight_cont']) ? $attr['fontWeight_cont'] : 'normal',
					'font-style'			=> isset($attr['fontStyle_cont']) ? $attr['fontStyle_cont'] : 'normal',
				);
			}

			$t_selectors = array(
				' .ibtana_progress_title' => array(
					'font-size'				=> isset($attr['tabfontSize']) ? $attr['tabfontSize'].$unit : '20'.$unit
				),
				' .ibtana_progress-bar-label' => array(
					'font-size'				=> isset($attr['tabfontSize_cont']) ? $attr['tabfontSize_cont'].$unit : '20'.$unit,
				)
			);

			$m_selectors = array(
				' .ibtana_progress_title' => array(
					'font-size'				=> isset($attr['mobfontSize']) ? $attr['mobfontSize'].$unit : '16'.$unit
				),
				' .ibtana_progress-bar-label' => array(
					'font-size'				=> isset($attr['mobfontSize_cont']) ? $attr['mobfontSize_cont'].$unit : '16'.$unit,
				)
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
			);

			return IVE_Helper::generate_all_css( $combined_selectors, '.ibtana_progress_bar' . $attr['uniqueID'] );
		}

		public static function get_social_share_css( $attr, $id ) {

			$defaults = IVE_Helper::$block_list['ive/ive-social-share']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$unit = 'px';
			$alignType = isset($attr['alignType']) ? $attr['alignType'] : 'horizontal';
			$stylecon = ($attr['style'] == 'stacked');
			$borderStyle = isset($attr['borderStyle']) ? $attr['borderStyle'] : 'none';
			$borderColor = isset($attr['borderColor']) ? $attr['borderColor'] : '';
			$borderWidth = isset($attr['borderWidth']) ? $attr['borderWidth'].$unit : '2'.$unit;
			$borderRadius = isset($attr['borderRadius']) ? $attr['borderRadius'].$unit : 0;
			$background = isset($attr['background']) ? $attr['background'] : '';
			$backgroundHov = isset($attr['backgroundHov']) ? $attr['backgroundHov'] : '';
			$iconsticky = $attr['iconsticky'];

			//box shadow
			$shadowRightWidth = isset($attr['shadowRightWidth']) ? $attr['shadowRightWidth'] : 3;
			$shadowBottomWidth = isset($attr['shadowBottomWidth']) ? $attr['shadowBottomWidth'] : 3;
			$shadowColor = isset($attr['shadowColor']) ? $attr['shadowColor'] : '';
			$boxShadowDisable = ($shadowBottomWidth == 0 && $shadowRightWidth == 0) ? true : false;
			$boxShadowValue = $shadowRightWidth.$unit.' '.$shadowBottomWidth.$unit.' '.$shadowColor;
			$boxShadow = !$boxShadowDisable ? $boxShadowValue: 'none';

			//gradient
			$iconGrad = $attr['iconGrad'];
			$vBgImgPosition = isset($attr['vBgImgPosition']) ? $attr['vBgImgPosition'] : 'center center';
			$bgfirstcolorr = isset($attr['bgfirstcolorr']) ? $attr['bgfirstcolorr'] : '';
			$hovGradFirstColor = isset($attr['hovGradFirstColor']) ? $attr['hovGradFirstColor'] : '';
			$bgGradLoc = isset($attr['bgGradLoc']) ? $attr['bgGradLoc'] : 0;
			$bgSecondColr = isset($attr['bgSecondColr']) ? $attr['bgSecondColr'] : '';
			$hovGradSecondColor = isset($attr['hovGradSecondColor']) ? $attr['hovGradSecondColor'] : '';
			$bgGradLocSecond = isset($attr['bgGradLocSecond']) ? $attr['bgGradLocSecond'] : 100;
			$bgGradAngle = isset($attr['bgGradAngle']) ? $attr['bgGradAngle'] : 180;

			if('radial' === $attr['bgGradType']){
				$backgroundImage = 'radial-gradient(at '.$vBgImgPosition.','.$bgfirstcolorr.' '.$bgGradLoc.'%, '.$bgSecondColr.' '.$bgGradLocSecond.'%)';
			}else{
				$backgroundImage = 'linear-gradient('.$bgGradAngle.'deg, '.$bgfirstcolorr.' '.$bgGradLoc.'%, '.$bgSecondColr.'  '.$bgGradLocSecond.'%)';
			}

			if('radial' === $attr['bgGradType']){
				$backgroundImageHov = 'radial-gradient(at '.$vBgImgPosition.','.$hovGradFirstColor.' '.$bgGradLoc.'%, '.$hovGradSecondColor.' '.$bgGradLocSecond.'%)';
			}else{
				$backgroundImageHov = 'linear-gradient('.$bgGradAngle.'deg, '.$hovGradFirstColor.' '.$bgGradLoc.'%, '.$hovGradSecondColor.'  '.$bgGradLocSecond.'%)';
			}

			$align = 'inline-grid';
			if($alignType == 'horizontal'){
				$align = 'flex';
			}

			$stickyposition = isset($attr['stickyposition']) ? $attr['stickyposition'] : 'left';
			$stickytop = $alignType == 'horizontal' ? 'auto' : '50%' ;
			$stickytransform = $alignType == 'horizontal' ? 'none' : 'translateY(-50%)' ;
			$stickybottom = $alignType == 'horizontal' ? 0 : 'auto' ;
			$stickyleft = $stickyposition == 'left' ? 0 : 'auto' ;
			$stickyright = $stickyposition == 'right' ? 0 : 'auto' ;

			$deskiconSize = isset($attr['deskiconSize']) ? $attr['deskiconSize'].$unit : '18'.$unit;
			$tabiconSize = isset($attr['tabiconSize']) ? $attr['tabiconSize'].$unit : '15'.$unit;
			$mobiconSize = isset($attr['mobiconSize']) ? $attr['mobiconSize'].$unit : '12'.$unit;

			$deskmarginTopBottom = isset($attr['deskmarginTopBottom']) ? $attr['deskmarginTopBottom'].$unit : '8'.$unit;
			$deskmarginRightLeft = isset($attr['deskmarginRightLeft']) ? $attr['deskmarginRightLeft'].$unit : '8'.$unit;
			$deskpaddingTopBottom = isset($attr['deskpaddingTopBottom']) ? $attr['deskpaddingTopBottom'].$unit : '10'.$unit;
			$deskpaddingRightLeft = isset($attr['deskpaddingRightLeft']) ? $attr['deskpaddingRightLeft'].$unit : '10'.$unit;

			$tabmarginTopBottom = isset($attr['tabmarginTopBottom']) ? $attr['tabmarginTopBottom'].$unit : '6'.$unit;
			$tabmarginRightLeft = isset($attr['tabmarginRightLeft']) ? $attr['tabmarginRightLeft'].$unit : '6'.$unit;
			$tabpaddingTopBottom = isset($attr['tabpaddingTopBottom']) ? $attr['tabpaddingTopBottom'].$unit : '8'.$unit;
			$tabpaddingRightLeft = isset($attr['tabpaddingRightLeft']) ? $attr['tabpaddingRightLeft'].$unit : '8'.$unit;

			$mobmarginTopBottom = isset($attr['mobmarginTopBottom']) ? $attr['mobmarginTopBottom'].$unit : '4'.$unit;
			$mobmarginRightLeft = isset($attr['mobmarginRightLeft']) ? $attr['mobmarginRightLeft'].$unit : '4'.$unit;
			$mobpaddingTopBottom = isset($attr['mobpaddingTopBottom']) ? $attr['mobpaddingTopBottom'].$unit : '6'.$unit;
			$mobpaddingRightLeft = isset($attr['mobpaddingRightLeft']) ? $attr['mobpaddingRightLeft'].$unit : '6'.$unit;

			$t_selectors = array();
			$m_selectors = array();
			$selectors   = array();

			$selectors = array(
				' .ive-social-media-parent'	=> array(
					'display'				=> $align
				),
				' .ive-social-media-parent-icon' => array(
					'border-style'			=> ($stylecon ? $borderStyle : 'none'),
					'border-color'			=> ($stylecon ? $borderColor : ''),
					'border-width'			=> ($stylecon ? $borderWidth : 0),
					'border-radius'			=> ($stylecon ? $borderRadius : 0),
					'background-color'		=> ($stylecon ? $background : ''),
					'box-shadow'			=> ($stylecon ? $boxShadow : ''),
					'background-image'		=> ($iconGrad ? $backgroundImage : 'unset'),
					'line-height'			=> 0,
					'cursor'				=> 'pointer',
					'margin'				=> $deskmarginTopBottom.' '.$deskmarginRightLeft
				),
				' .ive-social-media-parent-icon:hover' => array(
					'background-color'		=> ($stylecon ? $backgroundHov : 'none'),
					'background-image'		=> ($iconGrad ? $backgroundImageHov : 'unset'),
				),
				' .ive-social-media-parent-icon i' => array(
					'font-size'				=> $deskiconSize,
					'padding'				=> ($stylecon ? $deskpaddingTopBottom.' '.$deskpaddingRightLeft : '')
				)
			);

			foreach ( $attr['iconsarray']  as $key => $icon ){

				$socialMediaColor = ' .ive-social-media-'.$key;
				$color = isset($icon['color']) ? $icon['color'] : '';
				if($icon['status']){
					$selectors[$socialMediaColor]['color'] = $color;
				}
			}

			if($iconsticky) {
				$selectors[' .ive-social-media-parent'] = array(
					'position' 				=> 'fixed',
					'z-index'				=> 99,
					'display'				=> $align,
					'top'					=> $stickytop,
					'transform'				=> $stickytransform,
					'left'					=> $stickyleft,
					'right'					=> $stickyright,
					'bottom'				=> $stickybottom
				);
			}

			$t_selectors = array(
				' .ive-social-media-parent-icon i' => array(
					'font-size'				=> $tabiconSize,
					'padding'				=> ($stylecon ? $tabpaddingTopBottom.' '.$tabpaddingRightLeft : '')
				),
				' .ive-social-media-parent-icon' => array(
					'margin'				=> $tabmarginTopBottom.' '.$tabmarginRightLeft
				)
			);

			$m_selectors = array(
				' .ive-social-media-parent-icon i' => array(
					'font-size'				=> $mobiconSize,
					'padding'				=> ($stylecon ? $mobpaddingTopBottom.' '.$mobpaddingRightLeft : '')
				),
				' .ive-social-media-parent-icon' => array(
					'margin'				=> $mobmarginTopBottom.' '.$mobmarginRightLeft
				)
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
			);

			return IVE_Helper::generate_all_css( $combined_selectors, '.ive-social-media' . $attr['uniqueID'] );
		}
	}
}

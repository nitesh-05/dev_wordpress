<?php
/**
 * IVE Config.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'IVE_Config' ) ) {

	/**
	 * Class IVE_Config.
	 */
	class IVE_Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {
				self::$block_attributes = array(
                    'ive/ibtana-visual-editorbtn'       => array(
                        'slug'        => '',
                        'title'       => __( 'Button', 'ibtana-visual-editor' ),
                        'description' => __( 'The Button block allows you to add buttons linking to other pages on your site with advanced functionality for changing colors, font size, adding opacity, and more.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'btnCount'            => 1,
                            'uniqueID'            => '',
                            'btns'                => array(
                                array(
                                    'text'              => '',
                                    'link'              => '',
                                    'target'            => '_self',
                                    'desksize'          => 18,
                                    'tabsize'           => 16,
                                    'mobsize'           => 14,
                                    'deskAlign'         => 'center',
                                    'tabAlign'          => 'center',
                                    'mobAlign'          => 'center',
                                    'deskMarginTop'     => 20,
                                    'tabMarginTop'      => 20,
                                    'mobMarginTop'      => 20,
                                    'deskpaddingBT'     => 10,
                                    'deskpaddingLR'     => 10,
                                    'tabpaddingBT'      => 10,
                                    'tabpaddingLR'      => 10,
                                    'mobpaddingBT'      => 10,
                                    'mobpaddingLR'      => 10,
                                    'color'             => '#555555',
                                    'background'        => 'transparent',
                                    'border'            => '#555555',
                                    'borderRadius'      => 3,
                                    'borderWidth'       => 2,
                                    'colorHover'        => '#555555',
                                    'backgroundHover'   => 'transparent',
                                    'borderHover'       => '#444444',
                                    'icon'              => '',
                                    'iconSide'          => 'right',
                                    'iconpaddingleft'   => 5,
                                    'iconpaddingright'  => 5,
                                    'iconHover'         => false,
                                    'iconSvg'           => ''
                                ),
                            ),
                            'letterSpacing'       => 0,
                            'typography'          => '',
                            'googleFont'          => false,
                            'loadGoogleFont'      => true,
                            'fontSubset'          => '',
                            'fontVariant'         => '',
                            'fontWeight'          => 'regular',
                            'fontStyle'           => 'normal',
                            'bgOpacity'           => 1,
                            'bgfirstcolorr'       => '',
                            'bgGradLoc'           => 0,
                            'bgSecondColr'        => '#00B5E2',
                            'bgGradLocSecond'     => 100,
                            'bgGradType'          => 'linear',
                            'bgGradAngle'         => 180,
                            'vBgImgPosition'      => 'center center',
                            'bgBlendMode'         => 'none',
                            'iconDisable'         => true,
                            'deskvisible'         => true,
                            'tabvisible'          => true,
                            'mobvisible'          => true,
                            'hovGradFirstColor'   => '',
                            'hovGradSecondColor'  => '',
                            'iconGrad'            => false,
                            'iconsize'            => array( 12, 12, 12 ),
                            'boxshadowcolor'	  => '',
                            'boxshadowx'		  => '0',
                            'boxshadowY'		  => '0',
                            'boxshadowblur'		  => '0',
                            'boxshadowspread'	  => '0',
                            'boxshadowpos'		  => '',
                            'hoverboxshadowcolor' => '',
                            'hoverboxshadowx'	  => '0',
                            'hoverboxshadowY'	  => '0',
                            'hoverboxshadowblur'  => '0',
                            'hoverboxshadowspread'=> '0',
                            'hoverboxshadowpos'	  => '',
                        ),
                    ),
                    'ive/page-title'       => array(
                        'slug'        => '',
                        'title'       => __( 'Page Title', 'ibtana-visual-editor' ),
                        'description' => __( 'Page Title Block gives you the flexibility to place the title of the page and display it on the web page.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'page_title'          => true,
                            'pagination_title'    => true
                        ),
                    ),
                    'ive/google-map'       => array(
                        'slug'        => '',
                        'title'       => __( 'Google Map', 'ibtana-visual-editor' ),
                        'description' => __( 'Inserting a customizable Google map is now easy with Google Map Block. You can include a google map and enter the location name, address with functionality to zoom in and zoom out.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'block_id'            => '',
                            'uniqueID'            => '',
                            'address'             => 'Nagpur',
                            'height'              => 300,
                            'zoom'                => 12,
                            'blockAlignment'      => 'none',
                            'bgOpacity'           => 1,
                            'bgColor'             => '',
                            'margin_top'          => 35,
                            'margin_bottom'       => 35
                        ),
                    ),
                    'ive/gallery'       => array(
                        'slug'        => '',
                        'title'       => __( 'Ibtana Gallery', 'ibtana-visual-editor' ),
                        'description' => __( 'Show splendid image galleries on your website with this simple drag and drop Galley Block. You can display a beautiful gallery of images on your website.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'uniqueID'            => '',
                            'overlayacolor'       => '#F5353561',
                            'imgopacity'          => 1
                        ),
                    ),
                    'ive/icon'       => array(
                        'slug'        => '',
                        'title'       => __( 'Icon', 'ibtana-visual-editor' ),
                        'description' => __( 'You will find a list of all the Font Awesome icons here. Select any of the icons you want to add to your page and you can customize it by changing the background and color.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'icons'               => array(
                                array(
                                    'icon'              => 'fe_aperture',
                                    'iconSvg'           => 'fa fa-bookmark',
                                    'link'              => '',
                                    'target'            => '_self',
                                    'desksize'          => 50,
                                    'tabsize'           => 35,
                                    'mobsize'           => 20,
                                    'title'             => '',
                                    'deskwidth'         => 'auto',
                                    'deskheight'        => 'auto',
                                    'tabwidth'          => 'auto',
                                    'tabheight'         => 'auto',
                                    'mobwidth'          => 'auto',
                                    'mobheight'         => 'auto',
                                    'color'             => '#444444',
                                    'hoverColor'        => '#eeeeee',
                                    'background'        => '#ffffff',
                                    'hoverBackground'   => '#000000',
                                    'border'            => '#444444',
                                    'hoverBorder'       => '#FF0000',
                                    'borderRadius'      => 0,
                                    'borderWidth'       => 2,
                                    'borderStyle'       => 'none',
                                    'deskpadding'       => 20,
                                    'tabpadding'        => 16,
                                    'mobpadding'        => 12,
                                    'deskpadding2'      => 20,
                                    'tabpadding2'       => 16,
                                    'mobpadding2'       => 12,
                                    'style'             => 'default'
                                ),
                            ),
                            'iconCount'           => 1,
                            'margintb'            => 5,
                            'marginlr'            => 5,
                            'uniqueID'            => '',
                            'deskIconAlignment'   => 'center',
                            'tabIconAlignment'    => 'center',
                            'mobIconAlignment'    => 'center',
                            'iconGrad'            => false,
                            'gradFirstColor'      => '',
                            'gradFirstLoc'        => 0,
                            'gradSecondColor'     => '#00B5E2',
                            'gradSecondLoc'       => 100,
                            'gradType'            => 'linear',
                            'gradAngle'           => 180,
                            'gradRadPos'          => 'center center',
                            'hovGradFirstColor'   => '',
                            'hovGradSecondColor'  => ''
                        ),
                    ),
                    'ive/separator'       => array(
                        'slug'        => '',
                        'title'       => __( 'Separator', 'ibtana-visual-editor' ),
                        'description' => __( 'Want to separate the two content blocks on your page? Separator Block is what you are looking for. It allows you to separate your content with or without hr tag lines.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'uniqueID'            => '',
                            'dividerHeight'       => 1,
                            'dividerWidth'        => 80,
                            'dividerColor'        => '#eeeeee',
                            'dividerOpacity'      => 100,
                            'dividerStyle'        => 'solid',
                            'spacerHeight'        => 6
                        ),
                    ),
                    'ive/progress-bar'       => array(
                        'slug'        => '',
                        'title'       => __( 'Progress Bar', 'ibtana-visual-editor' ),
                        'description' => __( 'Add animated horizontal progress bars to your page and show the percentage progress. You can customize it by changing the colors and values.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'uniqueID'                  => '',
                            'percentage'                => 25,
                            'barThickness'              => 1,
                            'counter'                   => false,
                            'barType'                   => 'linear',
                            'barColor'                  => '#2DB7F5',
                            'titleColor'                => '#111111',
                            'titlebgColor'              => '',
                            'contentColor'              => '#111111',
                            'letterSpacing'             => 0,
                            'typography'                => '',
                            'googleFont'                => false,
                            'loadGoogleFont'            => true,
                            'fontSubset'                => '',
                            'deskfontSize'              => 24,
                            'tabfontSize'               => 20,
                            'mobfontSize'               => 16,
                            'fontVariant'               => '',
                            'fontWeight'                => 'normal',
                            'fontStyle'                 => 'normal',
                            'letterSpacing_cont'        => 0,
                            'typography_cont'           => '',
                            'googleFont_cont'           => false,
                            'loadGoogleFont_cont'       => true,
                            'fontSubset_cont'           => '',
                            'deskfontSize_cont'         => 24,
                            'tabfontSize_cont'          => 20,
                            'mobfontSize_cont'          => 16,
                            'fontVariant_cont'          => '',
                            'fontWeight_cont'           => 'normal',
                            'fontStyle_cont'            => 'normal',
                            'progress_border'           => '#fff',
                            'progress_borderRadius'     => 0,
                            'progress_borderWidth'      => 2,
                            'progress_padding'          => 20,
                            'margin_top'                => 10,
                            'margin_bottom'             => 10
                        ),
                    ),
                    'ive/ive-social-share'       => array(
                        'slug'        => '',
                        'title'       => __( 'Social Media', 'ibtana-visual-editor' ),
                        'description' => __( 'Share your content using different social platforms as Social Share Block includes over 20 social media icons to grow your audience and get more exposure for your brand.', 'ibtana-visual-editor' ),
                        'default'     => true,
                        'attributes'  => array(
                            'uniqueID'                  => '',
                            'alignType'                 => 'horizontal',
                            'deskiconSize'              => 18,
                            'tabiconSize'               => 15,
                            'iconsarray'                => array(
                                array(
                                    'name' =>'fab fa-facebook',
                                    'color' => '#3b5998',
                                    'status' => true,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-instagram',
                                    'color' => '#3f729b',
                                    'status' => true,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-twitter',
                                    'color' => '#00acee',
                                    'status' => true,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-google-plus-g',
                                    'color' => '#db4a39',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-pinterest',
                                    'color' => '#E60023',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-linkedin-in',
                                    'color' => '#0e76a8',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-digg',
                                    'color' => '#000000',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-blogger',
                                    'color' => '#f57d00',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-reddit',
                                    'color' => '#ff4500',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-stumbleupon',
                                    'color' => '#eb4924',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-tumblr',
                                    'color' => '#00405d',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fas fa-envelope',
                                    'color' => '#ea4335',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-get-pocket',
                                    'color' => '#ef4056',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-vk',
                                    'color' => '#45668e',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-odnoklassniki',
                                    'color' => '#ed812b',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-skype',
                                    'color' => '#00aff0',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-telegram',
                                    'color' => '#00405d',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-whatsapp',
                                    'color' => '#43d854',
                                    'status' => true,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-xing',
                                    'color' => '#026466',
                                    'status' => false,
                                    'link' =>'',
                                ),
                                array(
                                    'name' =>'fab fa-youtube',
                                    'color' => '#FF0000',
                                    'status' => true,
                                    'link' =>'',
                                )
                            ),
                            'mobiconSize'               => 12,
                            'background'                => '',
                            'backgroundHov'             => '',
                            'borderColor'               => '',
                            'borderWidth'               => 2,
                            'borderStyle'               => 'none',
                            'shadowColor'               => '',
                            'shadowRightWidth'          => 3,
                            'shadowBottomWidth'         => 3,
                            'style'                     => 'default',
                            'borderRadius'              => 0,
                            'deskpaddingTopBottom'      => 10,
                            'tabpaddingTopBottom'       => 10,
                            'mobpaddingTopBottom'       => 10,
                            'deskpaddingRightLeft'      => 10,
                            'tabpaddingRightLeft'       => 8,
                            'mobpaddingRightLeft'       => 6,
                            'deskmarginTopBottom'       => 8,
                            'tabmarginTopBottom'        => 6,
                            'mobmarginTopBottom'        => 4,
                            'deskmarginRightLeft'       => 8,
                            'tabmarginRightLeft'        => 6,
                            'mobmarginRightLeft'        => 4,
                            'iconsticky'                => false,
                            'stickyposition'            => 'left',
                            'iconGrad'                  => false,
                            'bgfirstcolorr'             => '',
                            'bgGradLoc'                 => 0,
                            'bgSecondColr'              => '',
                            'bgGradLocSecond'           => 100,
                            'bgGradType'                => 'linear',
                            'bgGradAngle'               => 180,
                            'vBgImgPosition'            => 'center center',
                            'hovGradFirstColor'         => '',
                            'hovGradSecondColor'        => ''
                        ),
                    ),
				);
			}
			return self::$block_attributes;
		}
	}
}

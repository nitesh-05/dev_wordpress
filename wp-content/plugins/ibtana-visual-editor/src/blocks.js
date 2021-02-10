/**
 * Gutenberg Blocks
 *
 */
wp.i18n.setLocaleData( { '': {} }, 'ibtana-visual-editor' );

import './blocks/ibtana-visual-editor-btn/block.js';
import './blocks/icon/block.js';
import './blocks/ibtana-visual-editor-heading/block.js';
import './blocks/ive-separator/block.js';
import './blocks/googleMap/block.js';
import './blocks/progress-bar/block.js';
import './blocks/ive-social-share/block.js';
import './blocks/ive-page-title/block.js';
import './blocks/ive-team/block.js';
import './blocks/tabs/block.js';
import './blocks/tab/block.js';
import './blocks/accordion/block.js';
import './blocks/pane/block.js';
import './blocks/ive-shape-divider/block.js';
import './blocks/popup/block.js';
import './blocks/products-carousel/block.js';
import './blocks/countdown/block.js';
import './blocks/ive-gallery/block.js';
import './blocks/slide/block.js';
import './blocks/carouselimage/block.js';
import './blocks/multiblock-slider/block.js';
import './block_recovery/admin.js';
import icons from "./icons";
wp.blocks.updateCategory( "Ibtana Blocks", {	icon: icons.iveblockicon});

wp.data.dispatch( 'core/editor' ).updateEditorSettings( { maxWidth: 2000 } );

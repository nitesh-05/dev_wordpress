var IVE_WIZARD = (function($) {

  var t;
  var current_step = '';
  var step_pointer = '';
  var demo_import_type = '';

  // callbacks from form button clicks.
  var callbacks = {
    do_next_step: function(btn) {
      do_next_step(btn);
    },
    import_free_template: function(btn) {
      $('.ive-wizard-spinner').css('display', 'block');
      var free_tem_slug = document.querySelector('.ive-sidebar-import-button a').getAttribute('ive-template-slug');
      var free_theme_demo = new importFeeThemeDemo(free_tem_slug, 0);
      free_theme_demo.init(btn);
    },
    import_premium_template: function(btn) {
      $('.ive-wizard-spinner').css('display', 'block');
      var premium_tem_slug = document.querySelector('.ive-sidebar-import-button a').getAttribute('ive-template-slug');
      var premium_theme_demo = new importFeeThemeDemo(premium_tem_slug, 1);
      premium_theme_demo.init(btn);
    }
  };

  function ive_window_loaded() {
    // Get all steps and find the biggest
    // Set all steps to same height
    var maxHeight = 0;

    $('.ibtana-wizard-content-menu li.step').each(function(index) {
      $(this).attr('data-height', $(this).innerHeight());
      if ($(this).innerHeight() > maxHeight) {
        maxHeight = $(this).innerHeight();
      }
    });

    $('.ibtana-wizard-content-menu li .detail').each(function(index) {
      $(this).attr('data-height', $(this).innerHeight());
      $(this).addClass('scale-down');
    });


    $('.ibtana-wizard-content-menu li.step').css('height', '100%');
    $('.ibtana-wizard-content-menu li.step:first-child').addClass('active-step');

    $('.whizzie-wrap').addClass('loaded');

    // init button clicks:
    $('.ive-do-it').on('click', function(e) {
      e.preventDefault();
      step_pointer = $(this).data('step');
      current_step = $('.step-' + $(this).data('step'));
      $('.whizzie-wrap').addClass('spinning');
      if ($(this).data('callback') && typeof callbacks[$(this).data('callback')] != 'undefined') {
        // we have to process a callback before continue with form submission
        callbacks[$(this).data('callback')](this);
        return false;
      } else {
        return true;
      }
    });
  }

  function do_next_step(btn) {
    $('.nav-step-ive-wizard-second-step').attr('data-enable', 1);
    current_step.removeClass('active-step');
    $('.nav-step-' + step_pointer).removeClass('active-step');
    current_step.addClass('done-step');
    $('.nav-step-' + step_pointer).addClass('done-step');
    current_step.fadeOut(500, function() {
      current_step = current_step.next();
      step_pointer = current_step.data('step');
      current_step.fadeIn();
      current_step.addClass('active-step');
      $('.nav-step-' + step_pointer).addClass('active-step');
      $('.whizzie-wrap').removeClass('spinning');
    });
  }

  function importFeeThemeDemo(free_template_slug, is_pro_or_free) {
    var demo_action = '';
    var params = {
      action: 'ive_setup_free_demo',
      slug: free_template_slug,
      wpnonce: admin_templates_params.wpnonce,
      is_pro_or_free: is_pro_or_free
    };

    function ive_import_template() {
      jQuery.post(
        admin_templates_params.ajaxurl,
        params,
        ajax_callback).fail(ajax_callback);
    }
    return {
      init: function(btn) {
        ajax_callback = function(response) {
          var obj = JSON.parse(response);
          if (obj.home_page_url != "") {
            location.href = obj.home_page_url;
          }
          $('.ive-wizard-spinner').css('display', 'none');
          do_next_step();
        }
        ive_import_template();
      }
    }
  }

  return {
    init: function() {
      t = this;
      $(ive_window_loaded);
    },
    callback: function(func) {}
  }

})(jQuery);

IVE_WIZARD.init();

jQuery(document).ready(function() {

  var current_menu = '';
  var current_icon_step = '';

  //---------- Ibtana Wizard Templates --------
  jQuery('.ibtana-wizard-first-step-content .wz-spinner-wrap').css('display', 'block');
  var data_post = {
    "admin_user_ibtana_license_key": admin_templates_params.ive_license_key,
    "domain": admin_templates_params.ive_domain_name
  };
  jQuery.ajax({
    method: "POST",
    url: admin_templates_params.IBTANA_LICENSE_API_ENDPOINT + "get_modal_contents",
    data: JSON.stringify(data_post),
    dataType: 'json',
    contentType: 'application/json',
  }).done(function(data) {

    var first = admin_templates_params.themedomain;
    data.data.free.sort(function(x,y){
      return x.domain == first ? -1 : y.domain == first ? 1 : 0;
    });

    var free_data = data.data.free;
    for (var i = 0; i < free_data.length; i++) {
      var free_product = free_data[i];
      var active_class = free_product.domain == first ? 'card-theme-active' : '';

      var card_content = `
            <div class="o-products-col `+active_class+`">
                <div class="o-products-image">
                    <img src="` + free_product.image + `">
                    <div>
                        <a class="free-template-import-btn" href="javascript:void(0);" ive-template-demo="` + free_product.demo_url + `" ive-template-image="` + free_product.image + `" ive-template-title="` + free_product.name + `" ive-template-slug="` + free_product.slug + `" ive-template-permalink="` + free_product.permalink + `" ive-template-description="` + free_product.description + `">Preview</a>
                    </div>
                    <div class="template-grid-overlay"></div>
                </div>
                <h3>` + free_product.name + `</h3>
            </div>`;
      jQuery('.ibtana-wizard-first-step-content .ibtaba-wizard-product-row').append(card_content);
    }
    if (data.data.free.length == 0) {
      jQuery('.ibtana-wizard-first-step-content h3.ive-coming-soon').css('display', 'block');
    } else {
      jQuery('.ibtana-wizard-first-step-content h3.ive-coming-soon').css('display', 'none');
    }
    jQuery('.ibtana-wizard-first-step-content .wz-spinner-wrap').css('display', 'none');
  });

  jQuery('.ibtana-wizard-button-wrapper .button-wrap a').click(function() {
    jQuery('#ibtana-free-templates .ibtaba-wizard-product-row .o-products-col').remove();
    jQuery('.ibtana-wizard-content-menu li').removeClass('active-step');
    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-second-step ').addClass('active-step');

    jQuery('.ibtana-wizard-button-wrapper .button-wrap a').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.step-ive-wizard-second-step .wz-spinner-wrap').css('display', 'block');
    jQuery('.ibtana-wizard-content-menu .step-ive-wizard-three-step').css('display', 'none');
    var current_button = jQuery(this).attr('class');
    var data_post = {
      "admin_user_ibtana_license_key": admin_templates_params.ive_license_key,
      "domain": admin_templates_params.ive_domain_name
    };
    jQuery.ajax({
      method: "POST",
      url: admin_templates_params.IBTANA_LICENSE_API_ENDPOINT + "get_modal_contents",
      data: JSON.stringify(data_post),
      dataType: 'json',
      contentType: 'application/json',
    }).done(function(data) {
      console.log('data', data);

      var first = admin_templates_params.themedomain;
      data.data.free.sort(function(x,y){
        return x.domain == first ? -1 : y.domain == first ? 1 : 0;
      });

      if (current_button.indexOf('ibtana-free-template-button') != -1) {
        var free_data = data.data.free;
        for (var i = 0; i < free_data.length; i++) {
          var free_product = free_data[i];
          var active_class = free_product.domain == first ? 'card-theme-active' : '';

          var card_content = `
                      <div class="o-products-col `+active_class+`">
                        <div class="o-products-image">
                            <img src="` + free_product.image + `">
                            <div>
                                <a class="free-template-import-btn" href="javascript:void(0);" ive-template-demo="` + free_product.demo_url + `" ive-template-image="` + free_product.image + `" ive-template-title="` + free_product.name + `" ive-template-slug="` + free_product.slug + `" ive-template-permalink="` + free_product.permalink + `" ive-template-description="` + free_product.description + `">Preview</a>
                            </div>
                            <div class="template-grid-overlay"></div>
                        </div>
                        <h3>` + free_product.name + `</h3>
                      </div>`;
          jQuery('#ibtana-free-templates .ibtaba-wizard-product-row').append(card_content);
        }
        jQuery('.wz-spinner-wrap').css('display', 'none');
        if (data.data.free.length == 0) {
          jQuery('#ibtana-free-templates h3.ive-coming-soon').show();
          jQuery('#ibtana-free-templates .social-theme-search').hide();
        } else {
          jQuery('#ibtana-free-templates h3.ive-coming-soon').hide();
          jQuery('#ibtana-free-templates .social-theme-search').show();
        }
      } else {

        var premium_data = data.data.premium;
        for (var i = 0; i < premium_data.length; i++) {
          var premium_product = premium_data[i];

          var premium_product_title = premium_product.name;

          var premium_product_description = '';
          if (premium_product.description) {
            premium_product_description = premium_product.description;
          }

          var premium_product_demo_url = '';
          if (premium_product.demo_url) {
            premium_product_demo_url = premium_product.demo_url;
          }

          var premium_product_permalink = '';
          if (premium_product.permalink) {
            premium_product_permalink = premium_product.permalink;
          }

          var card_content = `
                      <div class="o-products-col" data-id="` + premium_product.id + `">
                        <div class="o-products-image">
                            <img src="` + premium_product.image + `">
                            <div>
                                <a class="premium-template-import-btn" href="javascript:void(0);" ive-template-demo="` + premium_product_demo_url + `" ive-template-image="` + premium_product.image + `" ive-template-title="` + premium_product_title + `" ive-template-demo-url="` + premium_product_demo_url + `" ive-template-permalink="` + premium_product_permalink + `" ive-is-key-valid="` + data.data.is_key_valid + `" ive-template-description="` + premium_product_description + `" ive-template-slug="` + premium_product.slug + `">Preview</a>
                            </div>
                            <div class="template-grid-overlay"></div>
                        </div>
                        <h3>` + premium_product_title + `</h3>
                      </div>`;
          jQuery('#ibtana-free-templates .ibtaba-wizard-product-row').append(card_content);

        }
        jQuery('.wz-spinner-wrap').css('display', 'none');
        if (data.data.premium.length == 0) {
          jQuery('#ibtana-free-templates h3.ive-coming-soon').show();
          jQuery('#ibtana-free-templates .social-theme-search').hide();
        } else {
          jQuery('#ibtana-free-templates h3.ive-coming-soon').hide();
          jQuery('#ibtana-free-templates .social-theme-search').show();
        }
      }
    });
  });

  /* ----------  Demo Import Step ------ */

  jQuery('.ibtaba-wizard-product-row').on('click', '.free-template-import-btn', function() {

    var demo_url = jQuery(this).attr('ive-template-demo');
    var demo_image = jQuery(this).attr('ive-template-image');
    var demo_title = jQuery(this).attr('ive-template-title');
    var demo_slug = jQuery(this).attr('ive-template-slug');
    var demo_permalink = jQuery(this).attr('ive-template-permalink');
    var demo_description = jQuery(this).attr('ive-template-description');
    jQuery('.ive-sidebar-content a.ive-plugin-btn').show();
    jQuery('.ive-template-import-sidebar a.ive-import-demo-btn').show();

    jQuery('.ive-sidebar-import-button a').attr('data-callback', 'import_free_template');

    jQuery('.ive-template-import-sidebar .ive-sidebar-content img').attr('src', demo_image);
    jQuery('.ive-sidebar-content h4').text(demo_title);
    jQuery('.ive-sidebar-import-button a').attr('ive-template-slug', demo_slug);
    jQuery('.step-ive-wizard-three-step h3.wizard-main-title').text(demo_title);
    jQuery('.ive-template-demo-sidebar iframe').attr('src', demo_url);
    jQuery('.ive-template-import-sidebar .ive-sidebar-content p').text(demo_description);

    jQuery('.ive-template-import-sidebar').addClass('free-template-import-sidebar');

    jQuery('.nav-step-ive-wizard-three-step').attr('data-enable', 1);
    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-first-step').css('display', 'none');
    jQuery('.ibtana-wizard-content-menu li').removeClass('active-step');
    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-second-step').css('display', 'none');
    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-three-step').css('display', 'block');

    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-three-step').addClass('active-step');

    jQuery('.ive-sidebar-content a.ive-plugin-btn').attr('href', demo_permalink);
    jQuery('.ive-sidebar-content a.ive-plugin-btn').text('Go Pro');


  });

  jQuery('.ibtaba-wizard-product-row').on('click', '.premium-template-import-btn', function() {

    var demo_url = jQuery(this).attr('ive-template-demo-url');
    var demo_image = jQuery(this).attr('ive-template-image');
    var demo_title = jQuery(this).attr('ive-template-title');
    var demo_slug = jQuery(this).attr('ive-template-slug');
    var demo_permalink = jQuery(this).attr('ive-template-permalink');
    var is_key_valid = jQuery(this).attr('ive-is-key-valid');
    var demo_description = jQuery(this).attr('ive-template-description');

    if (is_key_valid == 0) {
      jQuery('.ive-sidebar-content a.ive-plugin-btn').show();
      jQuery('.ive-template-import-sidebar a.ive-import-demo-btn').hide();

    } else {
      jQuery('.ive-sidebar-content a.ive-plugin-btn').hide();
      jQuery('.ive-template-import-sidebar a.ive-import-demo-btn').show();
    }
    jQuery('.ive-sidebar-content a.ive-plugin-btn').attr('href', demo_permalink);
    jQuery('.ive-sidebar-content a.ive-plugin-btn').text('Buy Now');


    jQuery('.ive-sidebar-import-button a').attr('data-callback', 'import_premium_template');
    jQuery('.ive-template-demo-sidebar iframe').attr('src', demo_url);
    jQuery('.ive-template-import-sidebar .ive-sidebar-content img').attr('src', demo_image);

    jQuery('.ive-sidebar-content h4').text(demo_title);
    jQuery('.ive-sidebar-import-button a').attr('ive-template-slug', demo_slug);
    jQuery('.step-ive-wizard-three-step h3.wizard-main-title').text(demo_title);

    jQuery('.ive-template-import-sidebar .ive-sidebar-content .ive-template-text p').text(demo_description);

    jQuery('.ive-template-import-sidebar').removeClass('free-template-import-sidebar');
    jQuery('.nav-step-ive-wizard-three-step').attr('data-enable', 1);
    //var ive_template_demo = jQuery(this).attr('ive-template-demo');
    jQuery('.ibtana-wizard-content-menu li').removeClass('active-step');
    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-second-step').css('display', 'none');
    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-three-step').css('display', 'block');

    jQuery('.ibtana-wizard-content-menu li.step-ive-wizard-three-step').addClass('active-step');


  });

  // --------- Search --------
  jQuery(".ive-admin-wizard-search").on("keyup", function() {
    var value = jQuery(this).val().toLowerCase();
    jQuery('.ibtana-free-templates .o-products-col').hide();
    var pro_cards = jQuery('.ibtana-free-templates .o-products-col');
    var result_count = 0;
    jQuery.each(pro_cards, function(key, pro_card) {
      var pro_card_text = jQuery(pro_card).find('h3').text().toLowerCase();
      if (pro_card_text.indexOf(value) !== -1) {
        jQuery(pro_card).show();
        ++result_count;
      }
    });
    if (!result_count) {
      jQuery('.ibtana-wizard-no-result').show();
    } else {
      jQuery('.ibtana-wizard-no-result').hide();
    }
  });

  /* --------- Responsive Template View --------- */

  jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons .dashicons-desktop').css('color','#016194');
  jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons .dashicons-desktop').click(function() {
    jQuery('.ive-template-demo-sidebar iframe').css("width", "100%");
    jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons ul li span.dashicons').css('color','#222');
    jQuery(this).css('color','#016194');
  });

  jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons .dashicons-tablet').click(function() {
    jQuery('.ive-template-demo-sidebar iframe').css("width", "772px");
    jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons ul li span.dashicons').css('color','#222');
    jQuery(this).css('color','#016194');
  });

  jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons .dashicons-smartphone').click(function() {
    jQuery('.ive-template-demo-sidebar iframe').css("width", "356px");
    jQuery('.ibtana-template-import-steps .ive-sidebar-view-icons ul li span.dashicons').css('color','#222');
    jQuery(this).css('color','#016194');
  });

  /* --------- Collapse Template Iframe -------- */
  var template_demo_width = "yes";
  jQuery('.ibtana-template-import-steps .dashicons-admin-collapse').click(function() {
    if (template_demo_width == "yes") {
      jQuery('.ibtana-template-import-steps .ive-template-import-sidebar').css({
        "width": "0",
        "opacity": "0",
        "flex": "0 0 0"
      });
      jQuery('.ive-template-demo-sidebar').css({
        "width": "100%",
        "flex": "0 0 100%"
      });
      template_demo_width = "no";
    } else {
      jQuery('.ibtana-template-import-steps .ive-template-import-sidebar').css({
        "width": "26%",
        "opacity": "1",
        "flex": "0 0 26%"
      });
      jQuery('.ive-template-demo-sidebar').css({
        "width": "73%",
        "flex": "0 0 73%"
      });
      template_demo_width = "yes";
    }
  });

  /* ------ Css File Generation ------*/
  jQuery('.ive-file-generation').click(function() {
    var btnVal = jQuery(this).attr('data-value');
    var data = {
      value : btnVal,
      action: "ive_file_generation",
      nonce: admin_templates_params.wpnonce,
    }
    jQuery.ajax({
      url: admin_templates_params.ajaxurl,
      method: "POST",
      data: data,
    }).done(function(data) {
      location.reload();
    });
  });
});

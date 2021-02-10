(function($) {

  function show_hide_modal_button() {
    var togglebtn = document.querySelector(".components-panel__body-toggle");
    if (togglebtn !== null) {
      var isbtntrue = togglebtn.getAttribute("aria-expanded");
      if (document.getElementById("ibtana-modal-btn") !== null) {
        if (isbtntrue == 'false') {
          document.getElementById("ibtana-modal-btn").style.display = "none";
        }else{
          document.getElementById("ibtana-modal-btn").style.display = "block";
        }
      }
    }
  }

  function AppendOpenModalBtn() {
    var myspan = $('.edit-post-post-status');
    if(myspan.length) {
      myspan.append(
        `<div class="components-panel__row">
          <button id="ibtana-modal-btn" class="btn btn-success" type="button">
            Ibtana Blocks Templates
          </button>
        </div>`
      );
    }

    if (!$('.modal_btn_svg_icon').length) {
      var modal_btn_svg_icon = `<div class="modal_btn_svg_icon"><svg id="Layer_1" data-name="Layer 1" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.newcls-1{fill:#0809F0;}.newcls-2{fill:#fff;}.newcls-3{fill:#0809F0;}.newcls-4{fill:#fffdfd;}</style></defs><title>Ibtana Icon</title><circle class="newcls-1" cx="12" cy="11.97" r="11.97"/><rect class="newcls-2" x="4.88" y="4.88" width="6.8" height="6.8" rx="0.57"/><rect class="newcls-2" x="12.32" y="4.88" width="6.8" height="6.8" rx="0.57"/><rect class="newcls-2" x="4.88" y="12.26" width="6.8" height="6.8" rx="0.57"/><rect class="newcls-2" x="12.32" y="12.26" width="6.8" height="6.8" rx="0.57"/><path class="newcls-3" d="M17.16,14.22v2.89a.39.39,0,1,1-.77,0V16.05H15.06v1.06a.4.4,0,0,1-.39.39.39.39,0,0,1-.38-.39V14.22a.38.38,0,0,1,.38-.38.35.35,0,0,1,.27.11.38.38,0,0,1,.12.27v1.06h1.33V14.22a.38.38,0,0,1,.38-.38.39.39,0,0,1,.28.11A.37.37,0,0,1,17.16,14.22Z"/><rect class="newcls-3" x="6.03" y="14.52" width="4.49" height="2.3" rx="1.15"/><circle class="newcls-4" cx="7.19" cy="15.67" r="0.92"/><path class="newcls-3" d="M6.56,7.54V10H8.8V7.54Zm1.12.62a.28.28,0,1,1-.28.28A.27.27,0,0,1,7.68,8.16Zm.56,1.21H7.12v0a.56.56,0,0,1,1.12,0Z"/><rect class="newcls-3" x="8.88" y="9.56" width="1.11" height="0.43"/><rect class="newcls-3" x="8.88" y="8.55" width="1.11" height="0.43"/><rect class="newcls-3" x="8.88" y="7.98" width="1.11" height="0.43"/><rect class="newcls-3" x="8.88" y="9.13" width="1.11" height="0.28"/><rect class="newcls-3" x="8.88" y="7.54" width="1.11" height="0.3"/><rect class="newcls-3" x="6.56" y="6.57" width="2.32" height="0.75" rx="0.26"/><path class="newcls-3" d="M9.17,6.72a.35.35,0,0,0,0,.38.36.36,0,0,0,.45.09l.21.2a.09.09,0,0,0,.13,0h0a.08.08,0,0,0,0-.12l-.21-.2a.34.34,0,0,0-.58-.34ZM9.59,7a.18.18,0,0,1-.27,0,.19.19,0,0,1,0-.27.19.19,0,0,1,.28,0A.18.18,0,0,1,9.59,7Z"/><rect class="newcls-3" x="14.82" y="7.01" width="2.69" height="0.66"/><rect class="newcls-3" x="14.82" y="7.95" width="2.69" height="0.66"/><rect class="newcls-3" x="14.82" y="8.89" width="2.69" height="0.66"/><circle class="newcls-3" cx="14.27" cy="7.34" r="0.33"/><circle class="newcls-3" cx="14.27" cy="8.28" r="0.33"/><circle class="newcls-3" cx="14.27" cy="9.22" r="0.33"/></svg><span class="modal-btn-svg-text-span">Templates</span></div>`;
      $('.edit-post-header__toolbar').append(modal_btn_svg_icon);
    }
  }


  window.onclick = function(event) {
    var myUpcomingModal = document.getElementById("myUpcomingModal");
    if (event.target == myUpcomingModal) {
      myUpcomingModal.style.display = "none";
    }
    if(!document.querySelector("#ibtana-modal-btn")) {
      AppendOpenModalBtn();
    }
    show_hide_modal_button();
  }

  window.onload = function() {
    var active_theme = ibtana_visual_editor_modal_js.active_theme_text_domain;

    var ibtana_license_api_endpoint = ibtana_visual_editor_modal_js.IBTANA_LICENSE_API_ENDPOINT;

    var svgButtonInterval = setInterval(setSVGButton, 1000);
    function setSVGButton() {
      if ($('.edit-post-header__toolbar').length !== 0) {
        AppendOpenModalBtn();
        show_hide_modal_button();
        clearInterval(svgButtonInterval);
      }
    }

    var qtModal = document.createElement("div");
    qtModal.setAttribute("id", "myUpcomingModal");
    qtModal.setAttribute("class", "UpcomingModal");

    var themedomain = ibtana_visual_editor_modal_js.themedomain;
    var theme_slug = themedomain.replaceAll("-", "_");
    var adminUrl = ibtana_visual_editor_modal_js.adminUrl;
    var page_id = ibtana_visual_editor_modal_js.page_id;


    var html = `<div class="UpcomingModal-content"><span class="CloseUpcomingModal">×</span>
    	<div class="content-modal">
        <div class="ibtana-modal-head">
      		<div class="ibtana-row">
            <div class="ibtana-modal-logo">
              <h2>
                <img src="`+ibtana_visual_editor_modal_js.plugin_url+`/dist/images/admin-wizard/adminIcon.png">
                VW Themes
              </h2>
            </div>
        		<div class="tab-parent-head">
              <ul>
                <li>
                  <button class="tablinks active" data-tab-head="Templates"><span class="dashicons dashicons-clipboard"></span>Templates</button>
                </li>
                <li>
                  <button class="tablinks" data-tab-head="InnerPages"><span class="dashicons dashicons-clipboard"></span>Inner Pages</button>
                </li>
                <li style="display:none;">
                  <button class="tablinks" data-tab-head="WooPages">
                    <span class="dashicons dashicons-clipboard"></span>
                    WooCommerce Pages
                  </button>
                </li>
              </ul>
        		</div>
          </div>
        </div>

        <div class="modal-content-reload-svg">
          <button id="reload--modal--contents">
            <span class="dashicons dashicons-update-alt"></span>
          </button>
          <input type="text" class="search-text" placeholder="Search for names..">
        </div>

        <div class="template-buy-banner">
          <span>Get All Our Premium Themes In Our WP Theme Bundle</span>
          <a href="`+ibtana_visual_editor_modal_js.IBTANA_THEME_URL+`premium/theme-bundle/" target="_blank">BUY NOW</a>
        </div>

    		<div id="Templates" class="tabcontent">

    			<div class="inner-tab-content">
            <ul>
              <li class="theme-tab-list-two active" data-template="premium-template"><span>Premium</span></li>
              <li class="theme-tab-list-two" data-template="free-template"><span>Free</span></li>
            </ul>
          </div>

          <div id="premium-template" class="ibtana-theme-block" data-template-div="template">

            <div class="sub-category-wrapper">
              <div class="ibtana-column-one sub-cats">

              </div>
              <div class="ibtana-column-two">
                <div class="ibtana-row themes-box-wrap">

                </div>
              </div>
            </div>
          </div>

          <div id="free-template" class="ibtana-theme-block">
            <div class="ibtana-row themes-box-wrap">

            </div>
          </div>

    		</div>

        <div id="InnerPages" class="tabcontent">
          <div class="inner-tab-content">
            <ul>
              <li class="theme-tab-list-two active" data-template-tab="coming-soon-tab"><span>Coming Soon</span></li>
            </ul>
          </div>

          <div class="inner-pages-divs-wrapper">
            <div class="ibtana-theme-block" data-template-div="coming-soon-tab">
              <div class="ibtana-row themes-box-wrap">
                <h3 class="ive-coming-soon">Coming Soon...</h3>
              </div>
            </div>
          </div>
        </div>

        <div id="WooPages" class="tabcontent" style="display:none;">
          <div class="inner-tab-content">
            <ul>
            </ul>
          </div>
          <div class="inner-pages-divs-wrapper">
            <div class="ibtana-theme-block" data-template-div="coming-soon-tab">
              <div class="ibtana-row themes-box-wrap">
                <h3 class="ive-coming-soon">Coming Soon...</h3>
              </div>
            </div>
          </div>
        </div>

    	</div>

    </div>
    <div class="ibtana--modal--loader">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#44a745" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/>
      </circle>
      </svg>
    </div>`;
    document.querySelector('body').appendChild(qtModal);
    qtModal.innerHTML = html;

    get_modal_contents();

    // On click free premium template tab
    $('#Templates .theme-tab-list-two').on('click',function() {
      var theme = $(this).attr('data-template');
      $('#Templates .theme-tab-list-two').removeClass('active');
      $(this).addClass('active');
      var mainTabId = $(this).closest('.tabcontent').attr('id');
      $('#' + mainTabId).find('.ibtana-theme-block').hide();
      $('#Templates').find('#'+theme).show();
    });
    // On click free premium template tab END

    // On Click InnerPages Inner Tabs
    $('#InnerPages').on('click', '.theme-tab-list-two', function() {
      $('#InnerPages .theme-tab-list-two').removeClass('active');
      $(this).addClass('active');
      var inner_tab_name = $(this).attr('data-template-tab');
      $('#InnerPages .ibtana-theme-block').hide();
      $('#InnerPages .ibtana-theme-block[data-template-div="'+inner_tab_name+'"]').show();
    });
    // On Click InnerPages Inner Tabs END

    $('.tablinks').on('click',function() {
      var mainTab = $(this).attr('data-tab-head');
      $('.tablinks').removeClass('active');
      $(this).addClass('active');

      $('.tabcontent').hide();
      $('#'+mainTab).show();
    });

    // Show Modal
    $(document.body).on('click', '#ibtana-modal-btn, .modal_btn_svg_icon', function() {
      $('#myUpcomingModal').show();
    });
    // Show Modal END

    // Hide modal
    $(document.body).on('click', '.CloseUpcomingModal', function() {
      $('#myUpcomingModal').hide();
    });
    // Hide modal END

    // On click subcategory
    $('#premium-template .sub-cats').on('click', '.sub-cat-button', function() {
      $('.sub-category-wrapper .sub-cat-button').removeClass('active');
      $(this).addClass("active");
      if ($(this).index() === 0) {
        $('#premium-template .ibtana-row.themes-box-wrap [data-id]').show();
      } else {
        var data_ids = $(this).attr('data-ids');
        var id_arr = data_ids.split(',');
        $('#premium-template .ibtana-row.themes-box-wrap [data-id]').hide();
        for (var i = 0; i < id_arr.length; i++) {
          var single_id = id_arr[i];
          $('#premium-template .ibtana-row.themes-box-wrap [data-id="'+single_id+'"]').show();
        }
      }
    });
    // On click subcategory END

    // Search text
    $('.search-text').on('input', function() {
      var search_keyword = $(this).val().toLowerCase();
      var active_sub_cat = $('#premium-template .sub-cat-button.active');
      var visible_wrapper = $('.content-modal .ibtana-row.themes-box-wrap:visible');
      if (active_sub_cat.length != 0) {
        var sub_cat_pro_ids = active_sub_cat.attr('data-ids');
        var sub_cat_arr_ids = sub_cat_pro_ids.split(',');
        $('#premium-template [data-id]').hide();
        for (var i = 0; i < sub_cat_arr_ids.length; i++) {
          var sub_cat_pro_id = sub_cat_arr_ids[i];
          var pro_card = $('#premium-template [data-id='+sub_cat_pro_id+']');
          var pro_card_text = pro_card.find('h2').text().toLowerCase();
          if (pro_card_text.indexOf(search_keyword) !== -1) {
            pro_card.show();
          }
        }
      } else {
        visible_wrapper.find('.ibtana--card').hide();
        var pro_cards = visible_wrapper.find('.ibtana--card');
        $.each(pro_cards, function(key, pro_card) {
          pro_card_text = $(pro_card).find('h2').text().toLowerCase();
          if (pro_card_text.indexOf(search_keyword) !== -1) {
            $(pro_card).show();
          }
        });
      }
    });
    // Search text END

    // On click import json from premium theme
    $('#Templates').on('click', '#premium-template .import_json_from_premium_theme', function() {
      var page_id = ibtana_visual_editor_modal_js.page_id;
      var site_url = ibtana_visual_editor_modal_js.site_url;
      var active_theme = ibtana_visual_editor_modal_js.active_theme_text_domain;
      $('.ibtana--modal--loader').show();
      $.ajax({
        method: "GET",
        dataType: 'json',
        url: window.wpApiSettings.root + active_theme + "/v1/importJson?page_id="+page_id,
      }).done(function( data ) {
        var postid = data.msg;
        window.location.href = site_url +"/wp-admin/post.php?post="+postid+"&action=edit";
      });
    });

    // On click json import for premium template
    $('#Templates').on('click', '#free-template .import_free, #premium-template .import_premium', function() {
      var template_slug   = $(this).attr('data-theme-slug');
      var template_domain = $(this).attr('data-text-domain');
      if ($(this).hasClass('import_free')) {
        ImportFreeTemplate(template_slug);
      } else if ($(this).hasClass('import_premium')) {
        importPremiumTemplate(template_slug, 'template');
      }
    });
    // On click json import for premium template END

    // InnerPage Import
    $('#InnerPages').on('click', '.import_free', function() {
      var template_slug   = $(this).attr('data-theme-slug');
      console.log('template_slug', template_slug);
      var $page_template_type_div = $(this).closest('.ibtana-theme-block');
      var page_template_type = $page_template_type_div.attr('data-template-div');
      console.log('page_template_type', page_template_type);
      importPremiumTemplate(template_slug, page_template_type);
    });
    // InnerPage Import END

    function ImportFreeTemplate(template_slug) {
      var post_data = {
        "template_slug":      template_slug,
        "page_template_type": 'template'
      };
      $('.ibtana--modal--loader').show();
      $.ajax({
        method: "POST",
        url: ibtana_license_api_endpoint + "get_template",
        data: JSON.stringify(post_data),
        dataType: 'json',
        contentType: 'application/json',
      }).done(function( data ) {
        $('.ibtana--modal--loader').hide();
        if (data.data === null) {
          alert(data.msg);
        } else {
          var theme_json = data.data;
          var page_id = ibtana_visual_editor_modal_js.page_id;
          var path = ibtana_visual_editor_modal_js.path;
          var rest_url = ibtana_visual_editor_modal_js.rest_url;
          var data = {
            'action': 'import_template',
            'theme_json': theme_json
          };
          $('.ibtana--modal--loader').show();
          jQuery.post(ibtana_visual_editor_modal_js.adminAjax + "?page_id=" + page_id, data, function(response) {
            $('.ibtana--modal--loader').hide();
            $('#myUpcomingModal').hide();
            var response = JSON.parse(response);
            window.location.href = response.redirect_uri;
          });
        }
      });
    }

    function importPremiumTemplate(template_slug, page_template_type = '') {
      var admin_user_ibtana_license_key = ibtana_visual_editor_modal_js.admin_user_ibtana_license_key;
      var site_url = ibtana_visual_editor_modal_js.site_url;
      var rest_url = ibtana_visual_editor_modal_js.rest_url;

      var post_data = {
        "domain":             site_url,
        "key":                admin_user_ibtana_license_key,
        "template_slug":      template_slug,
        "page_template_type": page_template_type
      };

      if (admin_user_ibtana_license_key != '') {
        $('.ibtana--modal--loader').show();
        $.ajax({
          method: "POST",
          url: ibtana_license_api_endpoint + "get_template",
          data: JSON.stringify(post_data),
          dataType: 'json',
          contentType: 'application/json',
        }).done(function( data ) {
          $('.ibtana--modal--loader').hide();
          if (data.data === null) {
            alert(data.msg);
          } else {
            var theme_json = data.data;
            var page_id = ibtana_visual_editor_modal_js.page_id;
            var path = ibtana_visual_editor_modal_js.path;
            var data  = {
              'action':     'import_template',
              'theme_json': theme_json
            };
            jQuery.post(ibtana_visual_editor_modal_js.adminAjax + "?page_id=" + page_id, data, function(response) {
              $('.ibtana--modal--loader').hide();
              $('#myUpcomingModal').hide();
              var response = JSON.parse(response);
              window.location.href = response.redirect_uri;
            });
          }
        });
      } else {
        alert('Please Enter License key first');
      }
    }

    $('#reload--modal--contents').on('click', function() {
      $('.search-text').val('');
      get_modal_contents();
    });

    function get_modal_contents() {
      var data_post = {
        "active_theme_text_domain": active_theme
      };

      if (ibtana_visual_editor_modal_js.admin_user_ibtana_license_key) {
        var admin_user_ibtana_license_key = ibtana_visual_editor_modal_js.admin_user_ibtana_license_key;
        data_post['admin_user_ibtana_license_key'] = admin_user_ibtana_license_key;
        data_post['domain'] = ibtana_visual_editor_modal_js.site_url;
      }
      $('.ibtana--modal--loader').show();
      $( ".content-modal" ).addClass( "content-modal-show" );
      $.ajax({
        method: "POST",
        url: ibtana_license_api_endpoint + "get_modal_contents",
        data: JSON.stringify(data_post),
        dataType: 'json',
        contentType: 'application/json',
      }).done(function( data ) {

        console.log('data', data);
        var first = ibtana_visual_editor_modal_js.active_theme_text_domain;
        data.data.free.sort(function(x,y){
          return x.domain == first ? -1 : y.domain == first ? 1 : 0;
        });

        var theme_text_domains_obj = data.data.theme_text_domains;

        var is_ibtana_theme = false;
        $.each(theme_text_domains_obj, function( key, ibtana_theme ) {
          if (ibtana_theme === active_theme) {
            is_ibtana_theme = true;
          }
        });

        var is_key_valid = data.data.is_key_valid;

        $('.ibtana--modal--loader').hide();
        $( ".content-modal" ).removeClass( "content-modal-show" );
        // Free cards
        var free_data = data.data.free;
        $('#free-template .ibtana-row.themes-box-wrap').empty();
        for (var i = 0; i < free_data.length; i++) {
          var free_data_single = free_data[i];

          var free_card_content = ``;
          if (active_theme === free_data_single.domain) {
            free_card_content += `<div class="ibtana-column-four ibtana--card card-theme-active">`;
          } else {
            free_card_content += `<div class="ibtana-column-four ibtana--card">`;
          }

          free_card_content += `<div class="blog-content-inner">
              <div class="blog-content-img-inner free-content-inner">
                <img class="blog-content-inner-image" src="` + free_data_single.image + `">
              </div>
              <h2>`+free_data_single.name+`</h2>
              <a class="import_free blog-content-btn-inner" data-text-domain="`+free_data_single.domain+`" data-theme-slug="`+ free_data_single.slug +`">
              IMPORT
              <span class="dashicons dashicons-download">
              </span>
              </a>
            </div>
          </div>`;
          $('#free-template .ibtana-row.themes-box-wrap').append(free_card_content);
        }
        if ((0==free_data.length) && (0==$('#free-template .ive-coming-soon').length)) {
          $('#free-template .ibtana-row.themes-box-wrap').append(
            '<h3 class="ive-coming-soon">Coming Soon...</h3>'
          );
        }
        // Free cards END

        if (!is_key_valid) {
          if ('sub' in data.data) {
            var subcategories_data = data.data.sub;
            var sub_cat_html = ``;
            for (var i = 0; i < subcategories_data.length; i++) {
              var subcategory_data = subcategories_data[i];
              var product_ids = subcategory_data.product_ids;
              sub_cat_html += `<button class="sub-cat-button" data-ids="`+product_ids+`">`+subcategory_data.name+` <span class="badge badge-info">`+product_ids.length+`</span></button>`;
            }
            $('#premium-template .sub-cats').empty();
            $('#premium-template .sub-cats').append(sub_cat_html);
          }
          var premium_data = data.data.products;
          $('#premium-template .ibtana-row.themes-box-wrap').empty();
          for (var i = 0; i < premium_data.length; i++) {
            var premium_product = premium_data[i];
            var paid_card_content = `<div class="ibtana-column-three ibtana--card" data-id="`+premium_product.id+`">
                                      <div class="blog-content-inner">
                                        <div class="blog-content-img-inner">
                                          <img class="blog-content-inner-image" src="`+premium_product.image+`">
                                        </div>
                                        <h2>`+premium_product.title+`</h2>`;
            if (themedomain == premium_product.domain) {
              var href = adminUrl+'themes.php?page='+theme_slug+'_guide&tab=gutenberg_import&page_id='+page_id;
              paid_card_content += `<a href="`+href+`" class="blog-content-btn-inner">Get Started</a>`;
            } else {
              paid_card_content += `<a href="`+premium_product.permalink+`" target="_blank" class="blog-content-btn-inner">Buy Now</a>
                                    <a href="`+premium_product.demo_url+`" target="_blank" class="blog-content-btn-inner">Demo</a>
                                  </div>
                                </div>`;

            }
            $('#premium-template .ibtana-row.themes-box-wrap').append(paid_card_content);
          }
          if (!data.data.inner_page.length) {
            jQuery('button[data-tab-head="InnerPages"]').hide();
          }
        } else {
          var premium_data = data.data.premium;
          $('#premium-template .ibtana-row.themes-box-wrap').empty();
          for (var i = 0; i < premium_data.length; i++) {
            var premium_product = premium_data[i];
            var card_content = ``;
            if (active_theme === premium_product.domain) {
              card_content = `<div class="ibtana-column-four ibtana--card card-theme-active">`;
              card_content += `<div class="blog-content-inner">
                                      <div class="blog-content-img-inner">
                                        <img class="blog-content-inner-image" src="`+premium_product.image+`">
                                      </div>
                                      <h2>`+premium_product.name+`</h2>
                                      <a class="import_premium blog-content-btn-inner" data-theme-slug="`+ premium_product.slug +`">IMPORT<span class="dashicons dashicons-download"></span></a>
                                    </div>
                                  </div>`;
              $('#premium-template .ibtana-row.themes-box-wrap').append(card_content);
            } else {
              card_content = `<div class="ibtana-column-four ibtana--card">`;
              card_content += `<div class="blog-content-inner">
                                      <div class="blog-content-img-inner">
                                        <img class="blog-content-inner-image" src="`+premium_product.image+`">
                                      </div>
                                      <h2>`+premium_product.name+`</h2>
                                      <a href="`+premium_product.permalink+`" target="_blank" class="blog-content-btn-inner" data-theme-slug="`+ premium_product.slug +`">Buy Now<span class="dashicons dashicons-download"></span></a>
                                    </div>
                                  </div>`;
              $('#premium-template .ibtana-row.themes-box-wrap').append(card_content);
            }

          }
          if ((0==premium_data.length) && (0==$('#premium-template .ive-coming-soon').length)) {
            $('#premium-template .ibtana-row.themes-box-wrap').append(
              '<h3 class="ive-coming-soon">Coming Soon...</h3>'
            );
          }

          // Inner Pages
          var inner_page_object = data.data.inner_page;
          if (!jQuery.isEmptyObject(inner_page_object)) {
            var inner_pages_sub_cats = inner_page_object.inner_pages_sub_cats;
            $('#InnerPages .inner-tab-content ul').empty();
            $('#InnerPages .inner-pages-divs-wrapper').empty();
            for (var i = 0; i < inner_pages_sub_cats.length; i++) {
              var inner_pages_sub_cat = inner_pages_sub_cats[i];
              var _inner_pages_sub_cat = inner_pages_sub_cat.replace('_', ' ');
              if (i === 0) {
                $('#InnerPages .inner-tab-content ul').append('<li class="theme-tab-list-two active" data-template-tab="'+inner_pages_sub_cat+'"><span>'+_inner_pages_sub_cat+'</span></li>');
                $('#InnerPages .inner-pages-divs-wrapper').append(
                  `<div class="ibtana-theme-block" data-template-div="`+inner_pages_sub_cat+`">
                    <div class="ibtana-row themes-box-wrap">
                    </div>
                  </div>`
                );
              } else {
                $('#InnerPages .inner-tab-content ul').append('<li class="theme-tab-list-two" data-template-tab="'+inner_pages_sub_cat+'"><span>'+_inner_pages_sub_cat+'</span></li>');
                $('#InnerPages .inner-pages-divs-wrapper').append(
                  `<div class="ibtana-theme-block" data-template-div="`+inner_pages_sub_cat+`" style="display:none;">
                    <div class="ibtana-row themes-box-wrap">
                    </div>
                  </div>`
                );
              }
            }

            // Append InnerPages Cards
            var inner_pages = inner_page_object.inner_pages;
            for (var i = 0; i < inner_pages.length; i++) {
              var inner_page_single = inner_pages[i];
              $('#InnerPages .ibtana-theme-block[data-template-div="'+inner_page_single.page_type+'"] .ibtana-row.themes-box-wrap').append(`<div class="ibtana-column-four ibtana--card">
                  <div class="blog-content-inner">
                    <div class="blog-content-img-inner free-content-inner">
                      <img class="blog-content-inner-image" src="` + inner_page_single.image + `">
                    </div>
                    <h2>`+inner_page_single.name+`</h2>
                    <a class="import_free blog-content-btn-inner" data-text-domain="`+inner_page_single.domain+`" data-theme-slug="`+ inner_page_single.slug +`">
                    IMPORT
                    <span class="dashicons dashicons-download">
                    </span>
                    </a>
                  </div>
                </div>`
              );
            }
            // Append InnerPages Cards END
          }
          // Inner Pages END
        }
      });
    }

  }
})(jQuery);

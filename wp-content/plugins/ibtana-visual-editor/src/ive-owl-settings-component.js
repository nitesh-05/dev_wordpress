/**
 * Import Icons
 */
import icons from './icons';
import map from 'lodash/map';
import ReactIconPicker from "react-fontawesome-icon-picker";

const { __ } = wp.i18n;
const {	Fragment,	Component } = wp.element;
const { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl, TabPanel, Dashicon, Button, ButtonGroup, Tooltip } = wp.components;
const { ColorPalette } = wp.editor;

class IveOwlSettingsComponent extends Component {
  constructor() {
    super( ...arguments );
    this.state = {
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    const { marginOwl, onChangeMarginOwl, autoplayOwl, onChangeAutoplay, autoplayHoverPauseOwl, onChangeAutoplayHoverPause, navType, onChangeNavType, rewindOwl, onChangeRewind, loopOwl, onChangeLoop, autoplayTimeoutOwl, onChangeAutoplayTimeout, autoplaySpeedOwl, onChangeAutoplaySpeed, navigationSpeedOwl, onChangeNavigationSpeed, dotSpeedOwl, onChangeDotSpeed, dotBorderRadius, onChangeDotBorderRadius,dotPaddingTop,onChangedotPaddingTop,dotsalign,onChangedotsalign,isnavText,onChangeisnavText,navbtntype,onChangenavbtntype,navTextPrev,onChangenavTextPrev,navTextNext,onChangenavTextNext,navTextPrevicon,onChangenavTextPrevicon,navTextNexticon,onChangenavTextNexticon,  mobDisplayItem, onChangeMobDisplayItem, tabDisplayItem, onChangeTabDisplayItem, deskDisplayItem, onChangeDeskDisplayItem, stagePaddingOwl, onChangeStagePadding, owlNavMaxWidth, onChangeOwlNavMaxWidth, onChangeOwlNavTop, owlNavTop, owlNavLeft, onChangeOwlNavLeft, owlNavRight, onChangeOwlNavRight, navArrowSizeOwl, arrowBtnWidth, onChangeArrowBtnWidth, arrowBtnHeight, onChangeArrowBtnHeight, arrowBtnPadding, arrowBtnPaddingControl, onArrowBtnPaddingControl, onChangeArrowBtnPadding, onChangenavArrowSize, navArrowColorOwl, onChangenavArrowColor, navArrowBgColorOwl, onChangenavArrowBgColor, navArrowBdColorOwl, onChangenavArrowBdColor, navArrowBdWidthOwl, onChangenavArrowBdWidth, navArrowBdRadiusOwl, onChangenavArrowBdRadius, dotActiveColorOwl, onChangedotActiveColor, dotColorOwl, onChangedotColor, navArrowHovColorOwl, onChangenavArrowHovColor, navArrowBgHovColorOwl, onChangenavArrowBgHovColor, navArrowBdHovColorOwl, onChangenavArrowBdHovColor } = this.props;

    const borderTypes = [
      { key: "individual", name: __("Individual"), icon: icons.individual },
      { key: "linked", name: __("Linked"), icon: icons.linked }
    ];

    const navigationOptions = [
			{ value: 'arrows', label: __( 'Arrows', 'ibtana-blocks' ) },
			{ value: 'dots', label: __( 'Dots', 'ibtana-blocks' ) },
      { value: 'both', label: __( 'Both Arrows and Dots', 'ibtana-blocks' ) },
			{ value: 'none', label: __( 'None', 'ibtana-blocks' ) },
		];
    const dotsalignOptions = [
			{ value: 'left', label: __( 'Left', 'ibtana-blocks' ) },
			{ value: 'center', label: __( 'Center', 'ibtana-blocks' ) },
      { value: 'right', label: __( 'Right', 'ibtana-blocks' ) },
		];

    const owlNavDesktopControls = (
      <div>
        {
          onChangeDeskDisplayItem &&
          <RangeControl
            label={ __( 'Desktop Display Item', 'ibtana-blocks' ) }
            value={ ( deskDisplayItem ? deskDisplayItem : '' ) }
            onChange={ onChangeDeskDisplayItem }
            min={ 1 }
            max={ 6 }
            step={ 1 }
          />
        }

        {
          onChangeNavType &&
          <SelectControl
            label={ __( 'DeskTop Navigation Type', 'ibtana-blocks' ) }
            value={ navType ? navType[0] : 'none' }
            options={ navigationOptions }
            onChange={ (value) => onChangeNavType([
              value,
              navType[1],
              navType[2]
            ]) }
          />
        }



        { onChangeOwlNavMaxWidth && navType[0]!== 'dots' && navType[0]!== 'none' &&
          <RangeControl
            label={ __( 'Desktop Nav Max Width', 'ibtana-blocks' ) }
            value={ ( owlNavMaxWidth ? owlNavMaxWidth[0] : '' ) }
            onChange={ (value) => onChangeOwlNavMaxWidth([
              value,
              owlNavMaxWidth[1],
              owlNavMaxWidth[2]
            ]) }
            min={ 0 }
            max={ 100 }
            step={ 1 }
          />
        }


        {
          onChangeOwlNavTop && navType[0]!== 'dots' && navType[0]!== 'none' &&
          <RangeControl
            label={ __( 'Desktop Nav Top', 'ibtana-blocks' ) }
            value={ ( owlNavTop ? owlNavTop[0] : '' ) }
            onChange={ (value) => onChangeOwlNavTop([
              value,
              owlNavTop[1],
              owlNavTop[2]
            ]) }
            min={ 0 }
            max={ 100 }
            step={ 1 }
          />
        }


        {
          onChangeOwlNavLeft && navType[0]!== 'dots' && navType[0]!== 'none' &&
          <RangeControl
            label={ __( 'Desktop Nav Left', 'ibtana-blocks' ) }
            value={ ( owlNavLeft ? owlNavLeft[0] : '' ) }
            onChange={ (value) => onChangeOwlNavLeft([
              value,
              owlNavLeft[1],
              owlNavLeft[2]
            ]) }
            min={ 0 }
            max={ 100 }
            step={ 1 }
          />
        }


        {
          onChangeOwlNavRight && navType[0]!== 'dots' && navType[0]!== 'none' &&
          <RangeControl
            label={ __( 'Desktop Nav Right', 'ibtana-blocks' ) }
            value={ ( owlNavRight ? owlNavRight[0] : '' ) }
            onChange={ (value) => onChangeOwlNavRight([
              value,
              owlNavRight[1],
              owlNavRight[2]
            ]) }
            min={ 0 }
            max={ 100 }
            step={ 1 }
          />
        }


        {
          <Fragment>

            { onChangenavArrowSize && navType[0]!== 'dots' && navType[0]!== 'none' &&
              <RangeControl
                label={ __( 'Desktop Arrow Icon Size (in px)', 'ibtana-blocks' ) }
                value={ ( navArrowSizeOwl ? navArrowSizeOwl[0] : '' ) }
                onChange={ ( value ) => onChangenavArrowSize([
                  value,
                  navArrowSizeOwl[1],
                  navArrowSizeOwl[2]
                ]) }
                min={ 1 }
                max={ 100 }
                step={ 1 }
              />
            }

            {
              onChangeArrowBtnWidth && navType[0]!== 'dots' && navType[0]!== 'none' &&
              <RangeControl
                label={ __( 'Desktop Arrow Button Width (in px)', 'ibtana-blocks' ) }
                value={ ( arrowBtnWidth ? arrowBtnWidth[0] : '' ) }
                onChange={ ( value ) => onChangeArrowBtnWidth([
                  value,
                  arrowBtnWidth[1],
                  arrowBtnWidth[2]
                ]) }
                min={ 10 }
                max={ 100 }
                step={ 1 }
              />
            }

            {
              onChangeArrowBtnHeight && navType[0]!== 'dots' && navType[0]!== 'none' &&
              <RangeControl
                label={ __( 'Desktop Arrow Button Height (in px)', 'ibtana-blocks' ) }
                value={ ( arrowBtnHeight ? arrowBtnHeight[0] : '' ) }
                onChange={ ( value ) => onChangeArrowBtnHeight([
                  value,
                  arrowBtnHeight[1],
                  arrowBtnHeight[2]
                ]) }
                min={ 10 }
                max={ 100 }
                step={ 1 }
              />
            }

            { arrowBtnPaddingControl && onArrowBtnPaddingControl && arrowBtnPadding && onChangeArrowBtnPadding &&
              <div>
                <ButtonGroup
                  className="ive-size-type-options ive-outline-control"
                  aria-label={__("DeskTop Padding Control Type")} >
                  { map(borderTypes, ({ name, key, icon }) => (
                    <Tooltip text={ name }>
                      <Button
                        key={ key }
                        className="ive-size-btn"
                        isSmall
                        isPrimary={ arrowBtnPaddingControl[0] === key }
                        aria-pressed={ arrowBtnPaddingControl[0] === key }
                        onClick={ onArrowBtnPaddingControl.bind(
                          this, [ key, arrowBtnPaddingControl[1], arrowBtnPaddingControl[2] ]
                        ) } >
                        { icon }
                      </Button>
                    </Tooltip>
                  ) ) }
                </ButtonGroup>

                {
                  arrowBtnPaddingControl && arrowBtnPaddingControl[0] !== "individual" && onChangeArrowBtnPadding && navType[0]!== 'dots' && navType[0]!== 'none' &&
                  (<RangeControl
                    label={__("Desk Arrow Button Padding (px)")}
                    value={ arrowBtnPadding ? arrowBtnPadding[0][0] : "" }
                    onChange = {
                      (value) => onChangeArrowBtnPadding(
                        [
                          [ value, value, value, value ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />)
                }

                {
                  arrowBtnPaddingControl && arrowBtnPaddingControl[0] === "individual" && onChangeArrowBtnPadding && navType[0]!== 'dots' && navType[0]!== 'none' &&
                  (<Fragment>
                    <p className="ive-setting-label">
                      {__("Desk Arrow Button Padding (px)")}
                    </p>
                    <RangeControl
                      className="ive-icon-rangecontrol"
                      label={ icons.outlinetop }
                      value={ arrowBtnPadding ? arrowBtnPadding[0][0] : "" }
                      onChange={
                        ( value ) => onChangeArrowBtnPadding(
                          [
                            [ value,                 arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                            [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                            [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                          ]
                        )
                      }
                      min={ 0 }
                      max={ 100 }
                      step={ 1 }
                    />
                    <RangeControl
                      className="ive-icon-rangecontrol"
                      label={ icons.outlineright }
                      value={ arrowBtnPadding ? arrowBtnPadding[0][1] : "" }
                      onChange={
                        ( value ) => onChangeArrowBtnPadding(
                          [
                            [ arrowBtnPadding[0][0], value,                 arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                            [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                            [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                          ]
                        )
                      }
                      min={ 0 }
                      max={ 100 }
                      step={ 1 }
                    />
                    <RangeControl
                      className="ive-icon-rangecontrol"
                      label={ icons.outlinebottom }
                      value={ arrowBtnPadding ? arrowBtnPadding[0][2] : "" }
                      onChange={
                        ( value ) => onChangeArrowBtnPadding(
                          [
                            [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], value,                 arrowBtnPadding[0][3] ],
                            [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                            [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                          ]
                        )
                      }
                      min={ 0 }
                      max={ 100 }
                      step={ 1 }
                    />
                    <RangeControl
                      className="ive-icon-rangecontrol"
                      label={ icons.outlineleft }
                      value={ arrowBtnPadding ? arrowBtnPadding[0][3] : "" }
                      onChange = {
                        ( value ) => onChangeArrowBtnPadding(
                          [
                            [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], value                 ],
                            [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                            [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                          ]
                        )
                      }
                      min={0}
                      max={100}
                      step={1}
                    />
                  </Fragment>
                ) }
              </div>
            }

            {
              onChangenavArrowBdWidth && navType[0]!== 'dots' && navType[0]!== 'none' &&
              <RangeControl
                label={ __( 'DeskTop Arrow Border Width (in px)', 'ibtana-blocks' ) }
                value={ ( navArrowBdWidthOwl ? navArrowBdWidthOwl[0] : '' ) }
                onChange={ ( value ) => onChangenavArrowBdWidth( [
                  value,
                  navArrowBdWidthOwl[1],
                  navArrowBdWidthOwl[2]
                ] ) }
                min={ 0 }
                max={ 20 }
                step={ 1 }
              />
            }

          </Fragment>
        }

      </div>
    );

    const owlNavTabletControls = (
      <div>

      {
        onChangeTabDisplayItem &&
        <RangeControl
          label={ __( 'Tablet Display Item', 'ibtana-blocks' ) }
          value={ ( tabDisplayItem ? tabDisplayItem : '' ) }
          onChange={ onChangeTabDisplayItem }
          min={ 1 }
          max={ 6 }
          step={ 1 }
        />
      }

      {
        onChangeNavType &&
        <SelectControl
          label={ __( 'Tablet Navigation Type', 'ibtana-blocks' ) }
          value={ navType ? navType[1] : 'none' }
          options={ navigationOptions }
          onChange={ (value) => onChangeNavType([
            navType[0],
            value,
            navType[2]
          ]) }
        />
      }

      { onChangeOwlNavMaxWidth && navType[1]!== 'dots' && navType[1]!== 'none' &&
        <RangeControl
          label={ __( 'Tablet Nav Max Width', 'ibtana-blocks' ) }
          value={ ( owlNavMaxWidth ? owlNavMaxWidth[1] : '' ) }
          onChange={ (value) => onChangeOwlNavMaxWidth([
            owlNavMaxWidth[0],
            value,
            owlNavMaxWidth[2]
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }
      {
        onChangeOwlNavTop && navType[1]!== 'dots' && navType[1]!== 'none' &&
        <RangeControl
          label={ __( 'Tablet Nav Top', 'ibtana-blocks' ) }
          value={ ( owlNavTop ? owlNavTop[1] : '' ) }
          onChange={ (value) => onChangeOwlNavTop([
            owlNavTop[0],
            value,
            owlNavTop[2]
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }
      {
        onChangeOwlNavLeft && navType[1]!== 'dots' && navType[1]!== 'none' &&
        <RangeControl
          label={ __( 'Tablet Nav Left', 'ibtana-blocks' ) }
          value={ ( owlNavLeft ? owlNavLeft[1] : '' ) }
          onChange={ (value) => onChangeOwlNavLeft([
            owlNavLeft[0],
            value,
            owlNavLeft[2]
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }
      {
        onChangeOwlNavRight && navType[1]!== 'dots' && navType[1]!== 'none' &&
        <RangeControl
          label={ __( 'Tablet Nav Right', 'ibtana-blocks' ) }
          value={ ( owlNavRight ? owlNavRight[1] : '' ) }
          onChange={ (value) => onChangeOwlNavRight([
            owlNavRight[0],
            value,
            owlNavRight[2]
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }

      {
        <Fragment>
          {
            onChangenavArrowSize && navType[1]!== 'dots' && navType[1]!== 'none' &&
            <RangeControl
              label={ __( 'Tablet Arrow Icon Size (in px)', 'ibtana-blocks' ) }
              value={ ( navArrowSizeOwl ? navArrowSizeOwl[1] : '' ) }
              onChange={ ( value ) => onChangenavArrowSize([
                navArrowSizeOwl[0],
                value,
                navArrowSizeOwl[2]
              ]) }
              min={ 1 }
              max={ 100 }
              step={ 1 }
            />
          }

          {
            onChangeArrowBtnWidth && navType[1]!== 'dots' && navType[1]!== 'none' &&
            <RangeControl
              label={ __( 'Tablet Arrow Button Width (in px)', 'ibtana-blocks' ) }
              value={ ( arrowBtnWidth ? arrowBtnWidth[1] : '' ) }
              onChange={ ( value ) => onChangeArrowBtnWidth([
                arrowBtnWidth[0],
                value,
                arrowBtnWidth[2]
              ]) }
              min={ 10 }
              max={ 100 }
              step={ 1 }
            />
          }

          {
            onChangeArrowBtnHeight && navType[1]!== 'dots' && navType[1]!== 'none' &&
            <RangeControl
              label={ __( 'Tablet Arrow Button Height (in px)', 'ibtana-blocks' ) }
              value={ ( arrowBtnHeight ? arrowBtnHeight[1] : '' ) }
              onChange={ ( value ) => onChangeArrowBtnHeight([
                arrowBtnHeight[0],
                value,
                arrowBtnHeight[2]
              ]) }
              min={ 10 }
              max={ 100 }
              step={ 1 }
            />
          }

          { arrowBtnPaddingControl && onArrowBtnPaddingControl && arrowBtnPadding && onChangeArrowBtnPadding &&
            <div>
              <ButtonGroup
                className="ive-size-type-options ive-outline-control"
                aria-label={__("Tablet Padding Control Type")} >
                { map(borderTypes, ({ name, key, icon }) => (
                  <Tooltip text={ name }>
                    <Button
                      key={ key }
                      className="ive-size-btn"
                      isSmall
                      isPrimary={ arrowBtnPaddingControl[1] === key }
                      aria-pressed={ arrowBtnPaddingControl[1] === key }
                      onClick={ onArrowBtnPaddingControl.bind(
                        this, [ arrowBtnPaddingControl[0], key, arrowBtnPaddingControl[2] ]
                      ) } >
                      { icon }
                    </Button>
                  </Tooltip>
                ) ) }
              </ButtonGroup>

              {
                arrowBtnPaddingControl && arrowBtnPaddingControl[1] !== "individual" && onChangeArrowBtnPadding && navType[1]!== 'dots' && navType[1]!== 'none' &&
                (<RangeControl
                  label={__("Tab Arrow Button Padding (px)")}
                  value={ arrowBtnPadding ? arrowBtnPadding[1][0] : "" }
                  onChange = {
                    (value) => onChangeArrowBtnPadding(
                      [
                        [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                        [ value, value, value, value ],
                        [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                      ]
                    )
                  }
                  min={ 0 }
                  max={ 100 }
                  step={ 1 }
                />)
              }

              {
                arrowBtnPaddingControl && arrowBtnPaddingControl[1] === "individual" && onChangeArrowBtnPadding && navType[1]!== 'dots' && navType[1]!== 'none' &&
                (<Fragment>
                  <p className="ive-setting-label">
                    {__("Tab Arrow Button Padding (px)")}
                  </p>
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlinetop }
                    value={ arrowBtnPadding ? arrowBtnPadding[1][0] : "" }
                    onChange={
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ value,                 arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlineright }
                    value={ arrowBtnPadding ? arrowBtnPadding[1][1] : "" }
                    onChange={
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], value,                 arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlinebottom }
                    value={ arrowBtnPadding ? arrowBtnPadding[1][2] : "" }
                    onChange={
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], value,                 arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlineleft }
                    value={ arrowBtnPadding ? arrowBtnPadding[1][3] : "" }
                    onChange = {
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], value                 ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                        ]
                      )
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                </Fragment>
              ) }
            </div>
          }

          {
            onChangenavArrowBdWidth && navType[1]!== 'dots' && navType[1]!== 'none' &&
            <RangeControl
              label={ __( 'Tablet Arrow Border Width (in px)', 'ibtana-blocks' ) }
              value={ ( navArrowBdWidthOwl ? navArrowBdWidthOwl[1] : '' ) }
              onChange={ ( value ) => onChangenavArrowBdWidth( [
                navArrowBdWidthOwl[0],
                value,
                navArrowBdWidthOwl[2]
              ] ) }
              min={ 0 }
              max={ 20 }
              step={ 1 }
            />
          }

        </Fragment>
      }

      </div>
    );

    const owlNavMobileControls = (
      <div>

      {
        onChangeMobDisplayItem &&
        <RangeControl
          label={ __( 'Mobile Display Item', 'ibtana-blocks' ) }
          value={ ( mobDisplayItem ? mobDisplayItem : '' ) }
          onChange={ onChangeMobDisplayItem }
          min={ 1 }
          max={ 6 }
          step={ 1 }
        />
      }

      {
        onChangeNavType &&
        <SelectControl
          label={ __( 'Mobile Navigation Type', 'ibtana-blocks' ) }
          value={ navType ? navType[2] : 'none' }
          options={ navigationOptions }
          onChange={ (value) => onChangeNavType([
            navType[0],
            navType[1],
            value
          ]) }
        />
      }

      { onChangeOwlNavMaxWidth && navType[2]!== 'dots' && navType[2]!== 'none' &&
        <RangeControl
        label={ __( 'Mobile Nav Max Width', 'ibtana-blocks' ) }
        value={ ( owlNavMaxWidth ? owlNavMaxWidth[2] : '' ) }
        onChange={ ( value ) => onChangeOwlNavMaxWidth([
          owlNavMaxWidth[0],
          owlNavMaxWidth[1],
          value
        ]) }
        min={ 0 }
        max={ 100 }
        step={ 1 }
        />
      }
      {
        onChangeOwlNavTop && navType[2]!== 'dots' && navType[2]!== 'none' &&
        <RangeControl
          label={ __( 'Mobile Nav Top', 'ibtana-blocks' ) }
          value={ ( owlNavTop ? owlNavTop[2] : '' ) }
          onChange={ (value) => onChangeOwlNavTop([
            owlNavTop[0],
            owlNavTop[1],
            value
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }
      {
        onChangeOwlNavLeft && navType[2]!== 'dots' && navType[2]!== 'none' &&
        <RangeControl
          label={ __( 'Mobile Nav Left', 'ibtana-blocks' ) }
          value={ ( owlNavLeft ? owlNavLeft[2] : '' ) }
          onChange={ (value) => onChangeOwlNavLeft([
            owlNavLeft[0],
            owlNavLeft[1],
            value
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }
      {
        onChangeOwlNavRight && navType[2]!== 'dots' && navType[2]!== 'none' &&
        <RangeControl
          label={ __( 'Mobile Nav Right', 'ibtana-blocks' ) }
          value={ ( owlNavRight ? owlNavRight[2] : '' ) }
          onChange={ (value) => onChangeOwlNavRight([
            owlNavRight[0],
            owlNavRight[1],
            value
          ]) }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      }

      {
        <Fragment>
          {
            onChangenavArrowSize && navType[2]!== 'dots' && navType[2]!== 'none' &&
            <RangeControl
              label={ __( 'Mobile Arrow Icon Size (in px)', 'ibtana-blocks' ) }
              value={ ( navArrowSizeOwl ? navArrowSizeOwl[2] : '' ) }
              onChange={ ( value ) => onChangenavArrowSize([
                navArrowSizeOwl[0],
                navArrowSizeOwl[1],
                value
              ]) }
              min={ 1 }
              max={ 100 }
              step={ 1 }
            />
          }

          {
            onChangeArrowBtnWidth && navType[2]!== 'dots' && navType[2]!== 'none' &&
            <RangeControl
              label={ __( 'Mobile Arrow Button Width (in px)', 'ibtana-blocks' ) }
              value={ ( arrowBtnWidth ? arrowBtnWidth[2] : '' ) }
              onChange={ ( value ) => onChangeArrowBtnWidth( [
                arrowBtnWidth[0],
                arrowBtnWidth[1],
                value
              ] ) }
              min={ 10 }
              max={ 100 }
              step={ 1 }
            />
          }

          {
            onChangeArrowBtnHeight && navType[2]!== 'dots' && navType[2]!== 'none' &&
            <RangeControl
              label={ __( 'Mobile Arrow Button Height (in px)', 'ibtana-blocks' ) }
              value={ ( arrowBtnHeight ? arrowBtnHeight[2] : '' ) }
              onChange={ ( value ) => onChangeArrowBtnHeight([
                arrowBtnHeight[0],
                arrowBtnHeight[1],
                value
              ]) }
              min={ 10 }
              max={ 100 }
              step={ 1 }
            />
          }

          { arrowBtnPaddingControl && onArrowBtnPaddingControl && arrowBtnPadding && onChangeArrowBtnPadding &&
            <div>
              <ButtonGroup
                className="ive-size-type-options ive-outline-control"
                aria-label={__("Mobile Padding Control Type")} >
                { map(borderTypes, ({ name, key, icon }) => (
                  <Tooltip text={ name }>
                    <Button
                      key={ key }
                      className="ive-size-btn"
                      isSmall
                      isPrimary={ arrowBtnPaddingControl[2] === key }
                      aria-pressed={ arrowBtnPaddingControl[2] === key }
                      onClick={ onArrowBtnPaddingControl.bind(
                        this, [ arrowBtnPaddingControl[0], arrowBtnPaddingControl[1], key ]
                      ) } >
                      { icon }
                    </Button>
                  </Tooltip>
                ) ) }
              </ButtonGroup>

              {
                arrowBtnPaddingControl && arrowBtnPaddingControl[2] !== "individual" && onChangeArrowBtnPadding && navType[2]!== 'dots' && navType[2]!== 'none' &&
                (<RangeControl
                  label={__("Mob Arrow Button Padding (px)")}
                  value={ arrowBtnPadding ? arrowBtnPadding[2][0] : "" }
                  onChange = {
                    (value) => onChangeArrowBtnPadding(
                      [
                        [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                        [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ]
                        [ value, value, value, value ],
                      ]
                    )
                  }
                  min={ 0 }
                  max={ 100 }
                  step={ 1 }
                />)
              }

              {
                arrowBtnPaddingControl && arrowBtnPaddingControl[2] === "individual" && onChangeArrowBtnPadding && navType[2]!== 'dots' && navType[2]!== 'none' &&
                (<Fragment>
                  <p className="ive-setting-label">
                    {__("Mob Arrow Button Padding (px)")}
                  </p>
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlinetop }
                    value={ arrowBtnPadding ? arrowBtnPadding[2][0] : "" }
                    onChange={
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ value,                 arrowBtnPadding[2][1], arrowBtnPadding[2][2], arrowBtnPadding[2][3] ]
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlineright }
                    value={ arrowBtnPadding ? arrowBtnPadding[2][1] : "" }
                    onChange={
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], value,                 arrowBtnPadding[2][2], arrowBtnPadding[2][3] ],
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlinebottom }
                    value={ arrowBtnPadding ? arrowBtnPadding[2][2] : "" }
                    onChange={
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], value,                 arrowBtnPadding[2][3] ],
                        ]
                      )
                    }
                    min={ 0 }
                    max={ 100 }
                    step={ 1 }
                  />
                  <RangeControl
                    className="ive-icon-rangecontrol"
                    label={ icons.outlineleft }
                    value={ arrowBtnPadding ? arrowBtnPadding[2][3] : "" }
                    onChange = {
                      ( value ) => onChangeArrowBtnPadding(
                        [
                          [ arrowBtnPadding[0][0], arrowBtnPadding[0][1], arrowBtnPadding[0][2], arrowBtnPadding[0][3] ],
                          [ arrowBtnPadding[1][0], arrowBtnPadding[1][1], arrowBtnPadding[1][2], arrowBtnPadding[1][3] ],
                          [ arrowBtnPadding[2][0], arrowBtnPadding[2][1], arrowBtnPadding[2][2], value                 ],
                        ]
                      )
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                </Fragment>
              ) }
            </div>
          }

          {
            onChangenavArrowBdWidth && navType[2]!== 'dots' && navType[2]!== 'none' &&
            <RangeControl
              label={ __( 'Mobile Arrow Border Width (in px)', 'ibtana-blocks' ) }
              value={ ( navArrowBdWidthOwl ? navArrowBdWidthOwl[2] : '' ) }
              onChange={ ( value ) => onChangenavArrowBdWidth( [
                navArrowBdWidthOwl[0],
                navArrowBdWidthOwl[1],
                value
              ] ) }
              min={ 0 }
              max={ 20 }
              step={ 1 }
            />
          }

        </Fragment>
      }

      </div>
    );


    return(
      <Fragment>
        <PanelBody title={ __( 'Carousel Settings' ) } initialOpen={false}>
          {onChangeAutoplay && <ToggleControl
            label={ __( 'AutoPlay', 'ibtana-blocks' ) }
            checked={ autoplayOwl }
            onChange={ onChangeAutoplay }
          />}
          { autoplayOwl && onChangeAutoplayHoverPause &&
            <ToggleControl
              label={ __( 'AutoPlay Hover Pause', 'ibtana-blocks' ) }
              checked={ autoplayHoverPauseOwl }
              onChange={ onChangeAutoplayHoverPause }
            />
          }
          {onChangeRewind && <ToggleControl
            label={ __( 'Rewind', 'ibtana-blocks' ) }
            checked={ rewindOwl }
            onChange={ onChangeRewind }
          />}
          {onChangeLoop && <ToggleControl
            label={ __( 'Loop', 'ibtana-blocks' ) }
            checked={ loopOwl }
            onChange={ onChangeLoop }
          />}
          {onChangeMarginOwl && <RangeControl
            label={ __( 'Margin', 'ibtana-blocks' ) }
            value={ ( marginOwl ? marginOwl : '' ) }
            onChange={ onChangeMarginOwl }
            min={ 0 }
            max={ 100 }
            step={ 5 }
          />}
          { loopOwl && onChangeStagePadding &&
            <RangeControl
              label={ __( 'Stage Padding', 'ibtana-blocks' ) }
              value={ ( stagePaddingOwl ? stagePaddingOwl : '' ) }
              onChange={ onChangeStagePadding }
              min={ 0 }
              max={ 100 }
              step={ 1 }
              />
          }
          { autoplayOwl && onChangeAutoplayTimeout &&
            <RangeControl
              label={ __( 'AutoPlay Timeout (in seconds)', 'ibtana-blocks' ) }
              value={ ( autoplayTimeoutOwl ? autoplayTimeoutOwl : '' ) }
              onChange={ onChangeAutoplayTimeout }
              min={ 1000 }
              max={ 9000 }
              step={ 1000 }
            />
          }
          { autoplayOwl && onChangeAutoplaySpeed &&
            <RangeControl
              label={ __( 'AutoPlay Speed (in seconds)', 'ibtana-blocks' ) }
              value={ ( autoplaySpeedOwl ? autoplaySpeedOwl : '' ) }
              onChange={ onChangeAutoplaySpeed }
              min={ 1000 }
              max={ 9000 }
              step={ 1000 }
            />
          }


          { onChangeOwlNavMaxWidth && <TabPanel className="ive-size-tabs"
            activeClass="active-tab"
            tabs={ [
              {
                name: 'desktop',
                title: <Dashicon icon="desktop" />,
                className: 'ive-desk-tab',
              },
              {
                name: 'tablet',
                title: <Dashicon icon="tablet" />,
                className: 'ive-tablet-tab',
              },
              {
                name: 'mobile',
                title: <Dashicon icon="smartphone" />,
                className: 'ive-mobile-tab',
              },
            ] }>
            {
              ( tab ) => {
                let tabout;
                if ( tab.name ) {
                  if ( 'desktop' === tab.name ) {
                    tabout = owlNavDesktopControls;
                  } else if ( 'tablet' === tab.name ) {
                    tabout = owlNavTabletControls;
                  } else {
                    tabout = owlNavMobileControls;
                  }
                }
                return <div className={ tab.className } key={ tab.className }>{ tabout }</div>;
              }
            }
          </TabPanel> }

          {
            onChangenavArrowColor &&
            <div>
              <p className="ive-setting-label">{__("Arrow Color")}</p>
              <ColorPalette
                value={ ( navArrowColorOwl ? navArrowColorOwl : '' ) }
                onChange={ onChangenavArrowColor }
              />
            </div>
          }

          {
            onChangenavArrowBgColor &&
            <div>
              <p className="ive-setting-label">{__("Arrow Background Color")}</p>
              <ColorPalette
                value={ ( navArrowBgColorOwl ? navArrowBgColorOwl : '' ) }
                onChange={ onChangenavArrowBgColor }
              />
            </div>
          }


          {
            onChangenavArrowBdColor &&
            <div>
              <p className="ive-setting-label">{__("Arrow Border Color")}</p>
              <ColorPalette
                value={ ( navArrowBdColorOwl ? navArrowBdColorOwl : '' ) }
                onChange={ onChangenavArrowBdColor }
              />
            </div>
          }


          {
            onChangenavArrowHovColor &&
            <div>
              <p className="ive-setting-label">{__("Arrow Hover Color")}</p>
              <ColorPalette
                value={ ( navArrowHovColorOwl ? navArrowHovColorOwl : '' ) }
                onChange={ onChangenavArrowHovColor }
              />
            </div>
          }


          {
            onChangenavArrowBgHovColor &&
            <div>
              <p className="ive-setting-label">{__("Arrow Background Hover Color")}</p>
              <ColorPalette
                value={ ( navArrowBgHovColorOwl ? navArrowBgHovColorOwl : '' ) }
                onChange={ onChangenavArrowBgHovColor }
              />
            </div>
          }


          {
            onChangenavArrowBdHovColor &&
            <div>
              <p className="ive-setting-label">{__("Arrow Border Hover Color")}</p>
              <ColorPalette
                value={ ( navArrowBdHovColorOwl ? navArrowBdHovColorOwl : '' ) }
                onChange={ onChangenavArrowBdHovColor }
              />
            </div>
          }

          {
            onChangenavArrowBdRadius &&
            <RangeControl
              label={ __( 'Arrow Border Radius (in px)', 'ibtana-blocks' ) }
              value={ ( navArrowBdRadiusOwl ? navArrowBdRadiusOwl : '' ) }
              onChange={ onChangenavArrowBdRadius }
              min={ 0 }
              max={ 100 }
              step={ 1 }
            />
          }

          {
            onChangeNavigationSpeed &&
            <RangeControl
              label={ __( 'Navigation Speed (in seconds)', 'ibtana-blocks' ) }
              value={ ( navigationSpeedOwl ? navigationSpeedOwl : '' ) }
              onChange={ onChangeNavigationSpeed }
              min={ 1000 }
              max={ 9000 }
              step={ 1000 }
            />
          }



          {
            <Fragment>
              { onChangedotActiveColor && <p className="ive-setting-label">{__("Dot Active Color")}</p>}
              { onChangedotActiveColor && <ColorPalette
                value={ ( dotActiveColorOwl ? dotActiveColorOwl : '' ) }
                onChange={ onChangedotActiveColor }
              />}
              { onChangedotColor && <p className="ive-setting-label">{__("Dot Color")}</p>}
              { onChangedotColor && <ColorPalette
                value={ ( dotColorOwl ? dotColorOwl : '' ) }
                onChange={ onChangedotColor }
              />}
              {onChangeDotSpeed && (
                <RangeControl
                  label={ __( 'Dots Speed (in seconds)', 'ibtana-blocks' ) }
                  value={ ( dotSpeedOwl ? dotSpeedOwl : '' ) }
                  onChange={ onChangeDotSpeed }
                  min={ 1000 }
                  max={ 9000 }
                  step={ 1000 }
                />
              )}
            </Fragment>
          }

          {onChangeDotBorderRadius &&
            <RangeControl
              label={ __( 'Dots Border Radius (in px)', 'ibtana-blocks' ) }
              value={ ( dotBorderRadius ? dotBorderRadius : '' ) }
              onChange={ onChangeDotBorderRadius }
              min={ 0 }
              max={ 50 }
              step={ 1 }
            />
          }

          {onChangedotPaddingTop &&
            <RangeControl
              label={ __( 'Dots Padding Top', 'ibtana-blocks' ) }
              value={ ( dotPaddingTop ? dotPaddingTop : 0 ) }
              onChange={ onChangedotPaddingTop }
              min={ 0 }
              max={ 50 }
              step={ 1 }
            />
          }

          {onChangedotsalign &&
            <SelectControl
              label={ __( 'DeskTop Dots Align', 'ibtana-blocks' ) }
              value={ dotsalign ? dotsalign : 'center' }
              options={ dotsalignOptions }
              onChange={ onChangedotsalign }
            />
          }

          {onChangeisnavText && <ToggleControl
            label={ __( 'Nav Text enable', 'ibtana-blocks' ) }
            checked={ isnavText }
            onChange={ onChangeisnavText }
          />}
          { isnavText && onChangenavbtntype &&
            <SelectControl
              label={ __( 'Select Nav Type', 'ibtana-blocks' ) }
              value={ navbtntype ? navbtntype : 'center' }
              options={[
                { value: 'text', label: __('Text') },
                { value: 'icon', label: __('Icon') }
              ]}
              onChange={ onChangenavbtntype }
            />
          }
          { isnavText && navbtntype=='text' && onChangenavTextPrev &&
            <TextControl
              label={ __( 'Prev', 'ibtana-blocks' ) }
              value={ navTextPrev ? navTextPrev : 'Prev' }
              onChange={ onChangenavTextPrev }
            />
          }
          { isnavText && navbtntype=='text' && onChangenavTextNext &&
            <TextControl
              label={ __( 'Next', 'ibtana-blocks' ) }
              value={ navTextNext ? navTextNext : 'Prev' }
              onChange={ onChangenavTextNext }
            />
          }
          { isnavText && navbtntype=='icon' && onChangenavTextPrevicon &&<div>
            <p className="ive-setting-label"> {__("Select Previous Icon")} </p>
            <ReactIconPicker
              pickIcon={ onChangenavTextPrevicon }
            /></div>
          }
          { isnavText && navbtntype=='icon' && onChangenavTextNexticon &&<div>
          <p className="ive-setting-label">{__("Select Next Icon")}</p>
            <ReactIconPicker
              pickIcon={ onChangenavTextNexticon }
            /></div>
          }


        </PanelBody>
      </Fragment>
    );
  }
}
export default ( IveOwlSettingsComponent );

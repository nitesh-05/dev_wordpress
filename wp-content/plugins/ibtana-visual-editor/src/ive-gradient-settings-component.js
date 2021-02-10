const { __ } = wp.i18n;
const {	Fragment,	Component } = wp.element;
const { PanelBody,RangeControl,ToggleControl,SelectControl,TabPanel,Dashicon,AnglePickerControl } = wp.components;
const { ColorPalette } = wp.editor;

class IveGradient extends Component {
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
    const { gradColor1,onChangegradColor1,gradLoc1,onChangegradLoc1,gradColor2,onChangegradColor2,gradLoc2,onChangegradLoc2,gradType,onChangegradType,gradAngle,onChangegradAngle,gradRadialPosition,onChangeRadPos,hovGradColor1,onChangehovGradColor1,hovGradColor2,onChangehovGradColor2,activeGradColor2,onChangeActvGradColor2,activeGradColor1,onChangeActvGradColor1,onChangehoverbggradColor,hoverbggradColor,bggradColor,onChangebggradColor } = this.props;

    return(
      <Fragment>
        <p className="ive-setting-label">{ __( 'First Color' ) }</p>
        <ColorPalette
          value={ gradColor1 }
          onChange={ onChangegradColor1 }
        />
        {onChangehovGradColor1 && (
          <p className="ive-setting-label">{ __( 'Hover First Color' ) }</p>
        )}
        {onChangehovGradColor1 && (
          <ColorPalette
            value={ hovGradColor1 }
            onChange={ onChangehovGradColor1 }
          />
        )}
        {onChangeActvGradColor1 && (
          <p className="ive-setting-label">{ __( 'Active First Color' ) }</p>
        )}
        {onChangeActvGradColor1 && (
          <ColorPalette
            value={ activeGradColor1 }
            onChange={ onChangeActvGradColor1 }
          />
        )}
        <RangeControl
          label={ __( 'First Color Location' ) }
          value={ gradLoc1 }
          onChange={ onChangegradLoc1 }
          min={ 0 }
          max={ 100 }
        />
        <p className="ive-setting-label">{ __( 'Second Color' ) }</p>
        <ColorPalette
          value={ gradColor2 }
          onChange={ onChangegradColor2 }
        />
        {onChangehovGradColor2 && (
          <p className="ive-setting-label">{ __( 'Hover Second Color' ) }</p>
        )}
        {onChangehovGradColor2 && (
          <ColorPalette
            value={ hovGradColor2 }
            onChange={ onChangehovGradColor2 }
          />
        )}

        {onChangebggradColor && (
          <p className="ive-setting-label">{ __( ' Background Color' ) }</p>
        )}
        {onChangebggradColor && (
          <ColorPalette
            value={ bggradColor }
            onChange={ onChangebggradColor }
          />
        )}

        {onChangehoverbggradColor && (
          <p className="ive-setting-label">{ __( 'Hover Background Color' ) }</p>
        )}
        {onChangehoverbggradColor && (
          <ColorPalette
            value={ hoverbggradColor }
            onChange={ onChangehoverbggradColor }
          />
        )}

        {onChangeActvGradColor2 && (
          <p className="ive-setting-label">{ __( 'Active Second Color' ) }</p>
        )}
        {onChangeActvGradColor2 && (
          <ColorPalette
            value={ activeGradColor2 }
            onChange={ onChangeActvGradColor2 }
          />
        )}
        <RangeControl
          label={ __( 'Second Color Location' ) }
          value={ gradLoc2 }
          onChange={ onChangegradLoc2 }
          min={ 0 }
          max={ 100 }
        />
        <SelectControl
          label={ __( 'Gradient Type' ) }
          value={ gradType }
          options={ [
            { value: 'linear', label: __( 'Linear' ) },
            { value: 'radial', label: __( 'Radial' ) },
          ] }
          onChange={ onChangegradType }
        />
        { gradType && 'linear' === gradType && (
          <AnglePickerControl
            value={ gradAngle }
            onChange={ onChangegradAngle }
          />
        )}
        { gradType && 'radial' === gradType && (
          <SelectControl
            label={ __( 'Gradient Position' ) }
            value={ gradRadialPosition }
            options={ [
              { value: 'center top', label: __( 'Center Top' ) },
              { value: 'center center', label: __( 'Center Center' ) },
              { value: 'center bottom', label: __( 'Center Bottom' ) },
              { value: 'left top', label: __( 'Left Top' ) },
              { value: 'left center', label: __( 'Left Center' ) },
              { value: 'left bottom', label: __( 'Center Bottom' ) },
              { value: 'right top', label: __( 'Right Top' ) },
              { value: 'right center', label: __( 'Right Center' ) },
              { value: 'right bottom', label: __( 'Right Bottom' ) },
            ] }
            onChange={ onChangeRadPos }
          />
        )}
      </Fragment>
    );
  }
}
export default ( IveGradient );

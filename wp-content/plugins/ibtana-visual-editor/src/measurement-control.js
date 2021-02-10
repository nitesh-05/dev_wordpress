/**
 * Measure Component
 *
 */

/**
 * Import Icons
 */
import icons from './icons';

/**
 * Import External
 */
import map from 'lodash/map';
import IbtanaRange from './ibtana-range-control';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
	Fragment,
} = wp.element;
const {
	Button,
	ButtonGroup,
	Tooltip,
} = wp.components;

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function MeasurementControls( {
	label,
	measurement,
	control,
	onChange,
	onControl,
	step = 1,
	max = 100,
	min = 0,
	controlTypes = [
		{ key: 'linked', name: __( 'Linked' ), icon: icons.linked },
		{ key: 'individual', name: __( 'Individual' ), icon: icons.individual },
	],
	firstIcon = icons.outlinetop,
	secondIcon = icons.outlineright,
	thirdIcon = icons.outlinebottom,
	fourthIcon = icons.outlineleft,
	allowEmpty = false,
} ) {
	const zero = ( allowEmpty ? '' : 0 );
	return [
		onChange && onControl && (
			<Fragment>
				<ButtonGroup className="kt-size-type-options kt-outline-control" aria-label={ __( 'Measurement Control Type' ) }>
					{ map( controlTypes, ( { name, key, icon } ) => (
						<Tooltip text={ name }>
							<Button
								key={ key }
								className="kt-size-btn"
								isSmall
								isPrimary={ control === key }
								aria-pressed={ control === key }
								onClick={ () => onControl( key ) }
							>
								{ icon }
							</Button>
						</Tooltip>
					) ) }
				</ButtonGroup>
				{ control && control !== 'individual' && (
					<IbtanaRange
						label={ label }
						value={ ( measurement ? measurement[ 0 ] : '' ) }
						onChange={ ( value ) => onChange( [ value, value, value, value ] ) }
						min={ min }
						max={ max }
						step={ step }
					/>
				) }
				{ control && control === 'individual' && (
					<Fragment>
						<p>{ label }</p>
						<IbtanaRange
							className="kt-icon-rangecontrol"
							beforeIcon={ firstIcon }
							value={ ( measurement ? measurement[ 0 ] : '' ) }
							onChange={ ( value ) => onChange( [ value, ( measurement && undefined !== measurement[ 1 ] && '' !== measurement[ 1 ] ? measurement[ 1 ] : zero ), ( measurement && undefined !== measurement[ 2 ] && '' !== measurement[ 2 ] ? measurement[ 2 ] : zero ), ( measurement && undefined !== measurement[ 3 ] && '' !== measurement[ 3 ] ? measurement[ 3 ] : zero ) ] ) }
							min={ min }
							max={ max }
							step={ step }
						/>
						<IbtanaRange
							className="kt-icon-rangecontrol"
							beforeIcon={ secondIcon }
							value={ ( measurement ? measurement[ 1 ] : '' ) }
							onChange={ ( value ) => onChange( [ ( measurement && undefined !== measurement[ 0 ] && '' !== measurement[ 0 ] ? measurement[ 0 ] : zero ), value, ( measurement && undefined !== measurement[ 2 ] && '' !== measurement[ 2 ] ? measurement[ 2 ] : zero ), ( measurement && undefined !== measurement[ 3 ] && '' !== measurement[ 3 ] ? measurement[ 3 ] : zero ) ] ) }
							min={ min }
							max={ max }
							step={ step }
						/>
						<IbtanaRange
							className="kt-icon-rangecontrol"
							beforeIcon={ thirdIcon }
							value={ ( measurement ? measurement[ 2 ] : '' ) }
							onChange={ ( value ) => onChange( [ ( measurement && undefined !== measurement[ 0 ] && '' !== measurement[ 0 ] ? measurement[ 0 ] : zero ), ( measurement && undefined !== measurement[ 1 ] && '' !== measurement[ 1 ] ? measurement[ 1 ] : zero ), value, ( measurement && undefined !== measurement[ 3 ] && '' !== measurement[ 3 ] ? measurement[ 3 ] : zero ) ] ) }
							min={ min }
							max={ max }
							step={ step }
						/>
						<IbtanaRange
							className="kt-icon-rangecontrol"
							beforeIcon={ fourthIcon }
							value={ ( measurement ? measurement[ 3 ] : '' ) }
							onChange={ ( value ) => onChange( [ ( measurement && undefined !== measurement[ 0 ] && '' !== measurement[ 0 ] ? measurement[ 0 ] : zero ), ( measurement && undefined !== measurement[ 1 ] && '' !== measurement[ 1 ] ? measurement[ 1 ] : zero ), ( measurement && undefined !== measurement[ 2 ] && '' !== measurement[ 2 ] ? measurement[ 2 ] : zero ), value ] ) }
							min={ min }
							max={ max }
							step={ step }
						/>
					</Fragment>
				) }
			</Fragment>
		),
		onChange && ! onControl && (
			<Fragment>
				<p className="kt-measurement-label">{ label }</p>
				<IbtanaRange
					className="kt-icon-rangecontrol"
					beforeIcon={ firstIcon }
					value={ ( measurement ? measurement[ 0 ] : '' ) }
					onChange={ ( value ) => onChange( [ value, ( measurement && undefined !== measurement[ 1 ] && '' !== measurement[ 1 ] ? measurement[ 1 ] : zero ), ( measurement && undefined !== measurement[ 2 ] && '' !== measurement[ 2 ] ? measurement[ 2 ] : zero ), ( measurement && undefined !== measurement[ 3 ] && '' !== measurement[ 3 ] ? measurement[ 3 ] : zero ) ] ) }
					min={ min }
					max={ max }
					step={ step }
				/>
				<IbtanaRange
					className="kt-icon-rangecontrol"
					beforeIcon={ secondIcon }
					value={ ( measurement ? measurement[ 1 ] : '' ) }
					onChange={ ( value ) => onChange( [ ( measurement && undefined !== measurement[ 0 ] && '' !== measurement[ 0 ] ? measurement[ 0 ] : zero ), value, ( measurement && undefined !== measurement[ 2 ] && '' !== measurement[ 2 ] ? measurement[ 2 ] : zero ), ( measurement && undefined !== measurement[ 3 ] && '' !== measurement[ 3 ] ? measurement[ 3 ] : zero ) ] ) }
					min={ min }
					max={ max }
					step={ step }
				/>
				<IbtanaRange
					className="kt-icon-rangecontrol"
					beforeIcon={ thirdIcon }
					value={ ( measurement ? measurement[ 2 ] : '' ) }
					onChange={ ( value ) => onChange( [ ( measurement && undefined !== measurement[ 0 ] && '' !== measurement[ 0 ] ? measurement[ 0 ] : zero ), ( measurement && undefined !== measurement[ 1 ] && '' !== measurement[ 1 ] ? measurement[ 1 ] : zero ), value, ( measurement && undefined !== measurement[ 3 ] && '' !== measurement[ 3 ] ? measurement[ 3 ] : zero ) ] ) }
					min={ min }
					max={ max }
					step={ step }
				/>
				<IbtanaRange
					className="kt-icon-rangecontrol"
					beforeIcon={ fourthIcon }
					value={ ( measurement ? measurement[ 3 ] : '' ) }
					onChange={ ( value ) => onChange( [ ( measurement && undefined !== measurement[ 0 ] && '' !== measurement[ 0 ] ? measurement[ 0 ] : zero ), ( measurement && undefined !== measurement[ 1 ] && '' !== measurement[ 1 ] ? measurement[ 1 ] : zero ), ( measurement && undefined !== measurement[ 2 ] && '' !== measurement[ 2 ] ? measurement[ 2 ] : zero ), value ] ) }
					min={ min }
					max={ max }
					step={ step }
				/>
			</Fragment>
		),
	];
}

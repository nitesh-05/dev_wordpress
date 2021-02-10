if ( ivegooglefonts === undefined ) {
	var ivegooglefonts = [];
}
const {
	Component,
} = wp.element;
import PropTypes from "prop-types";
import WebFont from "webfontloader";
const statuses = {
	inactive: 'inactive',
	active: 'active',
	loading: 'loading',
};

const noop = () => {};

class IVEWebfontLoader extends Component {
	state = {
		status: undefined,
	}

	addFont = ( font ) => {
		if ( ! ivegooglefonts.includes( font ) ) {
			ivegooglefonts.push( font );
		}
	};

	handleLoading = () => {
		this.setState( { status: statuses.loading } );
	};

	handleActive = () => {
		this.setState( { status: statuses.active } );
	};

	handleInactive = () => {
		this.setState( { status: statuses.inactive } );
	};

	loadFonts = () => {
		//if ( ! this.state.fonts.includes( this.props.config.google.families[ 0 ] ) ) {
		if ( ! ivegooglefonts.includes( this.props.config.google.families[ 0 ] ) ) {
			WebFont.load( {
				...this.props.config,
				loading: this.handleLoading,
				active: this.handleActive,
				inactive: this.handleInactive,
			} );
			this.addFont( this.props.config.google.families[ 0 ] );
		}
	}

	componentDidMount() {
		this.loadFonts();
	}

	componentDidUpdate( prevProps, prevState ) {
		const { onStatus, config } = this.props;

		if ( prevState.status !== this.state.status ) {
			onStatus( this.state.status );
		}
		if ( prevProps.config !== config ) {
			this.loadFonts();
		}
	}

	render() {
		const { children } = this.props;
		return children || null;
	}
}

IVEWebfontLoader.propTypes = {
	config: PropTypes.object.isRequired,
	children: PropTypes.element,
	onStatus: PropTypes.func.isRequired,
};

IVEWebfontLoader.defaultProps = {
	onStatus: noop,
};

export default IVEWebfontLoader;

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class SomeDynamic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 3,
        };
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleLinkClick(event) {
        event.preventDefault();
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        const { title } = this.props;
        const { counter } = this.state;
        const ownClassName = 'somedynamic';
        return (
            <div className={[ownClassName]}>
                <h2>{`${title}${counter}`}</h2>
                <input
                    type={'button'}
                    onClick={this.handleLinkClick}
                    value={'[CLICK ME]'}
                />
            </div>
        );
    }
}

SomeDynamic.propTypes = {
    title: PropTypes.string,
};

SomeDynamic.defaultProps = {
    title: 'SomeDynamic',
};

export default SomeDynamic;

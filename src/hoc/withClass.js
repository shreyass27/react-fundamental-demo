import React, { Component } from 'react';

// Functional Higher Order Component
const withStateLessClass = (WrappedComponent, className) => {
    return  (props) => (
        <div className={className}>
           <WrappedComponent {...props} /> 
        </div>
    );
}

// Class with State Based Higher Order Component
export const withClass = (WrappedComponent, className) => {
    return class extends Component {

        render() {
            return (  
                <div className={className}>
                    <WrappedComponent {...this.props} /> 
                </div>
            );
        }
    }

}

export default withStateLessClass;
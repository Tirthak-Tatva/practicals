export const withClass = props => {
    return (
        <div className={props.className}>{props.children}</div>
    );
};

export const hocClass = (WrappedComponent, className) => {
    return props => (
        <WrappedComponent className={className} props={props}></WrappedComponent>
    );
};
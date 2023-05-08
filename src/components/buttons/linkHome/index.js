import { forwardRef } from 'react';

const LinkHome = forwardRef(({ text, onClick, href, color }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}  className={`btn btn-${color} stretched-link`}>
            {text}
        </a>
    );
});

export default LinkHome;
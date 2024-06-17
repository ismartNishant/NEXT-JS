import type { FC } from 'react';

interface NotFoundProps { }

const NotFound: FC<NotFoundProps> = () => {
    return (
        <div>
            <h1>Page not Found</h1>
            <h4>Could not found requested resource</h4>
        </div>
    );
}

export default NotFound;

import type { FC } from 'react';

interface NotFoundProps { }

const NotFound: FC<NotFoundProps> = () => {
    return (
        <div>
            <h1>Review not Found</h1>
            <h4>Sorry for inconvinience</h4>
        </div>
    );
}

export default NotFound;

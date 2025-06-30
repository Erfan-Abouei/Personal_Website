import { useEffect, type JSX } from 'react';
import { useLocation } from 'react-router';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const RouterProgress = (): JSX.Element | null => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        NProgress.done();
    }, [location.pathname]);

    return null;
}

export default RouterProgress;

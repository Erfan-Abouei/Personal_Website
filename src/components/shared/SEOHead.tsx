// *** NOT WORKING IN REACT 19 ***

import type { JSX } from "react";
import type { SEOHeadProps } from "@/types/components-props";
import { Helmet } from 'react-helmet';

const SEOHead = ({ title, description }: SEOHeadProps): JSX.Element => {
    const fullTitle = `عرفان ابویی | ${title}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}

            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fa_IR" />

        </Helmet>
    );
};

export default SEOHead;

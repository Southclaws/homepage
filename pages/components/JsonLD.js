import * as React from "react";

const JsonLd = data => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data.data, null, 4)
            }}
        />
    );
};

export default JsonLd;

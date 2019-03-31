import * as React from "react";

export default function JsonLd(props) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(props.data, null, 4)
            }}
        />
    );
}

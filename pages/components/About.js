import * as React from "react";

import Socials from "./Socials";

export default function About(props) {
    return (
        <main>
            <section>
                {props.description.map((value, index) => {
                    return <p key={index}>{value}</p>;
                })}
            </section>
        </main>
    );
}

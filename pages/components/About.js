import * as React from "react";

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

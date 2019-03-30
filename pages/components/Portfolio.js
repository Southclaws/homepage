import * as React from "react";

import t from "./css/Typography.css";
import css from "./css/Portfolio.css";

export default function Portfolio(props) {
    return (
        <section className={css.items}>
            {props.items.map((value, index) => {
                return <Item key={index} data={value} />;
            })}
        </section>
    );
}

function Item(props) {
    return (
        <div className={css.item}>
            <h3 className={t.strip}>{props.data.name}</h3>
            <a href={props.data.url} target="_blank" rel="nofollow">
                <div>
                    <img src={props.data.image} />
                    <div className={css.description}>
                        <p>{props.data.about}</p>
                    </div>
                </div>
                {/* <JsonLD data={props.data} /> */}
            </a>
        </div>
    );
}

import * as React from "react";

import { Bold } from "./icons/Southclaws";

import t from "./css/Typography.css";

export default function Header() {
    return (
        <header>
            <section>
                <div>
                    <Bold width={100} height={100} />
                </div>
                <div>
                    <div>
                        <h1 className={t.strip}>southclaws</h1>
                    </div>
                    <div>
                        <h2 className={t.strip}>code - video - art</h2>
                    </div>
                    <div>
                        <h2>
                            view <a href="static/resume/resume.pdf">résumé</a>
                        </h2>
                    </div>
                </div>
            </section>
        </header>
    );
}

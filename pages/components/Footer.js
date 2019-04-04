import * as React from "react";

export default function Footer() {
    return (
        <footer>
            <p>
                {new Date().getFullYear()} &copy; Barnaby "Southclaws" Keene <span>All Rights Reserved</span>
            </p>
        </footer>
    );
}

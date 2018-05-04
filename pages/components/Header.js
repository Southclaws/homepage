import * as React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <section className="profileHeader">
                    <div className="profileLogo">
                        <img src={this.props.image} />
                    </div>
                    <div className="profileTitle">
                        <h1>Southclaws</h1>
                        <h3>Code - Video - Art</h3>
                        <h4>
                            <a href="static/resume/resume.pdf">view résumé</a>
                        </h4>
                    </div>
                </section>
            </header>
        );
    }
}

export default Header;

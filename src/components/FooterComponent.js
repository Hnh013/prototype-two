export const FooterComponent = () => {
    return (
        <footer className="footer py-sm px-sm txt-over d-flex fd-col jc-c gap-1 bg-smoke">
            <div className="d-flex jc-c ai-c f-w-600 txt-metal">
                <div>Made with &nbsp;</div>
                <div><span className="fa fa-heart">&nbsp;</span></div>
                <div>&nbsp;in React</div>
            </div>
            <div className="d-flex ai-c jc-c gap-1">
                <div className="social-icon f-2x"><a href="https://github.com/Hnh013"><i className="fa fa-github-square"></i></a></div>
                <div className="social-icon f-2x"><a href="https://www.linkedin.com/in/harshit-negi-891bb717a/"><i className="fa fa-linkedin-square"></i></a></div>
                <div className="social-icon f-2x"><a href="https://twitter.com/Harshit24076243"><i className="fa fa-twitter-square"></i></a></div>
            </div>
        </footer>

    );
};

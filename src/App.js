import React, {useEffect, useState} from "react";
import {Route, Switch, withRouter, HashRouter as Router, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Photography from "./Photography";
import Resume from "./Resume";
import './App.css';
import './DefaultStyles.scss';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import logo from "./media/logo.png"


function App({location}) {

    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        const { pathname } = location;
        setCurrentPath(pathname);
    }, [location.pathname]);

    return (
        <div className="App">
            <NavBar />
            <Route render={({location}) => {
                return (
                    <TransitionGroup>
                        <CSSTransition key={location.pathname} timeout={1000} classNames="switch">
                            <Switch location={location} key={location.pathname}>
                                <Route path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/work" component={Work} />
                                <Route path="/photography" component={Photography} />
                                <Route path="/Resume" component={Resume} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                );
            }} />
        </div>
    );
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.logoClick = this.logoClick.bind(this);
        this.removeHover = this.removeHover.bind(this);
    }

    handleHover() {
        const nav = document.querySelector('.nav');
        if(!this.state.open) {
            nav.classList.toggle('hover');
        }
    }

    removeHover() {
        const currentState = this.state.open;
        if(!currentState) {
            document.querySelector('.nav').classList.remove('hover');
        }
    }

    handleClick(e) {
        const currentState = this.state.open;
        this.setState({open: !currentState});
        if(currentState) {
            document.querySelector('.nav').classList.remove('hover');
        }
    }

    logoClick() {
        const currentState = this.state.open;
        if(currentState) {
            this.setState({open: false});
            document.querySelector('.nav').classList.remove('hover');
        }
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div id="logo">
                    <Link to="/"><img src={logo} onClick={this.logoClick} /></Link>
                </div>
                <CSSTransition in={this.state.open} timeout={250} classNames="cross">
                    <div className="menu" onMouseEnter={this.handleHover} onMouseLeave={this.removeHover} onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </CSSTransition>
                <CSSTransition in={this.state.open} timeout={350} classNames="open">
                    <div className="nav" key="nav">
                        <div className="nav-container">
                            <NavItem name="about" link="/about" onClick={this.handleClick} />
                            <NavItem name="work" link="/work" onClick={this.handleClick} />
                            <NavItem name="photography" link="/photography" onClick={this.handleClick} />
                            <NavItem name="resume" link="/resume" onClick={this.handleClick} />
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

class NavItem extends React.Component {
    render() {
        return (
            <Link to={this.props.link}>
                <div className="nav-item" onClick={this.props.onClick}>
                    <h3>{this.props.name}</h3>
                </div>
            </Link>
        );
    }
}

export default withRouter(App);
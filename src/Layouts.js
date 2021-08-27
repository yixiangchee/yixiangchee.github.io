import React, {useEffect, useState, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from './Layouts.scss'
import {Router, Link} from 'react-router-dom';
import email from "./media/email.png"
import gh from "./media/github.png"
import linkedin from "./media/linkedin.png"

class StandardSection extends React.Component {
    render() {
        return (
            <div className={"section-wrapper " + this.props.color} style={this.props.styles}>
                {this.props.text ?
                    <div className="text-wrapper">
                        {this.props.children}
                    </div>
                    :
                    this.props.children
                }
            </div>
        );
    }
}

class SplitSection extends React.Component {
    render() {
        return (
            <div className="split-section-wrapper">
                <div className="split-section-light">
                    {this.props.children}
                </div>
                <div className="split-section-dark">
                    <div>
                        <img src={this.props.img} />
                    </div>
                </div>
            </div>
        );
    }
}

class CollageSection extends React.Component {
    render() {
        return (
            <div className="section-wrapper">
                <div className="section">
                    <div className="collage-wrapper">
                        <div className="collage-left">
                            <img src={this.props.pic1} id="photography-link" />
                            <Link to="/hobbies">
                                <p><a className="button" href={this.props.link}>{this.props.linkTitle}</a></p>
                            </Link>
                        </div>
                        <div className="collage-right">
                            <div className="collage-inner-header">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="collage-inner-top">
                                <img src={this.props.pic2} />
                            </div>
                            <div className="collage-inner-bottom">
                                <img src={this.props.pic3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <h1>get in touch</h1>
                <div className="footer-links">
                    <a href="mailto:cyxiangg@gmail.com" target="_blank" alt="email" title="Email"><img src={email} /></a>
                    <a href="https://github.com/yixiangchee" target="_blank" alt="github" title="Github"><img src={gh} /></a>
                    <a href="https://www.linkedin.com/in/yixiangchee/" target="_blank" alt="linkedin" title="LinkedIn"><img src={linkedin} /></a>
                </div>
            </div>
        </div>
    );
}

class Block extends React.Component {
    render() {
        return(
            <div className={"block "+this.props.color}></div>
        )
    }
}

export {StandardSection, SplitSection, CollageSection, Footer, Block}
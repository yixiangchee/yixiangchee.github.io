import React from 'react';
import {StandardSection, SplitSection, Footer, CollageSection, Block} from "./Layouts";
import profile from "./media/profile.jpg"
import {Link} from "react-router-dom";
import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            hidden: true
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const currentScrollPos = window.pageYOffset;
        //console.log(currentScrollPos);
        let v = currentScrollPos < 700;
        //console.log(v);

        this.setState({
            prevScrollpos: currentScrollPos,
            hidden: v
        });
    }

    render(){
        return(
            <div className="home page">
                <Block color = "retro-green"></Block>
                <SplitSection img ={profile}>
                    <div>
                        <h3>Hey there!👋 I'm Chee, and I'm passionate about data storytelling. </h3>
                        <p>I'm currently a second-year undergraduate at UniMelb studying Data Science.</p>
                        <p>Just a few of my many varied interests include graphic design and photography.</p>
                        <p className="read-more-link"><Link to="/about">Read More</Link> ⟶</p>
                    </div>
                </SplitSection>
                <StandardSection color="retro-green">
                    <div className="section">
                        <h1>skills</h1>
                        <div className="skills-wrapper">
                            <SkillButton name="python"/>
                            <SkillButton name="R"/>
                            <SkillButton name="SQL"/>
                            <SkillButton name="java"/>
                        </div>
                    </div>
                </StandardSection>
                <CollageSection title="Other Interests" linkTitle="view more" pic1={profile} pic2={profile} pic3={profile} />
                <Footer />
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
}

function SkillButton(props) {
    return (
        <p className="skill-button">{props.name}</p>
    );
}

export default Home;
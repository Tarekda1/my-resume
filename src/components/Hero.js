import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
import PersonalList from './PersonalList';
import { animateScroll as scroll, scroller } from 'react-scroll';
const query = graphql`
	{
		file(relativePath: { eq: "hero.jpg" }) {
			childImageSharp {
				fixed {
					...GatsbyImageSharpFixed
				}
			}
		}
		resume: file(extension: { eq: "pdf" }) {
			name
			publicURL
		}
	}
`;

const Hero = () => {
	const { file: { childImageSharp: { fixed } }, resume: { name, publicURL } } = useStaticQuery(query);
	const scrollTo = (e, to) => {
		e.preventDefault();
		scroller.scrollTo(to, {
			duration: 800,
			delay: 60,
			smooth: 'easeInOutQuart'
		});
	};
	return (
		<div className="row">
			<div className="col-12">
				<header id="about" className="hero card">
					<div className="section-center hero-center">
						<div className="hero-img-wrapper">
							<Image fixed={fixed} className="hero-img" />
							<SocialLinks />
						</div>
						<article className="hero-info">
							<div>
								<div className="underline" />
								<h2>Tarek Daaboul</h2>
								<h4>Fullstack & Mobile developer</h4>
								<div className="info-contact">
									<a href={publicURL} target="_blank" className="btn">
										Download CV
									</a>
									<a onClick={(e) => scrollTo(e, 'contact')} className="btn">
										contact me
									</a>
								</div>
								<div className="personal-info-wrap">
									<PersonalList />
								</div>
							</div>
						</article>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Hero;

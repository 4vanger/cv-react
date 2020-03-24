import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function AboutPage(props) {
    const javascriptYearsOfExperience = (new Date()).getFullYear() - 2003;

    return (
    <Container>
	<Row>
		<Col md={{span: 6, offset: 6}}>
			<blockquote>
				<h4>hacker: n.</h4>
				<ol>
                    <li>[originally, someone who makes furniture with an axe]</li>
					<li>A person who enjoys exploring the details of programmable systems and how to stretch their
						capabilities,
						as opposed to most users, who prefer to learn only the minimum necessary. RFC1392, the Internet
						Users'
						Glossary, usefully amplifies this as: A person who delights in having an intimate understanding
						of the
						internal workings of a system, computers and computer networks in particular.
					</li>
					<li>One who programs enthusiastically (even obsessively) or who enjoys programming rather than just
						theorizing about programming.
					</li>
					<li>A person capable of appreciating hack value.</li>
				</ol>
				<small><a href="http://www.catb.org/jargon/html/H/hacker.html">Jargon File: hacker</a></small>
			</blockquote>
		</Col>
	</Row>
	<p>My name is Andrew Kulinich and you are using my resume. I am Javascript development expert
    with {javascriptYearsOfExperience}+ years of experience, team lead and R&amp;D director.</p>

	<p>Developer's best resume is code he creates. Check out this <a href="https://github.com/4vanger/cv-react">resume source code</a> at github. </p>

	<p>I love Javascript a lot because it is so flexible and powerful. And today I could write anything with Javascript - not only
		browser UI, but also server-side, mobile apps, games or media platforms.</p>

	<p>I'm always open for new opportunities. If you are a small startup looking for someone who can quickly transform your idea into complicated UI  or you just closed your B series and now looking for someone to lead your front-end team - here are <a href="/downloadLinks">my contacts</a>.</p>
	<p>I'm an US legal resident alient based in Seattle, WA.</p>

	<p>Check <a href="/jobs">great companies</a> I was working with before and <a href="/projects">amazing projects</a>, I am proud of.</p>
</Container>);
}
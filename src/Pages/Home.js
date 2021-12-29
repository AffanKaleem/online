import React from 'react'
import './home.css';
import '../App.css';
import About from './About';

function Home() {
    return (
        <div className='Home-section'>
            <h1>Home</h1>
            <p>
                Online Election System which is a web-based platform also offering mobile solution specifically designed for the Pakistani election where the safety and reliability of elections has always been a big question. Pakistan has always faced an issue of having real democratic elections held, there always have been big questions on the credibility of elections as being all manual effort, it’s always been easy to manipulate election results either by power or money as we have seen many such cases in past on media. This creates distrust among people for elections and many people also don’t case their vote for this reason and a good chunk goes un-voted. So, there’s huge need to have a system where people have trust on elections and they feel confident about their vote.
                In the 2014 Ontario municipal elections 97 municipalities adopted Internet voting, making the voting mode available to approximately 2 million electors. This election represented the most important deployment of Internet voting in binding local elections and a significant shift toward electoral modernization at the municipal level in Canada.
                There are already existing systems vary from minimal websites to decent mobile applications to full-fledged voting systems. These web-based platforms for conducting votes with a pretty decent designing. People can create their account for conducting votes for any mean, elections of any sort. Administrators can create polls then allow public to cast votes on their polls. This is often an open system with very broad approach. They got different subscription plans based on what level of voting/polls you would like to conduct; all plans have their extra features or limitations starting from core features of voting to creating customizations, design changes or what not.
                Pakistan is in need of such a system which takes out all the loop holes within the current system and lift it from a paper based manual approach to a digital platform. In Pakistan the voting for general elections is physically a colossal amount of poll paper was print, for voting everyone must come within the polling station, stand within the line and wait for their turn.
                Our aim is to offer a platform which may change the paper based manual approach with proficient and successful online election system, maintaining security for national reasons and citizens that are participating within the election, in order that they can have good confidence about their decision of casting a vote for somebody. The system secures with high encryption standards so nobody can hack into or manipulate with the data. Our system offers high scalability with the ability to handle a huge system load by using latest cloud technologies, so there’s no downtime for elections and basically eliminating any sort of delays in results or hassle for citizens.
            </p>
        </div>
    )
}
export default Home;

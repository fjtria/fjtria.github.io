import '../../index.css';
import './About.css';
import profileIcon from '../../assets/images/Summary/profile.webp'

export const About = () => {
    return (
        <section id='about'>
            <h2>About</h2>
            <div className='column-container'>
                <img src={profileIcon} alt='FJ Tria' loading='lazy'></img>
                <div className='biography'>
                    <h3 className='section-title'>Technology, Engineering, and Digital Media Enthusiast</h3>
                    <p>
                        Hello! I&apos;m FJ, a software engineer and creative based in California. With a diverse background in software
                        development and project management, I bring a unique perspective and adaptable skill set to every project I take on.
                    </p>
                </div>
            </div>

            <div>            
                <h3>My Journey</h3>
                <p>
                    As I grew up, so did technology. I saw devices get thinner, lighter, and faster. I watched as new technologies were
                    integrated into everyday life and how users adapt to and embrace change. This continuous and rapid development
                    encouraged me to learn the <em>how</em> behind the technology I use every day. Now, as a university student studying
                    software engineering, my goal is to answer <em>who</em> we build technology for, <em>what</em> problems we need to
                    solve, and <em>why</em> technology can help us do better.
                </p>
            </div>

            <div>
                <h3>My Philosophy</h3>
                <p>
                    I&apos;m passionate about building technologies that have a positive societal impact. That means ensuring that software
                    both <em>meets the needs</em> and <em>respects the concerns</em> of its users. Part of building user-centered products
                    is making sure interfaces are accessible and responsive. It also requires transparency; as builders we should be open
                    about how our software works and how we protect our users. I ensure that the technology I contribute towards is built
                    with quality and authenticity in mind.
                </p>
            </div>
            
        </section>
    );
}
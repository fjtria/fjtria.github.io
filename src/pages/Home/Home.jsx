import { Link } from 'react-router';
import copy from 'copy-to-clipboard';
import '../../index.css';
import './Home.css';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp'
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';
import TempoPreview from '../../assets/images/Projects/tempo_preview.webp';

export const Home = () => {

    const copyToClipboard = () => {
        copy('fjtria' + '@' + 'protonmail' + '.' + 'com');
        alert(`Email copied to clipboard!`);
    }

    return (
        <section id='home'>
            <div>            
                <h2 className='home-title'>I&apos;m a creator building <br></br> impactful digital experiences.</h2>
                <p>
                    I&apos;m passionate about building experiences that are intuitive, engaging, and empowering.
                </p>
                <button className='button' onClick={copyToClipboard} title='Copy Email'>Contact me →</button>
            </div>
            <div>
                <h3>Featured</h3>
                <div className='column-container'>
                    <ProjectCard
                        image={TempoPreview}
                        altText={'Tempo Logo'}
                        title={'Tempo'}
                        description={'A privacy-first mobile application for tracking medication schedules, nutrition and hydration goals, and menstrual cycles.'}
                        link={'https://github.com/fjtria/tempo'}
                    >
                    </ProjectCard>

                    <ProjectCard
                        image={SpacelabPreview}
                        altText={'Screenshot of The Spacelab Nonprofit Website'}
                        title={'The Spacelab Nonprofit'}
                        description={"The Spacelab Nonprofit's website, describing the organization's mission and highlighting the latest space-related projects."}
                        link={'https://spacelab.space/'}
                    >
                    </ProjectCard>

                    <ProjectCard
                        image={DexfetchdPreview}
                        altText={"Screenshot of Dexfetch'd"}
                        title={"Dexfetch'd"}
                        description={'A website for interfacing with a database of Pokémon, allowing users to look up Pokémon species, including types, abilities, and stats.'}
                        link={'https://fjtria.github.io/dexfetchd/'}
                    >
                    </ProjectCard>
                </div>
                <Link className='button' to='/projects' title='Projects'>View all projects →</Link>
            </div>
        </section>
    );
}
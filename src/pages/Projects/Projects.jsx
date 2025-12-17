import '../../index.css';
import './Projects.css';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import TempoPreview from '../../assets/images/Projects/tempo_preview.webp';
import SpacelabPreview from '../../assets/images/Projects/spacelab_preview.webp';
import DexfetchdPreview from '../../assets/images/Projects/dexfetchd_preview.webp';
import ColorcodedPreview from '../../assets/images/Projects/colorcoded_preview.webp';
import PantryPalPreview from '../../assets/images/Projects/pantrypal_preview.webp';
import ExoplanetariumPreview from '../../assets/images/Projects/exoplanetarium_preview.webp';
import MimiPreview from '../../assets/images/Projects/mimi_preview.webp';
import WTHPreview from '../../assets/images/Projects/wth_preview.webp';


export const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <h3>Websites and Apps</h3>
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

                <ProjectCard
                    image={ColorcodedPreview}
                    altText={'Screenshot of Colorcoded'}
                    title={'Colorcoded'}
                    description={'An all-in-one color code conversion tool capable of converting to and from the HEX, RGB, CMYK, and HSL color models.'}
                    link={'https://fjtria.github.io/colorcoded/'}
                >
                </ProjectCard>

                <ProjectCard
                    image={PantryPalPreview}
                    altText={'Pantry Pal Logo'}
                    title={'Pantry Pal'}
                    description={'A mobile application allowing users to share and discover recipes and automatically generate grocery shopping lists.'}
                    link={'https://github.com/fjtria/PantryPal'}
                >
                </ProjectCard>

                <ProjectCard
                    image={ExoplanetariumPreview}
                    altText={'Screenshot of Exoplanetarium 3D'}
                    title={'Exoplanetarium 3D'}
                    description={'An educational, interactive, 3D web application that enables users to visualize and explore exoplanets within our galaxy.'}
                    link={'https://spacelabdev.github.io/Exoplanetarium-3D/'}
                >
                </ProjectCard>
            </div>
            <h3>Games</h3>
            <div className='column-container'>
                <ProjectCard
                    image={WTHPreview}
                    altText={'Screenshot of What the Hell?'}
                    title={'What the Hell?'}
                    description={'A casual 2D platformer where, after a turn for the worse, you find yourself in Hell and have to fight your way back to the surface.'}
                    link={'https://gameshowcase.ucsc.edu/project/what-the-hell/'}
                >
                </ProjectCard>

                <ProjectCard
                    image={MimiPreview}
                    altText={'Mimi Logo'}
                    title={'Mimi'}
                    description={'An interactive fiction game that explores the pet and owner relationship and what happens when a dog loses their owner.'}
                    link={'https://fjtria.itch.io/mimi'}
                >
                </ProjectCard>
            </div>
        </section>
    );
}
import "./Project.css";
import PictureBox from "../../ui/PictureBox";
import ProjectContent from "./ProjectContent";
import ProjectGallery from "./ProjectGallery";

function Project() {
  const project = {
    name: "all_colors_are_in_the_lights",
    thumbnail: "11.jpg",
    title: "All Colors Are In The Lights",
    subtitle:
      "Extracting and Overlaying Urban Images for Interactive Spatiality",
    types: ["Professional", "Group"],
    team: ["Tien Ling", "Ling Lee"],
    time: "Fall 2019",
    location: "Taichung City, Taiwan",
    venue: "National Taichung Theater: IMAGE Theater",
    tags: ["Installation", "Projection"],
    description: [
      "Urban images have been prevailing and even ubiquitous these days. We see representations of cities in digital maps, movies or games, and we often participate in creating urban imageries by posting traveling logs in social media, uploading panorama shots or creating computer game MUDs based on real life locations. However, in terms of actual interaction instead of visual or virtual participation, it is much more difficult to create public engagement in any built urban environment. The more designers and architects put effort into applying complicated algorithms and mechanisms to interactive items, the more it shows that the majority of our surroundings, by its default status, do not interact with people at all.",
      "All Colors Are In The Lights (ACAITL) is an installation that animates the environment via arrangements of images and projections. Without complicated sensing techniques or movable mechanisms, an intuitive light and shadow show with everyday street view images creates an instantly relatable urban experience to the audience. A playful and responsive engagement between an enclosed interior and an open urban spatial environment is presented in a way that invites maximum public participation, whether to interact with the imagery, the projections, or the interior space, individually as well as collectively.",
    ],
    readMore: [
      {
        title: "(Color) Coding the Environment",
        subtitle: null,
        paragraphs: [
          "In the seminal book “Image of the City”, Lynch argues that the understanding of cities are formed by our perceptions. From a cognitive psychological point of view, the “imaging” of cities is a form of cognitive mapping: Because of the limitation of cognitive capacity, our brains naturally filter secondary information or background noises to cope with overwhelming information. The imagery in ACAITL represents the selective mechanism in terms of perceiving and conceiving urban spatial information through a three- step procedure— “Documentation”, “Coding”, and “Projection”.",
        ],
        lists: [],
      },
      {
        title: null,
        subtitle: "Documenting",
        paragraphs: [
          "In this phase, we photograph the city with a 360-degree video camera to get comprehensive panoramic shots while moving along boulevard. The images sampled from the video serves as the foundation to reconstruct the urban experience",
        ],
        lists: [],
      },
      {
        title: null,
        subtitle: "Coding",
        paragraphs: [
          "Photographic representations of the city are reproduced into a series of color-coded images. Environmental objects are categorized, grouped and layered before colorized in a four- color printing manner, except for that we are painting here with color lights, taking advantage of a RGB color model for its additive nature. A rather complicated coding pattern is established to carefully assign contrasting colors to different groups of visual elements, in order to create overlapping addition of lights. A car would be projected in red and yellow from one projector, as well as cyan and blue from another. If one is to move in front of the two projectors, the car would be seen as white first (no shadow), and then either red or blue (alternative shadows), depending on the relative locations of the viewer blocking the lights.",
        ],
        lists: [],
      },
      {
        title: null,
        subtitle: "Projecting",
        paragraphs: [
          "In the final presentation, multiple projectors are arranged to overlay the color-coded images together to reconstruct the original view of the city. We use the additive model to sum up the primary and secondary colors into white, creating light grey silhouettes that vaguely hints at an urban landscape underneath. This layered visuals await for involvement from participants. When one step in front of one of the projections, the shadow of the person, instead of appearing black for lack of light, unexpectedly reveals the highly contrasted shapes of saturated colors coming from the directions of other projectors. In a sense, this is a “decoding” process, highlighting some of the layers of urban information by blocking the light that “conceals” the colors. Every time someone interacts with the projections by intuitively playing with the shadows, the representation of the city also transforms. Each action, and the visual reaction, is unique.",
        ],
        lists: [],
      },
      {
        title: "The Sound",
        subtitle: null,
        paragraphs: [
          "ACAITL applies ambisonic technology to create an audio environment that also contributes to the immersive spatial experience. While the visual images work as stop-frame slideshow animation (each frame lasting 4 seconds), the audio is played back in real time, creating an instantly recognizable urban backbeat. It brings a dynamic sensation of spatiality and excitement, as if witnessing a head-on vehicle passing through from the front to the rear. Urban ambient sounds are recorded using an all-directional microphone, and then mixed with electronic beats and noises. Recognizable patterns and site-specific sounds are carefully mixed to juxtapose with the visuals of city landmarks. The final audio work is played through six channels to create a surrounding audio environment to enhance the movement of the visual as well as the flowingnsensation in the space.",
        ],
        lists: [],
      },
    ],
    heroImage: "10.jpg",
    supportImages: [""],
    gallery: [
      "10.jpg",
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg",
      "09.jpg",
    ],
    videoURL: "https://www.youtube.com/embed/lKq4ic5Q_bg?rel=0",
  };

  return (
    <div className="project">
      {project.videoURL && (
        <iframe
          className="project__video"
          title={project.name}
          src={project.videoURL}
          frameborder="0"
          allowfullscreen="allowfullscreen"
        ></iframe>
      )}
      {!project.videoURL && (
        <PictureBox
          className="project__heroImg"
          aspectRatio="2/1"
          img={`images/projects/${project.name}/${project.heroImage}`}
          alt={project.name}
        />
      )}
      <ProjectContent project={project} />
      <ProjectGallery project={project.name} gallery={project.gallery} />
    </div>
  );
}
export default Project;

import AboutMe from './AboutMe';
import { AboutMeDemo } from './stories';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'AboutMe',
  component: AboutMe,
};

//👇 We create a “template” of how args map to rendering
export const Template = ( ) => <AboutMeDemo />;

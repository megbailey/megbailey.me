import Project from './Project';
import { ProjectDemo, ProjectCardDemo } from './stories';

export default {
  title: 'Project',
  component: Project,
};

export const Detailed = ( ) => <ProjectDemo />;
export const Default = ( ) => <ProjectCardDemo />;

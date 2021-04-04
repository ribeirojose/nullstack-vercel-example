import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
class Application extends Nullstack {

  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({ project }) {
    await sleep(3000);
    project.name = 'Nullstack Vercel Example';
    project.domain = 'localhost';
    project.color = '#D22365';
  }

  renderHead() {
    return (
      <head>
        <link 
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    )
  }

}

export default Application;
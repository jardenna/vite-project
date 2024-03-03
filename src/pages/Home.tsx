import Img from '../components/Img';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Title } from '../types/lang';

function Home() {
  useDocumentTitle(Title.Home);

  return (
    <article className="flex-box home-page">
      <aside className="aside">
        <span className="vertical-line-container">
          <span className="vertical-line" />
          <span className="vertical-line" />
        </span>
        <article>
          Anyone can experience a disability when the design, the environment,
          the attitude or the social structure exclude them from participating.
        </article>
      </aside>
      <section>
        <h1>Accessibility benefits everyone</h1>
        Creating products for people with disabilities creates results that
        benefit everyone, and is an important aspect of diversity, equity, and
        inclusion.
        <p>
          Bear in mind that a lot of accessibility best practices benefit
          everyone, not just users with disabilities. Lean semantic markup is
          not only good for screen readers, but it is also fast to load and
          performant. This benefits everyone, especially those on mobile devices
          and/or slow connections.
        </p>
        <Img
          imgSrc="./images/kindOfDisabilities.jpg"
          altText="A chart of permanent, temporary, situational impairments and
          disabilities for touch, see, hear, speak, and cognitive."
        />
      </section>
    </article>
  );
}
export default Home;

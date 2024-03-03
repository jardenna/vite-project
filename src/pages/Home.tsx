import Img from '../components/Img';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  useDocumentTitle(Title.Home);

  return (
    <>
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
      </section>

      {/* <section>
        <Img
          imgSrc="./images/kindOfDisabilities.jpg"
          altText="A chart of permanent, temporary, situational impairments and disabilities for touch, see, hear, speak, and cognitive."
        />
      </section> */}
    </>
  );
}
export default Home;

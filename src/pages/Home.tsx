import Img from '../components/Img';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  useDocumentTitle(Title.Home);

  return (
    <>
      <section>
        <h2>
          Accessibility is an important aspect of diversity, equity, and
          inclusion
        </h2>
        A disability arises when a person with a physical or mental impairment
        experiences barriers in connection with participation in the surrounding
        community.
        <p>
          Bear in mind that a lot of accessibility best practices benefit
          everyone, not just users with disabilities. For example, lean semantic
          markup is not only good for screen readers, but it is also fast to
          load and performant. This benefits everyone, especially those on
          mobile devices and/or slow connections.
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

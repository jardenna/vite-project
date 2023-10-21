import Figcaption from '../components/Figcaption';
import Figure from '../components/figure/Figure';
import { Title } from '../enums';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  useDocumentTitle(Title.Home);

  return (
    <main>
      <div className="container">
        <aside className="aside">
          <span className="vertical-line-container">
            <span className="vertical-line" />
            <span className="vertical-line" />
          </span>

          <div>
            <h1>Why should we care</h1>
            <div>
              Anyone can experience a disability when the design, the
              environment, the attitude or the social structure exclude them
              from participating.
              <cite>
                <a href="https://www2.ocadu.ca/bio/jutta-treviranus">
                  Jutta Treviranus
                </a>
              </cite>
            </div>
          </div>
        </aside>

        <section>
          Bear in mind that a lot of accessibility best practices benefit
          everyone, not just users with disabilities.
          <p>
            Lean semantic markup is fast to load and performant. This benefits
            everyone, especially those on mobile devices and/or slow
            connections.
          </p>
          <p>
            A disability arises when a person with a physical or mental
            impairment experiences barriers in connection with participation in
            the surrounding community.
          </p>
          <p>WHO’s International Classification of Disability (ICF)</p>
          <p>
            A little less than 100,000 bone fractures are each year treated in
            Denmark
          </p>
          <p>sundhed.dk</p>
          <p>
            "Anyone can experience a disability when the design, the
            environment, the attitude or the social structure exclude them from
            participating." - Jutta Treviranus
          </p>
        </section>
      </div>
      <section>
        <Figure
          src="./images/spectrumDisability.jpg"
          alt="Many diverse people, some with visible disabilities."
          className="img-disabilities"
        >
          <Figcaption>
            <p> Permanent, temporary, and situational disabilities</p>
            <a href="https://inclusive.microsoft.design/">
              Inclusive Design from the Microsoft Design Toolkit
            </a>
          </Figcaption>
        </Figure>
      </section>
    </main>
  );
}
export default Home;

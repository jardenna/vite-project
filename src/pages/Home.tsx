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
          <p>
            According to WHO the World Health Organization, about 15% living
            with permanent disabilities. If you included the people who
            experience temporary and situational disabilities, that number
            increases to 100%.
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
            <cite>
              <a href="https://inclusive.microsoft.design/">
                Inclusive Design from the Microsoft Design Toolkit
              </a>
            </cite>
          </Figcaption>
        </Figure>
      </section>
    </main>
  );
}
export default Home;

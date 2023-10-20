import { FC } from 'react';
import Figcaption from './Figcaption';
import Figure from './Figure';
import Img from './Img';

const Images: FC = () => (
  <article>
    <h1>Images</h1>
    <article>
      A text alternative should summarize the purpose of an image as succinctly
      as possible (preferably with no more than 100 characters). The alt
      attribute is the preferred and most commonly used way to provide a text
      alternative for img and area elements. The aria-labelledby attribute can
      be used to provide a text alternative when an image can be described using
      text already associated with the image, or for elements with role="img".
      The aria-label attribute should only be used to provide a text alternative
      in the special case when an element has a role="img" attribute. Use the
      alt attribute for img and area elements. The title attribute will be used
      by assistive technologies to provide a text alternative if no other
      specification technique is found. Use the attributes alt="",
      role="presentation" or include the image as a CSS background-image to
      identify it as being used purely for stylistic or decorative purposes and
      one that should be ignored by people using assistive technologies.
      https://fae.disability.illinois.edu/rulesets/IMAGE_1/
      <section>
        <h2>Decorative Images </h2>
        <p>
          Decorative images don’t add information to the content of a page. For
          example, the information provided by the image might already be given
          using adjacent text, or the image might be included to make the
          website more visually attractive.
        </p>
        <a href="https://www.w3.org/WAI/tutorials/images/decorative/">
          <em>Source</em>
        </a>
      </section>
      <section>
        <h2>Informative Images</h2>
        For accessibility reasons, authors should not use background images as
        the sole method of conveying important information. See;
        <a href="http://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3">
          WCAG failure #F3
        </a>
        <a href="https://www.w3.org/TR/css3-background/#ref-WCAG20">[WCAG20]</a>
        Images are not accessible in non-graphical presentations, and background
        images specifically might be turned off in high-contrast display modes.
        <a href="https://www.w3.org/TR/css3-background/#the-background-image">
          <em>Source</em>
        </a>
      </section>
    </article>

    <div>
      For long descriptions, use captions instead of alt text since they are
      available to all users and alt text is limited to 125 characters.
    </div>
    <div>
      images empty alt text so SR knows it is an image otherwice it will read
      the img src / name
      <p>
        do not use images with text because of magnifiers or add it to the alt
        text
      </p>
    </div>
    <section>
      <h2>Figure</h2>
      <div>
        <Figure>
          <Img
            src="./images/hedy.jpg"
            alt="Hedy Lamarr: Hollywood actress behind the invention of WIFI "
          />

          <Figcaption>
            <h3 className="figure-heading">
              Hedy Lamarr, actor and co-inventor of Secret Communication System
            </h3>
            <div>
              In those rare situations where images of text must be used, the
              text alternative must contain the same text presented in the
              image. Hedy Lamarr was a famous actor, film producer and inventor.
              She is today mostly known for co-inventing an early version of
              frequency-hopping spread spectrum communication in 1941. Today
              this technology is used in secure Wi-Fi, GPS and Bluetooth.
              <p>
                <a href="https://recab.com/hedy-lamarr/">
                  Read more about Hedy Lamarr
                </a>
              </p>
            </div>
          </Figcaption>
        </Figure>
        <Figure>
          <Img src="./images/family.jpg" alt="We’re family-friendly." />

          <Figcaption>
            <h3 className="figure-heading">Our company is family-friendly</h3>
            <div>
              This photograph shows a happy family group. It’s a stock image so
              the individuals should not be identified. It’s being used to give
              the impression that the website or the company it represents is
              family-friendly.
            </div>
          </Figcaption>
        </Figure>
        <Figure>
          <Img
            src="./images/counter-clockwise.jpg"
            alt="Push the cap down and turn it counter-clockwise (from right to left)"
          />

          <Figcaption>
            <h3 className="figure-heading">
              Direction for unscrewing a bottle cap
            </h3>
            <div>
              This simple diagram illustrates a counter-clockwise direction for
              unscrewing a bottle top or cap. The information can be described
              in a short sentence, so the text alternative “Push the cap down
              and turn it counter-clockwise (from right to left)” is given in
              the alt attribute.
            </div>
          </Figcaption>
        </Figure>
        <Figure>
          <Img src="./images/frog.jpg" alt="" />

          <Figcaption>
            <h3 className="figure-heading">Red-Eyed Tree Frog</h3>
            <div>
              This picture is already sufficiently described by the adjacent
              text. There is no need to repeat this information, and a null
              (empty) alt value can be used for this image.
            </div>
          </Figcaption>
        </Figure>
      </div>
    </section>
  </article>
);
export default Images;

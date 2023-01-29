import { FC } from 'react';
import Figcaption from './Figcaption';
import Figure from './Figure';
import Img from './Img';

const Images: FC = () => (
  <article>
    <h1>Images</h1>
    <article>
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

      <Figure>
        <Img
          imgSrc="./images/hedy.jpg"
          altText="Hedy Lamarr - WiFi, GPS & Bluetooth"
        />

        <Figcaption>
          <h3 className="figure-heading">
            Hedy Lamarr, actor and co-inventor of Secret Communication System
          </h3>
          <div>
            Hedy Lamarr was a famous actor, film producer and inventor. She is
            today mostly known for co-inventing an early version of
            frequency-hopping spread spectrum communication in 1941. Today this
            technology is used in secure Wi-Fi, GPS and Bluetooth.
            <p>
              <a href="https://recab.com/hedy-lamarr/">
                Read more about Hedy Lamarr
              </a>
            </p>
          </div>
        </Figcaption>
      </Figure>
      <Figure>
        <Img
          imgSrc="./images/counter-clockwise.jpg"
          altText="Push the cap down and turn it counter-clockwise (from right to left)"
        />

        <Figcaption>
          <h3 className="figure-heading">
            Direction for unscrewing a bottle cap
          </h3>
        </Figcaption>
      </Figure>
    </section>
  </article>
);
export default Images;

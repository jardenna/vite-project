import { FC } from 'react';

const Images: FC = () => (
  <article>
    <h1>Images</h1>

    <section>
      <h2>Decorative Images </h2>
      <p>
        Decorative images don’t add information to the content of a page. For
        example, the information provided by the image might already be given
        using adjacent text, or the image might be included to make the website
        more visually attractive.
      </p>
      <a href="https://www.w3.org/WAI/tutorials/images/decorative/">
        <em>Source</em>
      </a>
      .
    </section>
    <section>
      <h2>Informative Images</h2>
    </section>

    <blockquote>
      For accessibility reasons, authors should not use background images as the
      sole method of conveying important information. See&nbsp;
      <a href="http://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3">
        WCAG failure #F3
      </a>
      <a href="https://www.w3.org/TR/css3-background/#ref-WCAG20">[WCAG20] </a>.
      Images are not accessible in non-graphical presentations, and background
      images specifically might be turned off in high-contrast display modes.
      <a href="https://www.w3.org/TR/css3-background/#the-background-image">
        <em>Source</em>
      </a>
      .
    </blockquote>
  </article>
);
export default Images;

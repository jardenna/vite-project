import { useRef } from 'react';
import Button from './components/Button';
import Figure from './components/Figure';

import Images from './components/formElements/pages/Images';
import useKeyboard from './hooks/useKeyboard';
import useRefDimensions from './hooks/useResize';

import useWindowDimensions from './hooks/useWindowWidth';

function App() {
  const onClick = () => {
    console.log(145);
  };

  const onKeyDown = useKeyboard(onClick, 'Enter');
  const { width } = useWindowDimensions();
  // https://stackoverflow.com/questions/73247936/how-to-dynamically-track-width-height-of-div-in-react-js

  const componentRef = useRef() as any;
  const dimensions = useRefDimensions(componentRef);
  console.log(dimensions);

  // https://www.kindacode.com/article/how-to-get-the-width-height-of-the-viewport-in-react/#Preview

  // https://bobbyhadz.com/blog/react-get-width-of-element

  return (
    <article>
      <Images />
      <div>{width}</div>

      <h1>heading1</h1>
      <div>
        <h1>Heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        Aria
        <div role="heading" aria-level={2}>
          heading 2
        </div>
        <h2 aria-level={2}>heading 3</h2>
      </div>
      <section ref={componentRef}>
        <h2>section 1</h2>

        <Figure
          figcaption="Hedy Lamarr – WiFi, GPS & Bluetooth"
          imgSrc="./images/hedy_lamarr.jpg"
          altText="Hedy Lamarr – WiFi, GPS & Bluetooth"
        >
          <div>
            Hedy Lamarr was a famous actor, film producer and inventor. She is
            today mostly known for co-inventing an early version of
            frequency-hopping spread spectrum communication in 1941, then
            invented to protect Allied torpedo’s to be detected by the Nazis.
            Today this technology is used in secure Wi-Fi, GPS and Bluetooth,
            technology that is used by millions of people all over the world.
          </div>
        </Figure>
      </section>
      <span role="img" aria-label="mouse">
        &#x1f5b0;
      </span>
      <section>
        <h2>section 2</h2>
        <Button text="Klik her" type="submit" />
        <div
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="please click here"
        >
          Click
        </div>
      </section>
      <section>
        <h2>section 3</h2>
        this is section 3
      </section>
    </article>
  );
}

export default App;

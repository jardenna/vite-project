import { useLayoutEffect, useRef, useState, MutableRefObject, FC } from 'react';
import Button from './components/Button';
import Figure from './components/Figure';

import Images from './components/formElements/pages/Images';
import Parent from './components/Parent';

import useKeyboard from './hooks/useKeyboard';
import useWindowSize from './hooks/useWindowWidth';

function App() {
  // const onClick = () => {
  //   console.log(145);
  // };

  // const onKeyDown = useKeyboard(onClick, 'Enter');

  const [winwidth] = useWindowSize();
  console.log(winwidth);

  const [parentsWidth, setParentWidth] = useState(0);

  const parentRef = useRef(null) as MutableRefObject<any>;
  const [collapse, setCollapse] = useState(false);

  // useLayoutEffect(() => {
  //   console.log({ winwidth });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [winwidth]);

  useLayoutEffect(() => {
    setParentWidth(parentRef.current?.getBoundingClientRect().width);
  }, []);

  const products = [
    {
      title: 'Flight',
      productId: '1',
      subTitle: 'Sub 1',
      collapse: false,
      width: 136,
      attributes: [
        {
          variant: 'red',
          price: '134.00',
        },
        {
          variant: 'red',
          price: '134.00',
        },
        {
          variant: 'red',
          price: '134.00',
        },
        {
          variant: 'red',
          price: '134.00',
        },
      ],
    },
    {
      title: 'Data',
      productId: '2',
      subTitle: 'Sub 2',
      collapse: false,
      width: 612,
      attributes: [
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
      ],
    },
    {
      title: 'Something else',
      productId: '3',
      subTitle: 'Sub 3',
      collapse: parentsWidth > winwidth,
      width: 627,
      attributes: [
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00cc',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
        {
          variant: 'pink',
          price: '342.00',
        },
        {
          variant: 'green',
          price: '3400.00',
        },
      ],
    },
  ];

  const val = (attr: any) => {
    let x = 0;

    const c = attr.length + 1;

    if (attr.length % 2 === 0) {
      x = attr.length * 34;
    } else {
      x = c * 40;
    }

    return x;
  };
  const [hidden, setHidden] = useState(true);
  const handleShow = () => {
    setHidden(!hidden);
  };
  return (
    <article ref={parentRef} className="parent1">
      <div className="prod-container">
        {products.map((a) => (
          <Parent key={a.productId}>
            <section data-width={val(a.attributes)}>
              <h2>{a.title}</h2>
              <div className="prod">
                <ul
                  className={`flexbox ${a.collapse ? 'block' : ''} ${
                    hidden ? 'hidden' : ''
                  }`}
                >
                  {a.attributes.map((x, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li className="box" key={i}>
                      {x.price}
                    </li>
                  ))}
                </ul>
                <p>{a.subTitle}</p>
                {a.collapse && (
                  <button type="button" onClick={handleShow}>
                    Arrow
                  </button>
                )}
              </div>
            </section>
          </Parent>
        ))}
      </div>

      {/* <Images />
     

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
      </section> */}
    </article>
  );
}

export default App;

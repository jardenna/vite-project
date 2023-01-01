const Headings = () => (
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
);
export default Headings;

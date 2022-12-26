function App() {
  const onClick = () => {
    console.log(145);
  };
  return (
    <section>
      <h1>hello</h1>
      <img src="" alt="img" />
      <button type="button" onClick={onClick}>
        <div onClick={onClick} role="button" tabIndex={0}>
          klik
        </div>
        Klik
      </button>
    </section>
  );
}

export default App;

function Home() {
  return (
    <section>
      Home
      <div>
        <h2>Shortcuts</h2>
        <p>Windows: Windows Key + Ctrl + Enter</p>
        <p>Mac: System Preferences → Accessibility → Vision → VoiceOver. </p>
      </div>
      <div>
        https://medium.com/onfido-tech/what-ive-learned-from-being-a-one-handed-engineer-for-a-month-739d88048ab4
      </div>
      <div>
        https://developer.chrome.com/docs/devtools/accessibility/reference/#pane
      </div>
      <div>
        By tying up aria properties with styles (instead of adding custom
        classes) we ensure that other developers will most likely keep the aria
        values up to date. Otherwise, an engineer who is not experienced with
        accessibility might forget to update those values when refactoring the
        component.
      </div>
    </section>
  );
}
export default Home;

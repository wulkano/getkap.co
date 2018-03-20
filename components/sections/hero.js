import Section from '../section'
export default () => (
  <Section>
    <div className="gradient">Capture your screen</div>
    <style jsx>{`
      .gradient {
        background-color: #7247ff;
        flex: 1;
        height: 100%;
        background: linear-gradient(#7247ff, #00ffbe);
      }
    `}</style>
  </Section>
)

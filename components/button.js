import colors from '../lib/colors'

const Button = ({ children, theme = '', ...props }) => (
  <a className={`button ${theme}`} {...props}>
    {children}

    <style jsx>{`
      .button {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        padding: 16px;
        border-radius: 4px;
        height: 48px;
        border: 0;
        background: none;
        color: #000;
        font-weight: 700;
        font-size: 1.2rem;
        transition: transform 0.12s ease-in-out;
        z-index: 1;
      }

      .button :global(img:first-child),
      .button :global(svg:first-child) {
        margin-right: 12px;
      }

      .button:hover {
        transform: scale(1.12);
      }

      .button.light {
        background: #fff;
        color: ${colors.purple};
      }

      .button.dark {
        background: ${colors.purple};
        color: white;
      }

      .button.outlined {
        background: transparent;
        border: 2px solid white;
        border-radius: 4px;
        color: white;
      }
    `}</style>
  </a>
)

export default Button

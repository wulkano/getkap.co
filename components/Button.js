import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <a className={`button ${this.props.theme || ''}`} href={this.props.href}>
        {this.props.children}

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
          }

          .button :global(img:first-child) {
            margin-right: 12px;
          }

          .button:hover {
            transform: scale(1.12);
          }

          .button.light {
            background: #fff;
            color: #7247ff;
          }
        `}</style>
      </a>
    )
  }
}

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <defs>
      <linearGradient id="b" x1="0%" y1="100%" y2="0%">
        <stop offset="0%" stop-color="#7247FF" />
        <stop offset="100%" stop-color="#00FFBE" />
      </linearGradient>
      <path
        id="a"
        d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="url(#b)" xlink:href="#a" />
      <use fill="#FFF" xlink:href="#a" />
    </g>
  </svg>
)

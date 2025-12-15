export default function Logo() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="a" x1="0%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#7247FF"/>
                    <stop offset="100%" stopColor="#00FFBE"/>
                </linearGradient>
                <path id="b" d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/>
            </defs>
            <g fill="none" fillRule="evenodd">
                <use fill="url(#a)" xlinkHref="#b"/>
                <use fill="#FFF" xlinkHref="#b"/>
            </g>
        </svg>
    );
}
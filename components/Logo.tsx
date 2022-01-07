import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 172" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.255 77.856C2.129 48.012 14.23 20.941 33.095.11c11.833.582 21.847 3.483 30.041 8.704C72.36 14.691 76.97 22.632 76.97 32.637c0 3.494-.636 6.909-1.908 10.244-1.113 3.335-2.306 5.717-3.578 7.147l-1.67 2.382c-5.087 0-10.732-.873-16.933-2.62-6.043-1.748-10.495-3.971-13.357-6.67l2.862-24.538c-2.385-2.383-6.44-3.574-12.164-3.574-5.565 0-10.017 2.938-13.356 8.815-3.18 5.717-4.77 12.308-4.77 19.773 0 7.464.874 13.102 2.623 16.914 1.75 3.811 4.214 6.75 7.394 8.814 4.93 3.177 10.733 5.4 17.411 6.67l-1.908 13.103c-11.448 0-21.386 3.415-29.814 10.244-2.454 1.942-4.55 4.073-6.29 6.393A128.978 128.978 0 010 86c0-2.001.046-3.991.137-5.97a64.876 64.876 0 014.803-.7 55.478 55.478 0 01-4.685-1.474zM29.76 168.06c14.166-4.961 27.279-14.606 39.338-28.935l-9.54-8.815c-13.675 13.182-27.031 19.773-40.07 19.773-.804 0-1.593-.028-2.366-.084a128.327 128.327 0 0012.638 18.061zm50.464 2.034c1.113.159 3.18.238 6.201.238 14.47 0 25.123-1.667 31.961-5.002.795-12.229 5.247-35.734 13.356-70.516 2.703 0 6.599-.158 11.687-.476 3.657 17.629 7.235 32.081 10.733 43.357 3.657 11.276 7.632 19.853 11.925 25.729 4.452 5.717 10.018 8.576 16.696 8.576 6.837 0 14.072-1.747 21.704-5.241 7.792-3.494 14.629-7.941 20.512-13.341l-5.486-8.814-2.862 1.429c-6.042 2.859-10.494 4.288-13.356 4.288-1.59 0-3.816-1.826-6.679-5.479-6.36-8.735-13.992-27.952-22.896-57.65 11.925-5.242 20.67-12.468 26.236-21.68 5.724-9.37 8.586-19.693 8.586-30.97C208.543 11.515 193.914 0 164.657 0c-24.328 0-47.383 2.065-69.167 6.194l-.716 3.811 3.1 3.336c2.227 2.064 4.453 4.685 6.679 7.861 2.226 3.018 3.339 5.48 3.339 7.385 0 10.006-4.372 33.829-13.118 71.468-8.586 37.481-13.436 60.828-14.549 70.039zm83.24-104.105c-5.406 8.417-12.88 12.626-22.42 12.626h-5.724c5.724-24.934 9.858-45.58 12.402-61.94 0-.158 1.272-.476 3.816-.952 2.703-.635 5.009-.953 6.917-.953 4.452 0 7.791 1.906 10.017 5.718 2.227 3.811 3.34 8.814 3.34 15.008 0 11.752-2.783 21.917-8.348 30.493z"
      />
    </svg>
  );
};

export default Logo;

const AvailableIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_3_18336" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_3_18336"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AvailableIcon;
const SMS = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '40'}
      height={height ?? '40'}
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M13.25 2.625H5.75C3.5 2.625 2 3.75 2 6.375V11.625C2 14.25 3.5 15.375 5.75 15.375H13.25C15.5 15.375 17 14.25 17 11.625V6.375C17 3.75 15.5 2.625 13.25 2.625ZM13.6025 7.1925L11.255 9.0675C10.76 9.465 10.13 9.66 9.5 9.66C8.87 9.66 8.2325 9.465 7.745 9.0675L5.3975 7.1925C5.1575 6.9975 5.12 6.6375 5.3075 6.3975C5.5025 6.1575 5.855 6.1125 6.095 6.3075L8.4425 8.1825C9.0125 8.64 9.98 8.64 10.55 8.1825L12.8975 6.3075C13.1375 6.1125 13.4975 6.15 13.685 6.3975C13.88 6.6375 13.8425 6.9975 13.6025 7.1925Z"
        fill="#6B7280"
      />
    </svg>
  );
};

export default SMS;
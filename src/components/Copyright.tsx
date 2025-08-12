const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center py-2">
      <p className="text-xs md:text-sm">
        © {currentYear} All Rights Reserved by&nbsp;
        <a
          href="https://www.agentsandcarriers.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          A&C Inc
        </a>
      </p>
    </div>
  );
};

export default Copyright;

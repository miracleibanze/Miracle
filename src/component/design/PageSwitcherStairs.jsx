const PageSwitcherStairs = () => {
  return (
    <div
      className={`fixed bottom-0 right-0 left-0 inset-0  flex flex-row-reverse items-end justify-between place-content-end pointer-events-none z-[9999] stairs`}
    >
      {Array(5)
        .fill("")
        .map((item, index) => (
          <div
            className={`stair-${index} light-bg overflow-hiddden text-reverse flex items-center text-[4vw] w-[20vw] relative overflow-hidden`}
            key={index}
          />
        ))}
    </div>
  );
};

export default PageSwitcherStairs;

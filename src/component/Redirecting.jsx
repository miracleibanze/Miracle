import { useParams } from "react-router-dom";

const Redirecting = ({ directDestination }) => {
  console.log(directDestination);

  const { source } = useParams();
  return (
    <div className="fixed inset-0 dark-bg-semiopaque z-[150] flex place-content-center">
      <div className="w-full max-w-md flex flex-col light max-h-max px-8 py-4 mt-4">
        <h4 className="h4">Redirecting ...</h4>
        <div className="body-2 font-normal leading-none">
          You're being redirected to The following page:
        </div>
        <div className="text-primary underline body-1 mb-8">
          {directDestination}
        </div>
        <div className="flex w-full place-content-end gap-2 py-2">
          <a
            href={source === "home" ? "/" : `/${source}`}
            className="button px-4 py-2 rounded-md bg-primary border-2 text-white"
          >
            Cancel
          </a>
          <a
            href={directDestination}
            className="button px-4 py-2 rounded-md bg-primary border-2 text-white"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redirecting;

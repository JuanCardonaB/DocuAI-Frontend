export const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-500 text-white p-2.5 rounded-md">{message}</div>
  );
};

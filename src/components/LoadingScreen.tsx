import "../customStyles/spinner.css";

export const LoadingScreen = () => {
  return (
    <main className="w-screen h-screen z-10 bg-black absolute opacity-70 flex justify-center items-center">
      <div className="spinner"></div>
    </main>
  );
};

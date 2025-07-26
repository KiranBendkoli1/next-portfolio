const Loader = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div
        className="w-8 h-8 border-4 rounded-full animate-spin border-primary border-t-transparent"
        role="status"
      />
    </div>
  );
};

export default Loader;

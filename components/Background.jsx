export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-bg transition-colors duration-300" />
      <div className="orb orb-1 w-[480px] h-[480px] -top-32 -left-32" />
      <div className="orb orb-2 w-[420px] h-[420px] bottom-0 right-1/4" />
    </div>
  );
}
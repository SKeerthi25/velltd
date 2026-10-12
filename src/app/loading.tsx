export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] h-[3px] bg-slate-200/50 dark:bg-slate-800/50 overflow-hidden pointer-events-none">
      <div className="h-full bg-gradient-to-r from-zoho-blue via-zoho-yellow to-zoho-green animate-pulse w-full" />
    </div>
  );
}

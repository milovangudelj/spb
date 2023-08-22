export default function SanityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        height: "100dvh",
        maxHeight: "100dvh",
        margin: 0,
        padding: 0,
        overflow: "auto",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {children}
    </div>
  );
}

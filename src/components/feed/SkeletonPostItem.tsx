export default function SkeletonPostItem() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "15px",
        overflow: "hidden",
      }}
    >
      {/* username skeleton */}
      <div
        className="skeleton"
        style={{
          width: "120px",
          height: "16px",
          margin: "10px",
        }}
      />

      {/* image skeleton */}
      <div
        className="skeleton"
        style={{
          width: "100%",
          aspectRatio: "4/5",
        }}
      />

      {/* caption skeleton */}
      <div
        className="skeleton"
        style={{
          width: "80%",
          height: "14px",
          margin: "10px",
        }}
      />
    </div>
  );
}

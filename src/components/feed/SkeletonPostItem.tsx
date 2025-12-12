import React from "react";

function SkeletonPostItem() {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "15px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div>
        {/* username */}
        <div
          style={{
            width: "120px",
            height: "16px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />

        {/* image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 5",
            backgroundColor: "#eaeaea",
            borderRadius: "6px",
            marginBottom: "12px",
          }}
        />

        {/* likes */}
        <div
          style={{
            width: "80px",
            height: "14px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        />

        {/* caption */}
        <div
          style={{
            width: "90%",
            height: "14px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            marginBottom: "6px",
          }}
        />
        <div
          style={{
            width: "70%",
            height: "14px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />

        {/* comment input */}
        <div
          style={{
            width: "100%",
            height: "32px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(SkeletonPostItem);

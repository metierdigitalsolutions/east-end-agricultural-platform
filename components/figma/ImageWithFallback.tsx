"use client";

import React, { useState } from "react";
import Image from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, width, height, ...rest } = props;

  // Convert width and height to numbers
  const imgWidth =
    typeof width === "number"
      ? width
      : typeof width === "string"
        ? parseInt(width, 10)
        : 500;
  const imgHeight =
    typeof height === "number"
      ? height
      : typeof height === "string"
        ? parseInt(height, 10)
        : 300;

  // Convert src to string if it's a Blob
  const imageSrc = src instanceof Blob ? URL.createObjectURL(src) : src || "";

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          width={88}
          height={88}
          {...rest}
          data-original-url={imageSrc}
        />
      </div>
    </div>
  ) : (
    <Image
      src={imageSrc}
      alt={alt || ""}
      className={className}
      style={style}
      width={imgWidth}
      height={imgHeight}
      {...rest}
      onError={handleError}
    />
  );
}
